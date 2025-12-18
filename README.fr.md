# Extension de Miniatures d'Onglets Chrome

Une extension de navigateur Chrome puissante et riche en fonctionnalités qui affiche des miniatures de tous les onglets ouverts avec des capacités avancées de navigation et de gestion. Augmentez votre productivité en gérant facilement plusieurs onglets de navigateur avec des aperçus visuels.

## Fonctionnalités

- **Affichage des Miniatures d'Onglets** : Mise en page en grille visuelle montrant tous les onglets ouverts du navigateur
- **Navigation Rapide d'Onglets** : Cliquez sur n'importe quelle miniature pour basculer instantanément vers cet onglet
- **Gestion Directe d'Onglets** : Fermez les onglets directement depuis l'extension avec des boutons de fermeture révélés au survol
- **Feedback Visuel** : Mise en évidence de l'onglet actif et effets de survol fluides
- **Recherche Intelligente** : Filtrage en temps réel des onglets par titre ou URL
- **Tri Flexible** : Basculez entre des dispositions d'onglets triées (par URL) et non triées
- **Support Complet du Clavier** : Naviguez entre les onglets en utilisant les touches fléchées et les raccourcis clavier
- **Persistance de l'État** : Mémorise vos préférences de tri entre les sessions du navigateur
- **Design Responsif** : S'adapte à différents nombres d'onglets ouverts
- **Fonctionnalités d'Accessibilité** : Navigation au clavier conforme WCAG pour toutes les fonctionnalités

## Statistiques

### Étoiles GitHub

![GitHub stars](https://img.shields.io/github/stars/luopub/chrome-thumbs?style=social)
![GitHub forks](https://img.shields.io/github/forks/luopub/chrome-thumbs?style=social)
![GitHub issues](https://img.shields.io/github/issues/luopub/chrome-thumbs)
![GitHub license](https://img.shields.io/github/license/luopub/chrome-thumbs)

### Historique des Étoiles

[![Star History Chart](https://api.star-history.com/svg?repos=luopub/chrome-thumbs&type=Date)](https://star-history.com/#luopub/chrome-thumbs&Date)

## Mots-clés
chrome-extension, tab-management, browser-extension, tab-thumbnails, productivity, chrome-tabs, tab-switcher, browser-tools

## Installation

1. Ouvrez le navigateur Chrome et allez à la page des extensions (chrome://extensions/)
2. Activez "Mode développeur"
3. Cliquez sur "Charger l'extension non empaquetée"
4. Sélectionnez ce dossier (chrome-thumbs)
5. Si vous avez besoin d'icônes, ouvrez d'abord le fichier create-icons.html, téléchargez les icônes de toutes tailles et enregistrez-les dans le dossier images

## Utilisation

### Utilisation de Base
1. Cliquez sur l'icône de l'extension dans la barre d'outils du navigateur
2. La fenêtre pop-up affichera des miniatures de tous les onglets ouverts
3. Cliquez sur n'importe quelle miniature pour basculer vers l'onglet correspondant

### Fonctionnalités Avancées

#### Rechercher des Onglets
- Utilisez la boîte de recherche en haut pour filtrer les onglets par titre ou URL
- Les résultats se mettent à jour en temps réel pendant que vous tapez

#### Trier des Onglets
- Cliquez sur le bouton "Trié/Non trié" pour basculer entre les vues triées et non triées
- Le tri se fait alphabétiquement par URL
- Votre préférence est enregistrée pour les sessions futures

#### Navigation au Clavier
- **Tab pour focaliser** : Appuyez sur la touche Tab pour naviguer entre les éléments
- **Navigation fléchée** : Utilisez les touches fléchées (↑↓←→) pour naviguer entre les miniatures lorsqu'elles sont focalisées
- **Entrée** : Appuyez sur Entrée sur une miniature focalisée pour basculer vers cet onglet
- **Échap** : Appuyez sur Échap pour retourner le focus à la boîte de recherche
- **Entrée dans la boîte de recherche** : Appuyez sur Entrée lorsque la boîte de recherche est focalisée pour aller au premier résultat

#### Fermer des Onglets
- Survolez n'importe quelle miniature d'onglet pour révéler le bouton de fermeture (×)
- Cliquez sur le bouton de fermeture pour fermer l'onglet correspondant
- La liste des onglets se met à jour automatiquement après fermeture

## Structure des Fichiers

- `manifest.json` - Fichier de configuration de l'extension avec permissions et paramètres
- `popup.html` - Structure HTML et style CSS de la fenêtre pop-up
- `popup.js` - Logique JavaScript pour la gestion des onglets, recherche, tri et navigation
- `create-icons.html` - Outil de génération d'icônes pour créer les icônes de l'extension
- `images/` - Dossier contenant les fichiers d'icônes de l'extension (16px, 32px, 48px, 128px)
- `push-git.bat` - Script de déploiement Git

## Détails Techniques

- **Permissions Requises** : tabs, activeTab, storage
- **API de Stockage** : Utilisée pour persister les préférences utilisateur (état de tri)
- **Design Responsif** : La mise en page en grille s'adapte à différents nombres d'onglets
- **Accessibilité** : Support complet de navigation au clavier pour toutes les fonctionnalités

## Notes

- Si les miniatures ne peuvent pas être obtenues, le favicon du site web sera affiché comme alternative
- L'extension utilise l'API d'onglets de Chrome pour toutes les opérations d'onglets
- La recherche et le filtrage fonctionnent sur tous les onglets ouverts dans toutes les fenêtres
- La préférence de tri est maintenue entre les sessions du navigateur en utilisant l'API de stockage de Chrome

## Démo/Captures d'Écran

Les captures d'écran suivantes présentent les fonctionnalités clés de l'extension :

### Vue Principale des Miniatures
![Main Thumbnail View](store-assets/screenshots/screenshort-1.png)
Affiche tous les onglets ouverts dans une mise en page en grille responsives avec des aperçus visuels et des boutons de fermeture.

### Fonctionnalité de Recherche
![Search Functionality](store-assets/screenshots/screenshort-2.png)
Filtrage en temps réel des onglets par titre ou URL pour un accès rapide aux onglets spécifiques.

### Vues Triées vs Non Triées
![Sorted View](store-assets/screenshots/screenshort-3.png)
Basculez entre les dispositions d'onglets triées (par URL) et non triées pour organiser votre espace de travail.

### Navigation au Clavier
![Keyboard Navigation](store-assets/screenshots/screenshort-4.png)
Indicateurs visuels et raccourcis clavier pour une navigation efficace des onglets sans souris.

### Gestion des Onglets
![Tab Management](store-assets/screenshots/screenshort-5.png)
Fonctionnalités avancées de gestion des onglets incluant la fermeture rapide et le basculement entre les onglets.

## Informations du Projet

- **Créé** : 2025-12-19
- **Dernière Modification** : 2025-12-19
- **Mainteneur** : [luopub](https://github.com/luopub)

## Installation

### Depuis le Chrome Web Store (Recommandé)

1. Visitez le [Chrome Web Store](https://chrome.google.com/webstore/detail/tab-thumbnails-visual-tab-manager/chrome-thumbs)
2. Cliquez sur "Ajouter à Chrome"
3. Accordez les permissions nécessaires
4. Cliquez sur l'icône de l'extension dans votre barre d'outils pour commencer à utiliser

### Installation Manuelle (Pour Développeurs)

1. Clonez ce dépôt : `git clone https://github.com/luopub/chrome-thumbs.git`
2. Ouvrez le navigateur Chrome et allez à la page des extensions (chrome://extensions/)
3. Activez "Mode développeur"
4. Cliquez sur "Charger l'extension non empaquetée"
5. Sélectionnez ce dossier (chrome-thumbs)
6. Si vous avez besoin d'icônes, ouvrez d'abord le fichier create-icons.html, téléchargez les icônes de toutes tailles et enregistrez-les dans le dossier images

## Contribuer

Les contributions, les problèmes et les demandes de fonctionnalités sont les bienvenus ! N'hésitez pas à consulter la [page des problèmes](https://github.com/luopub/chrome-thumbs/issues) si vous souhaitez contribuer.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails.

## Support

Si vous trouvez cette extension utile, merci de considérer lui donner une ⭐ étoile sur GitHub !

## Sujets

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