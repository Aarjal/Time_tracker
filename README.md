# Site Time Tracker

A lightweight Chrome extension that tracks how much time you spend on each website and displays it in a beautiful, dark-themed popup dashboard.

## Features

- **Automatic Time Tracking** - Passively monitors browsing activity across all tabs
- **Per-Domain Statistics** - View total time spent on each website
- **Total Tracked Time** - See cumulative time spent across all sites
- **Clean Dashboard** - Dark-themed, modern UI with smooth scrolling
- **Clear Data** - Reset all tracked time with one click
- **No Permissions Needed** - Only requires basic `tabs` and `storage` permissions
- **Lightweight** - Minimal performance impact on your browser

## Installation

### From Source (Developer Mode)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked**
5. Select the project folder
6. The extension icon will appear in your toolbar

### How to Use

1. **Click the extension icon** in your Chrome toolbar
2. **View your browsing stats** - See all sites ranked by time spent
3. **Monitor your habits** - Track total time and per-site breakdowns
4. **Clear data anytime** - Use the "Clear Data" button to reset

## How It Works

- The extension listens for tab switches and page loads
- When you switch tabs, the time spent on the previous tab is recorded
- Data is stored locally in your browser's storage (nothing sent to servers)
- The popup displays all tracked sites sorted by time spent (highest first)

## File Structure

```
site-time-tracker/
├── manifest.json          # Extension configuration
├── background.js          # Tab tracking logic
├── popup.html            # UI markup
├── popup.css             # Styling
├── popup.js              # Popup interactions
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

## Permissions

- `tabs` - To detect when you switch between tabs
- `storage` - To save your browsing time locally

No data is ever sent to external servers.

## Technologies

- Vanilla JavaScript (no frameworks)
- Chrome Extensions API (Manifest v3)
- CSS3 with CSS variables for theming

## Privacy

All tracking data is stored **locally** on your device. Your browsing history is never shared, uploaded, or transmitted to any server.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

MIT License - Feel free to use, modify, and distribute this project.

## Future Ideas

- Export browsing stats as CSV/JSON
- Set daily/weekly time limits per site
- Block distracting websites
- Custom color themes
- Sync data across devices
- Analytics dashboard with charts

---

Made with ❤️ for better web browsing habits
