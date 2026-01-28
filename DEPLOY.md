# Cloudflare Pages Deployment Guide

## Quick Deploy

This is a standalone HTML file, so deployment is very simple - no build process needed.

### Method 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Deploy standalone HTML"
git push
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Build command:** Leave empty (or enter `echo "Static HTML"`)
   - **Build output directory:** `/` (root directory)
   - **Framework preset:** None
6. Click **Save and Deploy**

Your site will be live at: `https://your-project-name.pages.dev`

### Method 2: Direct Upload (No Git Required)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
3. Upload the `index.html` file
4. Name your project and deploy

### Method 3: Using Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
wrangler pages deploy . --project-name=demo-info-scraping
```

## Custom Domain

To add a custom domain:

1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to add DNS records

## Updating Deployment

### Via Git (Method 1)
```bash
git add .
git commit -m "Update content"
git push
```
Cloudflare automatically rebuilds and deploys.

### Via Direct Upload (Method 2)
Simply upload the updated `index.html` file through the dashboard.

### Via Wrangler (Method 3)
```bash
wrangler pages deploy . --project-name=demo-info-scraping
```

## Cost

Cloudflare Pages is **FREE** for:
- Unlimited requests
- Unlimited bandwidth
- Unlimited builds per month
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
