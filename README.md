# Chrome Tab Thumbnails Extension

This is a feature-rich Chrome browser extension that displays thumbnails of all open tabs with advanced navigation and management capabilities.

## Features

- **Tab Display**: Display thumbnails of all open browser tabs in a responsive grid layout
- **Tab Navigation**: Click thumbnail to switch to the corresponding tab
- **Tab Management**: Close tabs directly from the extension with hover-revealed close buttons
- **Visual Feedback**: Highlight current active tab and provide hover effects
- **Search Functionality**: Search tabs by title or URL with real-time filtering
- **Sorting Options**: Toggle between sorted (by URL) and unsorted tab arrangements
- **Keyboard Navigation**: Full keyboard support with arrow keys and shortcuts
- **State Persistence**: Remember sorting preferences across sessions

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