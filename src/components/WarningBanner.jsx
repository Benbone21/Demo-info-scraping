import React from 'react';
import './WarningBanner.css';

function WarningBanner() {
  return (
    <div className="warning-banner">
      <h1>DATA HARVESTED</h1>
      <p>This page has collected the following information from your browser</p>
      <p style={{ fontSize: '0.9em', marginTop: '10px', opacity: 0.8 }}>
        (This is a demonstration - no data is being sent anywhere)
      </p>
    </div>
  );
}

export default WarningBanner;
