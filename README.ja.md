# Chrome タブサムネイル拡張機能

機能豊富で強力なChromeブラウザ拡張機能で、高度なナビゲーションおよび管理機能を備えたすべての開いているタブのサムネイルを表示します。視覚的なプレビューで複数のブラウザタブを簡単に管理して生産性を向上させましょう。

## 機能

- **タブサムネイル表示**：すべての開いているブラウザタブを視覚的なグリッドレイアウトで表示
- **クイックタブナビゲーション**：任意のサムネイルをクリックして、そのタブに即座に切り替え
- **直接タブ管理**：ホバーで表示される閉じるボタンで拡張機能から直接タブを閉じる
- **視覚的フィードバック**：アクティブタブのハイライトとスムーズなホバー効果
- **スマート検索**：タイトルまたはURLによるタブのリアルタイムフィルタリング
- **柔軟なソート**：ソート済み（URL順）と未ソートのタブ配置を切り替え
- **フルキーボードサポート**：矢印キーとキーボードショートカットでタブをナビゲート
- **状態の永続化**：ブラウザセッション間でソート設定を記憶
- **レスポンシブデザイン**：開いているタブの数に応じて適応
- **アクセシビリティ機能**：すべての機能でWCAG準拠のキーボードナビゲーション

## 統計

### GitHubスター

![GitHub stars](https://img.shields.io/github/stars/luopub/chrome-thumbs?style=social)
![GitHub forks](https://img.shields.io/github/forks/luopub/chrome-thumbs?style=social)
![GitHub issues](https://img.shields.io/github/issues/luopub/chrome-thumbs)
![GitHub license](https://img.shields.io/github/license/luopub/chrome-thumbs)

### スター履歴

[![Star History Chart](https://api.star-history.com/svg?repos=luopub/chrome-thumbs&type=Date)](https://star-history.com/#luopub/chrome-thumbs&Date)

## キーワード
chrome-extension, tab-management, browser-extension, tab-thumbnails, productivity, chrome-tabs, tab-switcher, browser-tools

## インストール

1. Chromeブラウザを開き、拡張機能ページに移動 (chrome://extensions/)
2. 「デベロッパーモード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. このフォルダ (chrome-thumbs) を選択
5. アイコンが必要な場合は、まずcreate-icons.htmlファイルを開き、すべてのサイズのアイコンをダウンロードしてimagesフォルダに保存

## 使用方法

### 基本的な使用方法
1. ブラウザツールバーの拡張機能アイコンをクリック
2. ポップアップウィンドウにすべての開いているタブのサムネイルが表示されます
3. 任意のサムネイルをクリックして対応するタブに切り替えます

### 高度な機能

#### タブの検索
- 上部の検索ボックスを使用して、タイトルまたはURLでタブをフィルタリング
- 入力時に結果がリアルタイムで更新されます

#### タブのソート
- 「ソート済み/未ソート」ボタンをクリックして、ソート済みビューと未ソートビューを切り替え
- ソートはURLのアルファベット順に行われます
- ご自身の設定が将来のセッションのために保存されます

#### キーボードナビゲーション
- **Tabキーでフォーカス**：Tabキーを押して要素間をナビゲート
- **矢印ナビゲーション**：フォーカス時に矢印キー（↑↓←→）を使用してサムネイル間を移動
- **Enter**：フォーカスされたサムネイルでEnterキーを押してそのタブに切り替え
- **Escape**：Escapeキーを押してフォーカスを検索ボックスに戻す
- **検索ボックスでEnter**：検索ボックスがフォーカスされている時にEnterキーを押して最初の結果にジャンプ

#### タブを閉じる
- 任意のタブサムネイルにマウスをホバーして閉じるボタン（×）を表示
- 閉じるボタンをクリックして対応するタブを閉じる
- 閉じた後、タブリストは自動的に更新されます

## ファイル構造

- `manifest.json` - 権限と設定を含む拡張機能の設定ファイル
- `popup.html` - ポップアップウィンドウのHTML構造とCSSスタイル
- `popup.js` - タブ管理、検索、ソート、ナビゲーションのJavaScriptロジック
- `create-icons.html` - 拡張機能アイコンを作成するためのアイコン生成ツール
- `images/` - 拡張機能のアイコンファイルを含むフォルダ（16px, 32px, 48px, 128px）
- `push-git.bat` - Gitデプロイスクリプト

## 技術詳細

- **必要な権限**：tabs, activeTab, storage
- **ストレージAPI**：ユーザー設定（ソート状態）を保持するために使用
- **レスポンシブデザイン**：グリッドレイアウトが異なる数のタブに適応
- **アクセシビリティ**：すべての機能の完全なキーボードナビゲーションサポート

## 注意事項

- サムネイルが取得できない場合は、ウェブサイトのfaviconがフォールバックとして表示されます
- 拡張機能はすべてのタブ操作にChromeのタブAPIを使用します
- 検索とフィルタリングはすべてのウィンドウのすべての開いているタブで機能します
- ソート設定はChromeストレージAPIを使用してブラウザセッション間で維持されます

## デモ/スクリーンショット

以下のスクリーンショットは、拡張機能の主要な機能を示しています：

### メインサムネイルビュー
![Main Thumbnail View](store-assets/screenshots/screenshort-1.png)
視覚的なプレビューと閉じるボタンを備えたレスポンシブグリッドレイアウトですべての開いているタブを表示します。

### 検索機能
![Search Functionality](store-assets/screenshots/screenshort-2.png)
タイトルまたはURLによるタブのリアルタイムフィルタリングで、特定のタブに素早くアクセス。

### ソート済みと未ソートのビュー
![Sorted View](store-assets/screenshots/screenshort-3.png)
ソート済み（URL順）と未ソートのタブ配置を切り替えて、ワークスペースを整理。

### キーボードナビゲーション
![Keyboard Navigation](store-assets/screenshots/screenshort-4.png)
マウスなしで効率的なタブナビゲーションのための視覚的インジケーターとキーボードショートカット。

### タブ管理
![Tab Management](store-assets/screenshots/screenshort-5.png)
クイッククローズとタブ間の切り替えを含む高度なタブ管理機能。

## プロジェクト情報

- **作成日**：2025-12-19
- **最終更新日**：2025-12-19
- **メンテナー**：[luopub](https://github.com/luopub)

## インストール

### Chromeウェブストアからインストール（推奨）

1. [Chromeウェブストア](https://chrome.google.com/webstore/detail/tab-thumbnails-visual-tab-manager/chrome-thumbs)にアクセス
2. 「Chromeに追加」をクリック
3. 必要な権限を許可
4. ツールバーの拡張機能アイコンをクリックして使用を開始

### 手動インストール（開発者向け）

1. このリポジトリをクローン：`git clone https://github.com/luopub/chrome-thumbs.git`
2. Chromeブラウザを開き、拡張機能ページに移動 (chrome://extensions/)
3. 「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. このフォルダ (chrome-thumbs) を選択
6. アイコンが必要な場合は、まずcreate-icons.htmlファイルを開き、すべてのサイズのアイコンをダウンロードしてimagesフォルダに保存

## 貢献

貢献、問題、機能リクエストを歓迎します！貢献したい場合は、[問題ページ](https://github.com/luopub/chrome-thumbs/issues)をご確認ください。

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## サポート

この拡張機能が役立つと感じた場合は、GitHubで⭐スターを付けてください！

## トピック

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