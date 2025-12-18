# Chrome Tab-Vorschaubilder Erweiterung

Eine leistungsstarke, funktionsreiche Chrome-Browser-Erweiterung, die Vorschaubilder aller offenen Tabs mit erweiterten Navigations- und Verwaltungsfunktionen anzeigt. Steigern Sie Ihre Produktivität, indem Sie mühelos mehrere Browser-Tabs mit visuellen Vorschauen verwalten.

## Funktionen

- **Tab-Vorschaubild-Anzeige**: Visuelles Rasterlayout, das alle offenen Browser-Tabs anzeigt
- **Schnelle Tab-Navigation**: Klicken Sie auf ein beliebiges Vorschaubild, um sofort zu diesem Tab zu wechseln
- **Direkte Tab-Verwaltung**: Schließen Sie Tabs direkt aus der Erweiterung mit Hover-angezeigten Schaltflächen
- **Visuelles Feedback**: Hervorhebung des aktiven Tabs und sanfte Hover-Effekte
- **Intelligente Suche**: Echtzeit-Filterung von Tabs nach Titel oder URL
- **Flexible Sortierung**: Umschalten zwischen sortierten (nach URL) und unsortierten Tab-Anordnungen
- **Vollständige Tastaturunterstützung**: Navigieren Sie zwischen Tabs mit Pfeiltasten und Tastaturkürzeln
- **Zustandspersistenz**: Speichert Ihre Sortierungseinstellungen über Browsersitzungen hinweg
- **Responsives Design**: Passt sich an verschiedene Anzahlen offener Tabs an
- **Barrierefreiheitsfunktionen**: WCAG-konforme Tastaturnavigation für alle Funktionen

## Statistiken

### GitHub-Sterne

![GitHub stars](https://img.shields.io/github/stars/luopub/chrome-thumbs?style=social)
![GitHub forks](https://img.shields.io/github/forks/luopub/chrome-thumbs?style=social)
![GitHub issues](https://img.shields.io/github/issues/luopub/chrome-thumbs)
![GitHub license](https://img.shields.io/github/license/luopub/chrome-thumbs)

### Stern-Historie

[![Star History Chart](https://api.star-history.com/svg?repos=luopub/chrome-thumbs&type=Date)](https://star-history.com/#luopub/chrome-thumbs&Date)

## Schlüsselwörter
chrome-extension, tab-management, browser-extension, tab-thumbnails, productivity, chrome-tabs, tab-switcher, browser-tools

## Installation

1. Öffnen Sie den Chrome-Browser und gehen Sie zur Erweiterungsseite (chrome://extensions/)
2. Aktivieren Sie den "Entwicklermodus"
3. Klicken Sie auf "Entpackte Erweiterung laden"
4. Wählen Sie diesen Ordner (chrome-thumbs) aus
5. Wenn Sie Symbole benötigen, öffnen Sie zuerst die Datei create-icons.html, laden Sie Symbole aller Größen herunter und speichern Sie sie im Ordner images

## Verwendung

### Grundlegende Verwendung
1. Klicken Sie auf das Erweiterungssymbol in der Browser-Symbolleiste
2. Das Popup-Fenster zeigt Vorschaubilder aller offenen Tabs
3. Klicken Sie auf ein beliebiges Vorschaubild, um zum entsprechenden Tab zu wechseln

### Erweiterte Funktionen

#### Tabs suchen
- Verwenden Sie das Suchfeld oben, um Tabs nach Titel oder URL zu filtern
- Ergebnisse werden in Echtzeit aktualisiert, während Sie tippen

#### Tabs sortieren
- Klicken Sie auf die Schaltfläche "Sortiert/Unsortiert", um zwischen sortierten und unsortierten Ansichten umzuschalten
- Die Sortierung erfolgt alphabetisch nach URL
- Ihre Einstellung wird für zukünftige Sitzungen gespeichert

#### Tastaturnavigation
- **Tab zum Fokussieren**: Drücken Sie die Tab-Taste, um durch Elemente zu navigieren
- **Pfeil-Navigation**: Verwenden Sie Pfeiltasten (↑↓←→), um zwischen Vorschaubildern zu navigieren, wenn fokussiert
- **Enter**: Drücken Sie Enter auf einem fokussierten Vorschaubild, um zu diesem Tab zu wechseln
- **Escape**: Drücken Sie Escape, um den Fokus zum Suchfeld zurückzugeben
- **Enter im Suchfeld**: Drücken Sie Enter, wenn das Suchfeld fokussiert ist, um zum ersten Ergebnis zu springen

#### Tabs schließen
- Bewegen Sie den Mauszeiger über ein beliebiges Tab-Vorschaubild, um die Schaltfläche zum Schließen (×) anzuzeigen
- Klicken Sie auf die Schaltfläche zum Schließen, um den entsprechenden Tab zu schließen
- Die Tab-Liste wird nach dem Schließen automatisch aktualisiert

## Dateistruktur

- `manifest.json` - Erweiterungskonfigurationsdatei mit Berechtigungen und Einstellungen
- `popup.html` - HTML-Struktur und CSS-Styling des Popup-Fensters
- `popup.js` - JavaScript-Logik für Tab-Verwaltung, Suche, Sortierung und Navigation
- `create-icons.html` - Symbolerstellungstool zum Erstellen von Erweiterungssymbolen
- `images/` - Ordner mit Erweiterungs-Symboldateien (16px, 32px, 48px, 128px)
- `push-git.bat` - Git-Bereitstellungsskript

## Technische Details

- **Erforderliche Berechtigungen**: tabs, activeTab, storage
- **Storage-API**: Wird verwendet, um Benutzereinstellungen (Sortierungsstatus) beizubehalten
- **Responsives Design**: Rasterlayout passt sich an verschiedene Anzahlen von Tabs an
- **Barrierefreiheit**: Vollständige Tastaturnavigationsunterstützung für alle Funktionen

## Hinweise

- Wenn Vorschaubilder nicht abgerufen werden können, wird das Website-Favicon als Fallback angezeigt
- Die Erweiterung verwendet die Tab-API von Chrome für alle Tab-Operationen
- Suche und Filterung funktionieren für alle offenen Tabs in allen Fenstern
- Die Sortierungseinstellung wird über Browsersitzungen hinweg mit der Chrome Storage-API beibehalten

## Demo/Bildschirmfotos

Die folgenden Bildschirmfotos zeigen die wichtigsten Funktionen der Erweiterung:

### Hauptvorschaubildansicht
![Main Thumbnail View](store-assets/screenshots/screenshort-1.png)
Zeigt alle offenen Tabs in einem responsiven Rasterlayout mit visuellen Vorschauen und Schaltflächen zum Schließen.

### Suchfunktionalität
![Search Functionality](store-assets/screenshots/screenshort-2.png)
Echtzeit-Filterung von Tabs nach Titel oder URL für schnellen Zugriff auf bestimmte Tabs.

### Sortierte vs. unsortierte Ansichten
![Sorted View](store-assets/screenshots/screenshort-3.png)
Wechseln Sie zwischen sortierten (nach URL) und unsortierten Tab-Anordnungen, um Ihren Arbeitsbereich zu organisieren.

### Tastaturnavigation
![Keyboard Navigation](store-assets/screenshots/screenshort-4.png)
Visuelle Indikatoren und Tastaturkürzel für effiziente Tab-Navigation ohne Maus.

### Tab-Verwaltung
![Tab Management](store-assets/screenshots/screenshort-5.png)
Erweiterte Tab-Verwaltungsfunktionen einschließlich schnellem Schließen und Wechseln zwischen Tabs.

## Projektinformationen

- **Erstellt**: 2025-12-19
- **Zuletzt geändert**: 2025-12-19
- **Maintainer**: [luopub](https://github.com/luopub)

## Installation

### Aus dem Chrome Web Store (Empfohlen)

1. Besuchen Sie den [Chrome Web Store](https://chrome.google.com/webstore/detail/tab-thumbnails-visual-tab-manager/chrome-thumbs)
2. Klicken Sie auf "Zu Chrome hinzufügen"
3. Erteilen Sie die notwendigen Berechtigungen
4. Klicken Sie auf das Erweiterungssymbol in Ihrer Symbolleiste, um die Verwendung zu beginnen

### Manuelle Installation (Für Entwickler)

1. Klonen Sie dieses Repository: `git clone https://github.com/luopub/chrome-thumbs.git`
2. Öffnen Sie den Chrome-Browser und gehen Sie zur Erweiterungsseite (chrome://extensions/)
3. Aktivieren Sie den "Entwicklermodus"
4. Klicken Sie auf "Entpackte Erweiterung laden"
5. Wählen Sie diesen Ordner (chrome-thumbs) aus
6. Wenn Sie Symbole benötigen, öffnen Sie zuerst die Datei create-icons.html, laden Sie Symbole aller Größen herunter und speichern Sie sie im Ordner images

## Mitwirken

Beiträge, Probleme und Funktionsanfragen sind willkommen! Zögern Sie nicht, die [Probleme-Seite](https://github.com/luopub/chrome-thumbs/issues) zu überprüfen, wenn Sie beitragen möchten.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz - siehe die Datei [LICENSE](LICENSE) für Details.

## Unterstützung

Wenn Sie diese Erweiterung hilfreich finden, erwägen Sie bitte, ihr einen ⭐ Stern auf GitHub zu geben!

## Themen

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