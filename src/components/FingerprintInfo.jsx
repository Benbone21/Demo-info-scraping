import React, { useEffect, useState } from 'react';
import InfoItem from './InfoItem';

function FingerprintInfo() {
  const [canvasHash, setCanvasHash] = useState('');
  const [mouseMovements, setMouseMovements] = useState(0);

  useEffect(() => {
    // Canvas fingerprinting
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Browser fingerprint', 2, 2);
      const data = canvas.toDataURL();
      setCanvasHash(data.slice(-50));
    } catch (e) {
      setCanvasHash('Error');
    }

    // Mouse tracking
    const handleMouseMove = () => setMouseMovements(prev => prev + 1);
    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="info-card">
      <h2>Advanced Fingerprinting</h2>
      <div>
        <InfoItem label="Canvas Fingerprint" value={canvasHash} />
        <InfoItem label="Mouse Movements" value={`${mouseMovements} detected`} />
        <InfoItem label="Protocol Handlers" value="Can detect some installed apps" />
      </div>
    </div>
  );
}

export default FingerprintInfo;
