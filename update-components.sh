#!/bin/bash

# Remove emojis and update component titles
cd /Users/ben_bone_/Documents/GitHub/Demo-info-scraping/src/components

# Update WarningBanner
sed -i '' 's/⚠️ DATA HARVESTED ⚠️/DATA HARVESTED/g' WarningBanner.jsx

# Update TrackingIndicator  
sed -i '' 's/🔴 TRACKING ACTIVE/TRACKING ACTIVE/g' TrackingIndicator.jsx

# Update RiskEducation
sed -i '' 's/🛡️ Understanding the Risks/Understanding the Risks/g' RiskEducation.jsx
sed -i '' 's/🔍 Remember:/Remember:/g' RiskEducation.jsx

# Update all info card headers
sed -i '' 's/📱 Device/Device/g' DeviceInfo.jsx
sed -i '' 's/🌍 Location/Location/g' LocationInfo.jsx
sed -i '' 's/🖥️ Display/Display/g' HardwareInfo.jsx
sed -i '' 's/🔒 Privacy/Privacy/g' PrivacyInfo.jsx
sed -i '' 's/🎨 Advanced Fingerprinting/Advanced Fingerprinting/g' FingerprintInfo.jsx
sed -i '' 's/🌐 Network/Network/g' NetworkInfo.jsx
sed -i '' 's/📊 Additional Browser Features/Browser Features/g' FeaturesInfo.jsx
sed -i '' 's/🎮 Sensors/Sensors/g' SensorsInfo.jsx
sed -i '' 's/💾 Storage/Storage/g' StorageInfo.jsx

# Update LocationInfo markers
sed -i '' 's/📍 YOU ARE HERE/YOU ARE HERE/g' LocationInfo.jsx
sed -i '' 's/📍 Your Exact Location/Your Exact Location/g' LocationInfo.jsx
sed -i '' 's/⚠️ A malicious/WARNING: A malicious/g' LocationInfo.jsx
sed -i '' 's/🔴 CONTINUOUSLY/CONTINUOUSLY/g' LocationInfo.jsx
sed -i '' 's/🚨 YOUR PHYSICAL/YOUR PHYSICAL/g' LocationInfo.jsx

echo "Components updated - emojis removed"
