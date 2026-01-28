# Browser Data Demonstration

Educational demonstration showing what information browsers expose to websites.

## Features

- Simple cookie consent (Accept/Decline)
- Interactive map with geolocation
- Real-time data collection
- Browser fingerprinting demonstration
- Privacy risk education
- Data-dense, compact display

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

3. Build for production:
```bash
npm run build
```

## Deploy to Cloudflare Pages

See [DEPLOY.md](DEPLOY.md) for detailed instructions.

### Quick Deploy

**Option 1: GitHub Integration**
1. Push code to GitHub
2. Connect repository in Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `build`

**Option 2: Direct Upload**
```bash
npm run build
```
Then upload the `build` folder to Cloudflare Pages dashboard.

**Option 3: Wrangler CLI**
```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages publish build --project-name=demo-info-scraping
```

## Project Structure

```
src/
├── App.jsx                 # Main app
├── components/
│   ├── CookieConsent.jsx   # Simple cookie modal
│   ├── LocationInfo.jsx    # Location with map
│   ├── DeviceInfo.jsx      # Device data
│   ├── HardwareInfo.jsx    # Hardware specs
│   ├── NetworkInfo.jsx     # Network & IP
│   ├── FingerprintInfo.jsx # Browser fingerprint
│   └── ...                 # Other components
```

## What Data is Collected

- Device & Browser: User agent, platform, language
- Location: Time zone, IP geolocation, GPS (if granted)
- Hardware: Screen resolution, CPU cores, memory
- Network: IP address, ISP, connection type
- Fingerprinting: Canvas hash, fonts, WebGL
- Tracking: Mouse movements, scroll behavior

## Privacy Note

**All data collection is client-side only.** Nothing is sent to any server. This is purely educational to demonstrate what websites *can* collect.

## Technologies

- React 18
- React Leaflet (maps)
- OpenStreetMap
- Browser APIs

## License

Educational use only
