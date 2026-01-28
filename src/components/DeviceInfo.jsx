import React from 'react';
import InfoItem from './InfoItem';

function DeviceInfo() {
  return (
    <div className="info-card">
      <h2>Device & Browser Information</h2>
      <div>
        <InfoItem label="User Agent" value={navigator.userAgent} />
        <InfoItem label="Platform" value={navigator.platform} />
        <InfoItem label="Vendor" value={navigator.vendor || 'Not available'} />
        <InfoItem label="Language" value={navigator.language} />
        <InfoItem label="Languages" value={navigator.languages.join(', ')} />
        <InfoItem label="Online Status" value={navigator.onLine ? 'Online' : 'Offline'} />
        <InfoItem label="Cookie Enabled" value={navigator.cookieEnabled ? 'Yes' : 'No'} />
        <InfoItem label="PDF Viewer Enabled" value={navigator.pdfViewerEnabled ? 'Yes' : 'No'} />
      </div>
    </div>
  );
}

export default DeviceInfo;
