# Days Counter - Stream Deck Plugin

A professional Stream Deck plugin that displays a customizable countdown to any target date with automatic updates and multi-language support.

![Days Counter Preview](https://img.shields.io/badge/Stream%20Deck-Plugin-blue?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=flat-square)
![Languages](https://img.shields.io/badge/languages-5-orange?style=flat-square)

## ✨ Features

- **📅 Date Selection**: Easy-to-use calendar interface for target date selection
- **🌍 Multi-Language Support**: Available in 5 languages (English, French, Spanish, German, Italian)
- **⏰ Timezone Support**: Accurate calculations across 9 major timezones
- **🔄 Auto-Update**: Automatically detects date changes and updates display
- **📱 Optimized Display**: Large numbers with descriptive text below for better readability
- **💾 Persistent Settings**: All configurations are saved automatically

## 🚀 Installation

### Manual Installation
1. Download the latest release from [GitHub Releases](https://github.com/Teyk0o/streamdeck-countdown-day-counter/releases/latest)
2. Double-click the `.streamDeckPlugin` file
3. Stream Deck software will automatically install the plugin

### Development Installation
```bash
# Clone the repository
git clone https://github.com/Teyk0o/streamdeck-countdown-day-counter.git
cd streamdeck-countdown-day-counter

# Install dependencies
npm install

# Build the plugin
npm run build

# Install to Stream Deck (requires Elgato CLI)
streamdeck install com.teyko.days-counter.sdPlugin
```

## 🎯 Usage

1. **Add the Action**: Drag the "Days Counter" action to any Stream Deck button
2. **Configure Settings**:
   - **Target Date**: Select your target date using the calendar
   - **Timezone**: Choose your preferred timezone for accurate calculations
   - **Language**: Select display language for text labels
3. **Automatic Updates**: The counter updates automatically when the date changes

## 🌐 Supported Languages

- 🇺🇸 **English**: "X days", "Today", "X days ago"
- 🇫🇷 **French**: "X jours", "Aujourd'hui", "X jours passés"
- 🇪🇸 **Spanish**: "X días", "Hoy", "X días pasados"
- 🇩🇪 **German**: "X Tage", "Heute", "X Tage vergangen"
- 🇮🇹 **Italian**: "X giorni", "Oggi", "X giorni fa"

## ⏰ Supported Timezones

- UTC
- America/New_York (EST/EDT)
- America/Los_Angeles (PST/PDT)
- Europe/London (GMT/BST)
- Europe/Paris (CET/CEST)
- Europe/Berlin (CET/CEST)
- Asia/Tokyo (JST)
- Asia/Shanghai (CST)
- Australia/Sydney (AEDT/AEST)

## 🛠️ Development

### Prerequisites
- Node.js 20+
- Stream Deck software
- Elgato Stream Deck SDK

### Build Commands
```bash
# Development build with watch mode
npm run watch

# Production build
npm run build
```

### Project Structure
```
src/
├── actions/
│   └── increment-counter.ts    # Main plugin logic
└── plugin.ts                  # Plugin entry point

com.teyko.days-counter.sdPlugin/
├── ui/
│   └── increment-counter.html  # Settings interface
├── imgs/                       # Plugin icons
└── manifest.json              # Plugin manifest
```

## 📝 Use Cases

- **Event Countdowns**: Track days until important events, vacations, or deadlines
- **Project Management**: Monitor time remaining for project milestones
- **Personal Reminders**: Keep track of birthdays, anniversaries, or special dates
- **Productivity**: Create visual deadline reminders on your Stream Deck

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports & Feature Requests

If you encounter any issues or have suggestions for new features, please [open an issue](https://github.com/Teyk0o/streamdeck-countdown-day-counter/issues) on GitHub.

## 📊 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

## 🙏 Acknowledgments

- Built with the [Elgato Stream Deck SDK](https://docs.elgato.com/streamdeck/sdk/introduction/getting-started)
- Uses [sdpi-components](https://sdpi-components.dev/) for the settings interface

---

Made with ❤️ by [Teyko](https://github.com/Teyk0o)