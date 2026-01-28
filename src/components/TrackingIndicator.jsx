import React from 'react';
import './TrackingIndicator.css';

function TrackingIndicator({ isActive }) {
  return (
    <div className={`tracking-indicator ${isActive ? 'active' : ''}`}>
      <span className="tracking-dot"></span>
      TRACKING ACTIVE
    </div>
  );
}

export default TrackingIndicator;
