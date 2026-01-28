# Browser Data Demonstration - React App

This is an educational demonstration showing what information browsers expose to websites, converted to a React application.

## Features

- Cookie consent modal with tracking options
- Interactive map showing exact geolocation
- Real-time data collection displays
- Comprehensive browser fingerprinting demonstration
- Educational content about QR code and privacy risks

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # Main styles
├── components/
│   ├── CookieConsent.jsx   # Cookie consent modal
│   ├── TrackingIndicator.jsx  # Active tracking indicator
│   ├── WarningBanner.jsx   # Top warning banner
│   ├── RiskEducation.jsx   # Educational content
│   ├── LocationInfo.jsx    # Location data with interactive map
│   ├── DeviceInfo.jsx      # Device & browser information
│   ├── HardwareInfo.jsx    # Hardware specifications
│   ├── PrivacyInfo.jsx     # Privacy settings
│   ├── FingerprintInfo.jsx # Browser fingerprinting
│   ├── NetworkInfo.jsx     # Network & IP information
│   ├── FeaturesInfo.jsx    # Browser features
│   ├── SensorsInfo.jsx     # Sensors & permissions
│   ├── StorageInfo.jsx     # Storage & quotas
│   └── InfoItem.jsx        # Reusable info display component
└── index.js                # Application entry point
```

## Differences from HTML Version

The React version includes:
- Component-based architecture for better code organization
- React hooks for state management
- React Leaflet for the interactive map
- Modular CSS files for each component
- Better separation of concerns

## Key Components

### CookieConsent
Displays the cookie consent modal and manages user preferences.

### LocationInfo
Shows location data and renders an interactive map using React Leaflet when location permission is granted.

### Info Components
Each info component (DeviceInfo, HardwareInfo, etc.) collects and displays specific browser data.

## Privacy Note

This is an **educational demonstration only**. No data is sent to any server. All data collection happens client-side in your browser to demonstrate what websites *could* collect.

## Technologies Used

- React 18
- React Leaflet (for maps)
- Leaflet
- OpenStreetMap (for map tiles)
- Various browser APIs for data collection

## License

This project is for educational purposes only.
