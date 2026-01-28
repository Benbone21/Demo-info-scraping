import React from 'react';
import InfoItem from './InfoItem';

function SensorsInfo() {
  return (
    <div className="info-card">
      <h2>Sensors & Permissions</h2>
      <div>
        <InfoItem label="Motion Sensors" value={window.DeviceMotionEvent ? 'Supported' : 'Not supported'} />
        <InfoItem label="Orientation Sensors" value={window.DeviceOrientationEvent ? 'Supported' : 'Not supported'} />
        <InfoItem label="Light Sensor" value={'AmbientLightSensor' in window ? 'Supported' : 'Not supported'} />
        <InfoItem label="Proximity Sensor" value={'ProximitySensor' in window ? 'Supported' : 'Not supported'} />
      </div>
    </div>
  );
}

export default SensorsInfo;
