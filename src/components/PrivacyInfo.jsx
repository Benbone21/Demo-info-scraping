import React from 'react';
import InfoItem from './InfoItem';

function PrivacyInfo({ cookiesAccepted, consentSettings }) {
  return (
    <div className="info-card">
      <h2>Privacy & Settings</h2>
      <div>
        <InfoItem label="Cookie Consent Status" value={cookiesAccepted ? '✅ Accepted - Full tracking enabled' : 'Pending or declined'} />
        <InfoItem label="Do Not Track" value={navigator.doNotTrack || 'Not set'} />
        <InfoItem label="Java Enabled" value={navigator.javaEnabled ? navigator.javaEnabled().toString() : 'false'} />
        <InfoItem label="Plugins Count" value={navigator.plugins ? navigator.plugins.length : 0} />
        {consentSettings.functional && <InfoItem label="🔴 Functional Tracking" value="ACTIVE - Collecting location, sensors, device data" />}
        {consentSettings.analytics && <InfoItem label="🔴 Analytics Tracking" value="ACTIVE - Recording all interactions" />}
        {consentSettings.marketing && <InfoItem label="🔴 Marketing Tracking" value="ACTIVE - Building advertising profile" />}
      </div>
    </div>
  );
}

export default PrivacyInfo;
