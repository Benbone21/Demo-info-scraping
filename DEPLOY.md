# Cloudflare Pages Deployment Guide

## Quick Deploy

### Method 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory:** `/` (leave blank or root)
6. Click **Save and Deploy**

Your site will be live at: `https://your-project-name.pages.dev`

### Method 2: Direct Upload (No Git Required)

1. Build the project locally:
```bash
npm install
npm run build
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
4. Drag and drop the `build` folder or select it
5. Name your project and deploy

### Method 3: Using Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Build and deploy:
```bash
npm run build
wrangler pages publish build --project-name=demo-info-scraping
```

## Environment Setup

### Build Settings (for Git integration)

- **Framework preset:** Create React App
- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Node version:** 18 (or latest LTS)

### Environment Variables

No environment variables are required for this project since it's entirely client-side.

## Custom Domain

To add a custom domain:

1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to add DNS records

## Troubleshooting

### Build fails with memory errors

Add this to package.json scripts:
```json
"build": "NODE_OPTIONS=--max_old_space_size=4096 react-scripts build"
```

### 404 errors on page refresh

The `public/_redirects` file is already configured to handle this. If issues persist, verify it exists.

### Map tiles not loading

Ensure the Leaflet CSS is loaded. Check the console for CORS errors. OpenStreetMap should work by default.

## Performance Tips

1. **Enable Cloudflare caching** - Automatically enabled for static assets
2. **Use Cloudflare CDN** - Distributes content globally
3. **Enable Auto Minify** - In Cloudflare dashboard under Speed → Optimization

## Monitoring

View analytics in Cloudflare Dashboard:
- **Web Analytics:** Real-time visitor metrics
- **Page Views:** Track popular pages
- **Performance:** Core Web Vitals

## Updating Deployment

### Via Git (Method 1)
```bash
git add .
git commit -m "Update description"
git push
```
Cloudflare automatically rebuilds and deploys.

### Via Direct Upload (Method 2)
```bash
npm run build
```
Then upload the new `build` folder through the dashboard.

### Via Wrangler (Method 3)
```bash
npm run build
wrangler pages publish build
```

## Cost

Cloudflare Pages is **FREE** for:
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- Custom domains
- DDoS protection

## Security

### HTTPS
Automatic HTTPS is enabled by default.

### Headers
Add security headers in Cloudflare Dashboard → Security → Headers

Recommended headers:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
