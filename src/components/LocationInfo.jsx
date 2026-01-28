import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import L from 'leaflet';
import InfoItem from './InfoItem';
import 'leaflet/dist/leaflet.css';
import './LocationInfo.css';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function LocationInfo({ cookiesAccepted, consentSettings }) {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('Loading...');
  const [showMap, setShowMap] = useState(false);
  const [geoStatus, setGeoStatus] = useState('Not requested');

  useEffect(() => {
    if (cookiesAccepted && consentSettings.functional) {
      requestLocation();
    }
  }, [cookiesAccepted, consentSettings]);

  const requestLocation = () => {
    setGeoStatus('Requesting permission...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            speed: position.coords.speed
          };
          setLocation(coords);
          setShowMap(true);
          setGeoStatus('✓ Location Granted - See map below');

          // Reverse geocode
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}&zoom=18&addressdetails=1`)
            .then(res => res.json())
            .then(data => {
              if (data.display_name) {
                setAddress(data.display_name);
              } else {
                setAddress('Address lookup failed');
              }
            })
            .catch(() => setAddress('Unable to determine address'));
        },
        (error) => {
          setGeoStatus('Permission denied or unavailable');
        },
        { enableHighAccuracy: true }
      );
    } else {
      setGeoStatus('Geolocation not supported');
    }
  };

  const connectionInfo = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  return (
    <div className="info-card">
      <h2>Location & Network</h2>
      <div>
        <InfoItem label="Time Zone" value={Intl.DateTimeFormat().resolvedOptions().timeZone} />
        <InfoItem label="Time Zone Offset" value={`${new Date().getTimezoneOffset()} minutes`} />
        <InfoItem label="Local Time" value={new Date().toString()} />
        <InfoItem label="Referrer" value={document.referrer || 'Direct visit'} />

        {connectionInfo && (
          <>
            <InfoItem label="Connection Type" value={connectionInfo.effectiveType || 'Unknown'} />
            <InfoItem label="Downlink Speed" value={connectionInfo.downlink ? `${connectionInfo.downlink} Mbps` : 'Unknown'} />
            <InfoItem label="RTT" value={connectionInfo.rtt ? `${connectionInfo.rtt} ms` : 'Unknown'} />
            <InfoItem label="Save Data Mode" value={connectionInfo.saveData ? 'Enabled' : 'Disabled'} />
          </>
        )}

        <div className="info-item">
          <div className="info-label">Geolocation</div>
          <div className="info-value">
            {!showMap ? (
              <button className="request-permission-btn" onClick={requestLocation}>
                Request Location
              </button>
            ) : (
              <span className="loading">{geoStatus}</span>
            )}
          </div>
        </div>
      </div>

      {showMap && location && (
        <>
          <div className="map-container visible">
            <MapContainer
              center={[location.lat, location.lon]}
              zoom={15}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[location.lat, location.lon]}>
                <Popup>
                  <strong>YOU ARE HERE</strong><br />
                  Lat: {location.lat.toFixed(6)}<br />
                  Lon: {location.lon.toFixed(6)}
                </Popup>
              </Marker>
              <Circle
                center={[location.lat, location.lon]}
                radius={location.accuracy}
                pathOptions={{ color: '#d32f2f', fillColor: '#f03', fillOpacity: 0.2 }}
              />
            </MapContainer>
          </div>

          <div className="location-info-box visible">
            <h3>Your Exact Location Has Been Captured</h3>
            <p><strong>Address:</strong> <span style={{ color: '#d32f2f', fontWeight: 600 }}>{address}</span></p>
            <p><strong>Latitude:</strong> {location.lat.toFixed(6)}</p>
            <p><strong>Longitude:</strong> {location.lon.toFixed(6)}</p>
            <p><strong>Accuracy:</strong> ±{location.accuracy.toFixed(0)} meters</p>
            <p><strong>Altitude:</strong> {location.altitude ? `${location.altitude.toFixed(0)} meters` : 'Not available'}</p>
            <p><strong>Speed:</strong> {location.speed ? `${location.speed.toFixed(2)} m/s` : 'Not available'}</p>
            <div className="map-warning">
              WARNING: A malicious website could use this to track your movements, find your home address, or stalk you!
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LocationInfo;
