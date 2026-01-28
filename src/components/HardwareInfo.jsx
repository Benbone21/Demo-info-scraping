import React from 'react';
import InfoItem from './InfoItem';

function HardwareInfo() {
  return (
    <div className="info-card">
      <h2>Display & Hardware</h2>
      <div>
        <InfoItem label="Screen Resolution" value={`${screen.width} × ${screen.height}`} />
        <InfoItem label="Available Screen" value={`${screen.availWidth} × ${screen.availHeight}`} />
        <InfoItem label="Color Depth" value={`${screen.colorDepth} bits`} />
        <InfoItem label="Pixel Ratio" value={window.devicePixelRatio} />
        <InfoItem label="Viewport Size" value={`${window.innerWidth} × ${window.innerHeight}`} />
        <InfoItem label="CPU Cores" value={navigator.hardwareConcurrency || 'Not available'} />
        <InfoItem label="Device Memory" value={navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Not available'} />
        <InfoItem label="Max Touch Points" value={navigator.maxTouchPoints || 0} />
      </div>
    </div>
  );
}

export default HardwareInfo;
