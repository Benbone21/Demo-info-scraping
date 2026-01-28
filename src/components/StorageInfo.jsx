import React, { useEffect, useState } from 'react';
import InfoItem from './InfoItem';

function StorageInfo() {
  const [storageInfo, setStorageInfo] = useState({});

  useEffect(() => {
    if (navigator.storage && navigator.storage.estimate) {
      navigator.storage.estimate().then(estimate => {
        const usage = (estimate.usage / 1024 / 1024).toFixed(2);
        const quota = (estimate.quota / 1024 / 1024).toFixed(2);
        const percentage = ((estimate.usage / estimate.quota) * 100).toFixed(2);
        setStorageInfo({ usage, quota, percentage });
      });
    }
  }, []);

  const cookieCount = document.cookie ? document.cookie.split(';').length : 0;

  return (
    <div className="info-card">
      <h2>Storage & Quotas</h2>
      <div>
        <InfoItem 
          label="Storage Used" 
          value={storageInfo.usage ? `${storageInfo.usage} MB of ${storageInfo.quota} MB (${storageInfo.percentage}%)` : 'Loading...'} 
        />
        <InfoItem label="Cookies" value={`${cookieCount} cookies`} dangerouslySetInnerHTML />
        <InfoItem label="Cache API" value={'caches' in window ? 'Supported' : 'Not supported'} />
        <InfoItem label="File System Access" value={'showOpenFilePicker' in window ? 'Supported' : 'Not supported'} />
      </div>
    </div>
  );
}

export default StorageInfo;
