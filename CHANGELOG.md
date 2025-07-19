# Changelog

All notable changes to the Days Counter Stream Deck plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-19

### Added
- 📅 **Date Selection**: Calendar interface for easy target date selection
- 🌍 **Multi-Language Support**: 5 languages (English, French, Spanish, German, Italian)
- ⏰ **Timezone Support**: 9 major timezones with accurate calculations
- 🔄 **Auto-Update**: Automatic detection of date changes with minute-level monitoring
- 📱 **Optimized Display**: Large numbers with descriptive text below for better readability
- 💾 **Persistent Settings**: All configurations are saved automatically between sessions
- 🎯 **Smart Display Logic**: 
  - Shows "X days" for future dates
  - Shows "Today" for current date
  - Shows "X days ago" for past dates
- 🔧 **Professional UI**: Clean settings interface using sdpi-components

### Technical Features
- Built with TypeScript and Elgato Stream Deck SDK
- Efficient interval-based date monitoring
- Proper event handling for plugin lifecycle
- Settings persistence across Stream Deck restarts
- Timezone-aware date calculations
- Memory-efficient with automatic cleanup

### Supported Languages
- 🇺🇸 English: "X days", "Today", "X days ago"
- 🇫🇷 French: "X jours", "Aujourd'hui", "X jours passés"
- 🇪🇸 Spanish: "X días", "Hoy", "X días pasados"
- 🇩🇪 German: "X Tage", "Heute", "X Tage vergangen"
- 🇮🇹 Italian: "X giorni", "Oggi", "X giorni fa"

### Supported Timezones
- UTC
- America/New_York (EST/EDT)
- America/Los_Angeles (PST/PDT)
- Europe/London (GMT/BST)
- Europe/Paris (CET/CEST)
- Europe/Berlin (CET/CEST)
- Asia/Tokyo (JST)
- Asia/Shanghai (CST)
- Australia/Sydney (AEDT/AEST)

## [Unreleased]

### Planned Features
- Additional timezone support
- Custom date formats
- Sound notifications for important dates
- Multiple countdown support per button
- Export/import settings
- Dark mode theme support

---

## Release Notes

### v1.0.0 - Initial Release
This is the first public release of the Days Counter plugin. It provides a solid foundation for date countdown functionality with professional-grade features including multi-language support, timezone handling, and automatic updates.

The plugin has been thoroughly tested across different operating systems and Stream Deck software versions to ensure reliability and performance.