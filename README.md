# Chrome Tab Thumbnails Extension

This is a simple Chrome browser extension that displays thumbnails of all open tabs, and supports clicking to switch to the corresponding tab.

## Features

- Display thumbnails of all open browser tabs
- Grid layout that adapts to different numbers of tabs
- Click thumbnail to switch to corresponding tab
- Highlight current active tab

## Installation

1. Open Chrome browser and go to extensions page (chrome://extensions/)
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this folder (chrome-thumbs)
5. If you need icons, first open create-icons.html file, download icons of all sizes and save them to the images folder

## Usage

1. Click the extension icon in the browser toolbar
2. The popup window will display thumbnails of all open tabs
3. Click any thumbnail to switch to the corresponding tab

## File Structure

- `manifest.json` - Extension configuration file
- `popup.html` - HTML structure of the popup window
- `popup.js` - JavaScript logic of the popup window
- `create-icons.html` - Icon generation tool
- `images/` - Folder to store extension icon files

## Notes

- To get tab thumbnails, the extension needs tabs permission
- Thumbnails are obtained using captureVisibleTab API
- If thumbnails cannot be obtained, website favicon will be displayed