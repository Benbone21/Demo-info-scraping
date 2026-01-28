import React from 'react';

function InfoItem({ label, value, dangerouslySetInnerHTML }) {
  return (
    <div className="info-item">
      <div className="info-label">{label}</div>
      <div className="info-value">
        {dangerouslySetInnerHTML ? (
          <span dangerouslySetInnerHTML={{ __html: value }} />
        ) : (
          value
        )}
      </div>
    </div>
  );
}

export default InfoItem;
