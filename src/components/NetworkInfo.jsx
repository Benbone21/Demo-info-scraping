import React, { useEffect, useState } from 'react';
import InfoItem from './InfoItem';

function NetworkInfo() {
  const [ipInfo, setIpInfo] = useState({});

  useEffect(() => {
    // Fetch public IP
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIpInfo(prev => ({ ...prev, ipv4: data.ip })))
      .catch(() => {});

    // Fetch IP geolocation
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setIpInfo(prev => ({
        ...prev,
        isp: data.org,
        city: data.city,
        region: data.region,
        country: data.country_name,
        postal: data.postal,
        asn: data.asn
      })))
      .catch(() => {});
  }, []);

  return (
    <div className="info-card">
      <h2>Network & IP Information</h2>
      <div>
        <InfoItem label="Public IPv4" value={ipInfo.ipv4 || 'Loading...'} />
        <InfoItem label="ISP" value={ipInfo.isp || 'Loading...'} />
        <InfoItem label="City (from IP)" value={ipInfo.city || 'Loading...'} />
        <InfoItem label="Region" value={ipInfo.region || 'Loading...'} />
        <InfoItem label="Country" value={ipInfo.country || 'Loading...'} />
        <InfoItem label="Postal Code" value={ipInfo.postal || 'Loading...'} />
        <InfoItem label="ASN" value={ipInfo.asn || 'Loading...'} />
      </div>
    </div>
  );
}

export default NetworkInfo;
