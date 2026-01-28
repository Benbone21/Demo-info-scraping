#!/bin/bash

# Simple deployment script for Cloudflare Pages

echo "Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "Build successful!"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://dash.cloudflare.com/"
    echo "2. Navigate to Workers & Pages > Create application > Pages"
    echo "3. Upload the 'build' folder"
    echo ""
    echo "Or use Wrangler CLI:"
    echo "  wrangler pages deploy build --project-name=demo-info-scraping"
else
    echo "Build failed. Please fix errors and try again."
    exit 1
fi
