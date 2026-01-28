import React from 'react';
import './CookieConsent.css';

function CookieConsent({ onAccept, onDecline }) {
  const handleAccept = () => {
    onAccept({ functional: true, analytics: true, marketing: true });
  };

  return (
    <div className="cookie-overlay">
      <div className="cookie-modal">
        <h2>Privacy Notice</h2>
        <p>
          This site uses cookies and tracking technologies to collect device information,
          location data, and browsing behavior. By accepting, you grant permission for
          geolocation access, sensor data collection, and behavioral tracking.
        </p>

        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-decline" onClick={onDecline}>
            Decline
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
