# Chrome Tab Thumbnails Extension

A powerful, feature-rich Chrome browser extension that displays thumbnails of all open tabs with advanced navigation and management capabilities. Boost your productivity by effortlessly managing multiple browser tabs with visual previews.

## Features

- **Tab Thumbnails Display**: Visual grid layout showing all open browser tabs
- **Quick Tab Navigation**: Click any thumbnail to instantly switch to that tab
- **Direct Tab Management**: Close tabs directly from the extension with hover-revealed close buttons
- **Visual Feedback**: Active tab highlighting and smooth hover effects
- **Smart Search**: Real-time filtering of tabs by title or URL
- **Flexible Sorting**: Toggle between sorted (by URL) and unsorted tab arrangements
- **Full Keyboard Support**: Navigate tabs using arrow keys and keyboard shortcuts
- **State Persistence**: Remembers your sorting preferences across browser sessions
- **Responsive Design**: Adapts to different numbers of open tabs
- **Accessibility Features**: WCAG compliant keyboard navigation for all features

## Keywords
chrome-extension, tab-management, browser-extension, tab-thumbnails, productivity, chrome-tabs, tab-switcher, browser-tools

## Installation

1. Open Chrome browser and go to extensions page (chrome://extensions/)
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this folder (chrome-thumbs)
5. If you need icons, first open create-icons.html file, download icons of all sizes and save them to the images folder

## Usage

### Basic Usage
1. Click the extension icon in the browser toolbar
2. The popup window will display thumbnails of all open tabs
3. Click any thumbnail to switch to the corresponding tab

### Advanced Features

#### Search Tabs
- Use the search box at the top to filter tabs by title or URL
- Results update in real-time as you type

#### Sort Tabs
- Click the "Sorted/Unsorted" button to toggle between sorted and unsorted views
- Sorting is done alphabetically by URL
- Your preference is saved for future sessions

#### Keyboard Navigation
- **Tab to focus**: Press Tab key to navigate through elements
- **Arrow navigation**: Use arrow keys (↑↓←→) to navigate between thumbnails when focused
- **Enter**: Press Enter on a focused thumbnail to switch to that tab
- **Escape**: Press Escape to return focus to the search box
- **Enter in search box**: Press Enter when search box is focused to jump to first result

#### Close Tabs
- Hover over any tab thumbnail to reveal the close button (×)
- Click the close button to close the corresponding tab
- The tab list updates automatically after closing

## File Structure

- `manifest.json` - Extension configuration file with permissions and settings
- `popup.html` - HTML structure and CSS styling of the popup window
- `popup.js` - JavaScript logic for tab management, search, sorting, and navigation
- `create-icons.html` - Icon generation tool for creating extension icons
- `images/` - Folder containing extension icon files (16px, 32px, 48px, 128px)
- `push-git.bat` - Git deployment script

## Technical Details

- **Permissions Required**: tabs, activeTab, storage
- **Storage API**: Used to persist user preferences (sorting state)
- **Responsive Design**: Grid layout adapts to different numbers of tabs
- **Accessibility**: Full keyboard navigation support for all features

## Notes

- If thumbnails cannot be obtained, website favicon will be displayed as fallback
- The extension uses Chrome's tab API for all tab operations
- Search and filtering work across all open tabs in all windows
- Sorting preference is maintained across browser sessions using Chrome storage API

## Demo/Screenshots

The following screenshots showcase the extension's key functionality:

### Main Thumbnail View
![Main Thumbnail View](store-assets/screenshots/screenshort-1.png)
Shows all open tabs in a responsive grid layout with visual previews and close buttons.

### Search Functionality
![Search Functionality](store-assets/screenshots/screenshort-2.png)
Real-time filtering of tabs by title or URL for quick access to specific tabs.

### Sorted vs Unsorted Views
![Sorted View](store-assets/screenshots/screenshort-3.png)
Toggle between sorted (by URL) and unsorted tab arrangements to organize your workspace.

### Keyboard Navigation
![Keyboard Navigation](store-assets/screenshots/screenshort-4.png)
Visual indicators and keyboard shortcuts for efficient tab navigation without a mouse.

### Tab Management
![Tab Management](store-assets/screenshots/screenshort-5.png)
Advanced tab management features including quick closing and switching between tabs.

## Project Information

- **Created**: 2025-12-19
- **Last Modified**: 2025-12-19
- **Maintainer**: [luopub](https://github.com/luopub)

## Installation

### From Chrome Web Store (Recommended)

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore/detail/tab-thumbnails-visual-tab-manager/chrome-thumbs)
2. Click "Add to Chrome"
3. Grant necessary permissions
4. Click the extension icon in your toolbar to start using

### Manual Installation (For Developers)

1. Clone this repository: `git clone https://github.com/luopub/chrome-thumbs.git`
2. Open Chrome browser and go to extensions page (chrome://extensions/)
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select this folder (chrome-thumbs)
6. If you need icons, first open create-icons.html file, download icons of all sizes and save them to the images folder

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/luopub/chrome-thumbs/issues) if you want to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this extension helpful, please consider giving it a ⭐ star on GitHub!

## Topics

- chrome-extension
- tab-management
- browser-extension
- productivity
- tab-thumbnails
- tab-switcher
- browser-tools
- chrome
- tabs
- extension-development