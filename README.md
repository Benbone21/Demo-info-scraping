# Browser Data Demonstration

Educational demonstration showing what information browsers expose to websites.

## Features

- Cookie consent demonstration
- Interactive map with geolocation
- Real-time data collection
- Browser fingerprinting demonstration
- Privacy risk education
- Comprehensive data display

## Quick Start

Simply open `index.html` in a web browser:

```bash
open index.html
```

Or start a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then open http://localhost:8000

## Deploy to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Build command:** Leave empty
   - **Build output directory:** `/` (root)
   - **Framework preset:** None
6. Click **Save and Deploy**

### Method 2: Direct Upload

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
3. Upload the `index.html` file
4. Deploy

### Method 3: Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=demo-info-scraping
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

## License

Educational use only
