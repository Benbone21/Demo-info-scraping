import React from 'react';
import InfoItem from './InfoItem';

function FeaturesInfo() {
  return (
    <div className="info-card">
      <h2>Browser Features</h2>
      <div>
        <InfoItem label="WebAssembly" value={typeof WebAssembly !== 'undefined' ? 'Supported' : 'Not supported'} />
        <InfoItem label="Service Workers" value={'serviceWorker' in navigator ? 'Supported' : 'Not supported'} />
        <InfoItem label="Web Workers" value={typeof Worker !== 'undefined' ? 'Supported' : 'Not supported'} />
        <InfoItem label="WebSocket" value={typeof WebSocket !== 'undefined' ? 'Supported' : 'Not supported'} />
        <InfoItem label="Notifications" value={'Notification' in window ? `Supported - Status: ${Notification.permission}` : 'Not supported'} />
        <InfoItem label="Web Bluetooth" value={'bluetooth' in navigator ? 'Supported' : 'Not supported'} />
        <InfoItem label="Gamepad API" value={'getGamepads' in navigator ? 'Supported' : 'Not supported'} />
        <InfoItem label="Speech Synthesis" value={'speechSynthesis' in window ? 'Supported' : 'Not supported'} />
      </div>
    </div>
  );
}

export default FeaturesInfo;
