import React, { useState } from 'react';
import CookieConsent from './components/CookieConsent';
import TrackingIndicator from './components/TrackingIndicator';
import WarningBanner from './components/WarningBanner';
import RiskEducation from './components/RiskEducation';
import DeviceInfo from './components/DeviceInfo';
import LocationInfo from './components/LocationInfo';
import HardwareInfo from './components/HardwareInfo';
import PrivacyInfo from './components/PrivacyInfo';
import FingerprintInfo from './components/FingerprintInfo';
import NetworkInfo from './components/NetworkInfo';
import FeaturesInfo from './components/FeaturesInfo';
import SensorsInfo from './components/SensorsInfo';
import StorageInfo from './components/StorageInfo';
import './App.css';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(true);
  const [trackingActive, setTrackingActive] = useState(false);
  const [consentSettings, setConsentSettings] = useState({
    functional: false,
    analytics: false,
    marketing: false
  });

  const handleAcceptCookies = (settings) => {
    setCookiesAccepted(true);
    setConsentSettings(settings);
    setShowCookieModal(false);

    if (settings.functional || settings.analytics || settings.marketing) {
      setTrackingActive(true);
    }

    // Store preferences and set tracking cookies
    try {
      localStorage.setItem('cookie-consent', JSON.stringify({
        essential: true,
        ...settings,
        timestamp: new Date().toISOString()
      }));

      // Set various tracking cookies
      const userId = 'user_' + Math.random().toString(36).substr(2, 9);
      const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);

      document.cookie = `user_id=${userId}; max-age=31536000; path=/`;
      document.cookie = `session_id=${sessionId}; path=/`;
      document.cookie = `_ga=${Math.random().toString(36).substr(2)}; max-age=63072000; path=/`;
      document.cookie = `_fbp=${Math.random().toString(36).substr(2)}; max-age=7776000; path=/`;

      if (settings.analytics) {
        document.cookie = `analytics_tracking=enabled; max-age=31536000; path=/`;
      }

      if (settings.marketing) {
        document.cookie = `marketing_id=${Math.random().toString(36).substr(2)}; max-age=31536000; path=/`;
        document.cookie = `ad_targeting=enabled; max-age=31536000; path=/`;
      }

      localStorage.setItem('user_tracking_id', userId);
      localStorage.setItem('session_id', sessionId);
      localStorage.setItem('first_visit', new Date().toISOString());
    } catch (e) {
      console.error('Error storing cookies:', e);
    }
  };

  const handleDeclineCookies = () => {
    setCookiesAccepted(false);
    setShowCookieModal(false);

    try {
      localStorage.setItem('cookie-consent', JSON.stringify({
        essential: true,
        functional: false,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString()
      }));
    } catch (e) {
      console.error('Error storing decline:', e);
    }
  };

  return (
    <div className="App">
      {showCookieModal && (
        <CookieConsent
          onAccept={handleAcceptCookies}
          onDecline={handleDeclineCookies}
        />
      )}

      <TrackingIndicator isActive={trackingActive} />

      <div className="container">
        <WarningBanner />
        <RiskEducation />

        <div className="info-grid">
          <DeviceInfo />
          <LocationInfo
            cookiesAccepted={cookiesAccepted}
            consentSettings={consentSettings}
          />
          <HardwareInfo />
          <PrivacyInfo
            cookiesAccepted={cookiesAccepted}
            consentSettings={consentSettings}
          />
          <FingerprintInfo />
          <NetworkInfo />
          <FeaturesInfo />
          <SensorsInfo />
          <StorageInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
