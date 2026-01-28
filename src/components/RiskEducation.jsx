import React from 'react';
import './RiskEducation.css';

function RiskEducation() {
  return (
    <div className="risk-education">
      <h2>Understanding the Risks</h2>
      <div className="risk-content">
        <h3>Why Random QR Codes Are Dangerous</h3>
        <p>
          <strong>QR codes are just links in disguise.</strong> When you scan a QR code, you're trusting whoever created it with your device's safety.
          Here's what can happen:
        </p>
        <ul>
          <li><strong>Phishing Attacks:</strong> Malicious QR codes can redirect you to fake login pages that steal your credentials (banking, email, social media).</li>
          <li><strong>Malware Installation:</strong> Some QR codes trigger automatic downloads of malicious apps or files.</li>
          <li><strong>Financial Scams:</strong> QR codes can initiate unauthorized payments or crypto transfers.</li>
          <li><strong>Location Tracking:</strong> Once you visit a link, the website knows your IP address, approximate location, and can track your movements.</li>
          <li><strong>Data Harvesting:</strong> As this page demonstrates, websites can collect extensive information about you without any visible indication.</li>
        </ul>

        <h3>What Websites Can Learn About You</h3>
        <p>
          Just by visiting a website (like you did by scanning that QR code), the site can collect:
        </p>
        <ul>
          <li><strong>Your Real Identity:</strong> IP address reveals your ISP, city, postal code, and can often be linked back to you personally.</li>
          <li><strong>Your Device Fingerprint:</strong> A unique identifier created from your screen size, fonts, browser version, plugins, GPU info, etc. This can track you across websites even without cookies.</li>
          <li><strong>Your Location:</strong> Time zone, language, and IP-based geolocation can pinpoint where you are.</li>
          <li><strong>Your Hardware:</strong> Device type, OS version, CPU cores, memory, battery level, sensors available.</li>
          <li><strong>Your Behavior:</strong> Mouse movements, scroll patterns, typing rhythm can identify you uniquely (behavioral biometrics).</li>
          <li><strong>Your Network:</strong> WebRTC can leak your real local IP address even if you're using a VPN.</li>
          <li><strong>Your Privacy Settings:</strong> Ad blocker usage, private mode detection, cookie preferences.</li>
        </ul>

        <h3>The Cookie Consent Trap</h3>
        <p>
          <strong>Most people click "Accept All" without reading.</strong> Cookie consent popups are designed to make accepting
          easier than declining. Notice how the "Accept" button is often bigger, brighter, and positioned first?
        </p>
        <ul>
          <li><strong>Pre-checked boxes:</strong> All tracking options are enabled by default - you have to manually opt-out.</li>
          <li><strong>Confusing language:</strong> Terms like "functional" and "analytics" sound harmless but enable extensive tracking.</li>
          <li><strong>Dark patterns:</strong> Declining is made difficult - multiple clicks, hidden options, or warning messages.</li>
          <li><strong>Unnecessary permissions:</strong> Accepting cookies can trigger requests for location, notifications, and sensors.</li>
          <li><strong>Legal loopholes:</strong> "Essential" cookies are set regardless of your choice - companies define what's "essential".</li>
        </ul>

        <h3>How This Data Is Used</h3>
        <ul>
          <li><strong>Tracking & Profiling:</strong> Companies build detailed profiles about your interests, habits, and demographics to target ads and sell your data.</li>
          <li><strong>Price Discrimination:</strong> Some sites show different prices based on your device, location, or browsing history.</li>
          <li><strong>Identity Theft:</strong> Combined data points can be used for social engineering or account takeovers.</li>
          <li><strong>Persistent Tracking:</strong> Browser fingerprinting lets companies track you even after clearing cookies or using private mode.</li>
          <li><strong>Security Vulnerabilities:</strong> Information about your system can help attackers craft targeted exploits.</li>
          <li><strong>Cross-site tracking:</strong> Marketing cookies let companies follow you across different websites to build a complete picture of your online behavior.</li>
        </ul>

        <h3>How to Protect Yourself</h3>
        <ul>
          <li><strong>Never scan QR codes from untrusted sources</strong> (random stickers, suspicious emails, unknown public places).</li>
          <li><strong>Preview URLs before opening:</strong> Many camera apps show the URL before opening - check if it looks legitimate.</li>
          <li><strong>Always click "Decline All" or "Reject" on cookie banners:</strong> Don't accept cookies unless you trust the site. Read what you're agreeing to.</li>
          <li><strong>Deny permission requests:</strong> Location, notifications, camera, microphone - deny unless essential. You can always grant them later if needed.</li>
          <li><strong>Use privacy-focused browsers:</strong> Firefox with strict tracking protection, Brave, or Tor Browser.</li>
          <li><strong>Install browser extensions:</strong> uBlock Origin (ad/tracker blocker), Privacy Badger, Cookie AutoDelete, WebRTC Leak Shield.</li>
          <li><strong>Use a VPN:</strong> Hides your real IP address from websites (but doesn't prevent fingerprinting).</li>
          <li><strong>Clear cookies regularly:</strong> Or use private/incognito mode for sensitive browsing (but remember - you can still be tracked).</li>
          <li><strong>Disable JavaScript on untrusted sites:</strong> Use extensions like NoScript or uMatrix (but breaks many sites).</li>
          <li><strong>Keep software updated:</strong> Browsers and OS updates patch security vulnerabilities.</li>
          <li><strong>Review browser settings:</strong> Disable third-party cookies, enable "Do Not Track", limit site data.</li>
        </ul>

        <div className="reminder-box">
          <strong>Remember:</strong> This demonstration page is educational and doesn't send your data anywhere.
          However, real malicious websites <em>would</em> collect and transmit all of this information to their servers.
          All the data shown below was collected automatically the moment you loaded this page - no clicks or permissions required for most of it.
        </div>
      </div>
    </div>
  );
}

export default RiskEducation;
