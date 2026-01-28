# Quick Start Guide

## 1. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

App opens at http://localhost:3000

## 2. Deploy to Cloudflare (3 Easy Ways)

### Method A: GitHub (Recommended)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main

# Then:
# 1. Go to dash.cloudflare.com
# 2. Workers & Pages → Create → Pages → Connect Git
# 3. Select repo, set build command: npm run build
# 4. Set output: build
# 5. Deploy
```

### Method B: Direct Upload
```bash
# Build locally
npm run build

# Then:
# 1. Go to dash.cloudflare.com
# 2. Workers & Pages → Create → Pages → Upload assets
# 3. Upload the 'build' folder
# 4. Done!
```

### Method C: Wrangler CLI
```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
./deploy.sh
```

## 3. Done!

Your site is live at:
`https://your-project-name.pages.dev`

## What Changed?

✅ **Data dense** - Compact layout, more data visible  
✅ **No emojis** - Professional appearance  
✅ **Simple cookie consent** - Just Accept/Decline buttons  
✅ **Cloudflare ready** - Easy deployment configuration  
✅ **Free hosting** - Unlimited bandwidth on Cloudflare Pages  

## Troubleshooting

**Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Need help?**
- See [DEPLOY.md](DEPLOY.md) for detailed instructions
- See [CHANGES.md](CHANGES.md) for what was modified
- Check [Cloudflare Docs](https://developers.cloudflare.com/pages/)

## Features

- Real-time data collection demonstration
- Interactive map with geolocation
- Browser fingerprinting
- Network information (IP, ISP, location)
- Device & hardware specs
- Privacy education

**Note:** All data is client-side only. Nothing is sent to any server.
