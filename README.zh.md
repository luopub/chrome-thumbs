# Chrome 标签页缩略图扩展

一款功能强大、特性丰富的Chrome浏览器扩展程序，显示所有打开标签页的缩略图，具备高级导航和管理功能。通过轻松管理多个浏览器标签页的视觉预览，提高您的生产力。

## 功能特性

- **标签页缩略图显示**：以视觉网格布局显示所有打开的浏览器标签页
- **快速标签页导航**：点击任何缩略图即可立即切换到该标签页
- **直接标签页管理**：通过悬停显示的关闭按钮直接从扩展中关闭标签页
- **视觉反馈**：活动标签页高亮显示和平滑的悬停效果
- **智能搜索**：按标题或URL实时过滤标签页
- **灵活排序**：在已排序（按URL）和未排序的标签页布局之间切换
- **全键盘支持**：使用箭头键和键盘快捷键导航标签页
- **状态持久化**：在浏览器会话之间记住您的排序偏好
- **响应式设计**：适应不同数量的打开标签页
- **无障碍功能**：所有功能均符合WCAG标准的键盘导航

## 统计数据

### GitHub星标

![GitHub stars](https://img.shields.io/github/stars/luopub/chrome-thumbs?style=social)
![GitHub forks](https://img.shields.io/github/forks/luopub/chrome-thumbs?style=social)
![GitHub issues](https://img.shields.io/github/issues/luopub/chrome-thumbs)
![GitHub license](https://img.shields.io/github/license/luopub/chrome-thumbs)

### 星标历史

[![Star History Chart](https://api.star-history.com/svg?repos=luopub/chrome-thumbs&type=Date)](https://star-history.com/#luopub/chrome-thumbs&Date)

## 关键词
chrome-extension, tab-management, browser-extension, tab-thumbnails, productivity, chrome-tabs, tab-switcher, browser-tools

## 安装

1. 打开Chrome浏览器并转到扩展程序页面 (chrome://extensions/)
2. 启用"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择此文件夹 (chrome-thumbs)
5. 如果需要图标，首先打开create-icons.html文件，下载所有尺寸的图标并保存到images文件夹

## 使用方法

### 基本使用
1. 点击浏览器工具栏中的扩展图标
2. 弹出窗口将显示所有打开标签页的缩略图
3. 点击任何缩略图切换到相应的标签页

### 高级功能

#### 搜索标签页
- 使用顶部的搜索框按标题或URL过滤标签页
- 输入时结果会实时更新

#### 排序标签页
- 点击"已排序/未排序"按钮在排序和未排序视图之间切换
- 排序按URL字母顺序进行
- 您的偏好设置会保存以供将来会话使用

#### 键盘导航
- **Tab键聚焦**：按Tab键导航元素
- **箭头导航**：聚焦时使用箭头键（↑↓←→）在缩略图之间导航
- **Enter**：在聚焦的缩略图上按Enter键切换到该标签页
- **Escape**：按Escape键将焦点返回到搜索框
- **搜索框中Enter**：当搜索框聚焦时按Enter键跳转到第一个结果

#### 关闭标签页
- 将鼠标悬停在任何标签页缩略图上以显示关闭按钮（×）
- 点击关闭按钮关闭相应的标签页
- 关闭后标签页列表会自动更新

## 文件结构

- `manifest.json` - 扩展配置文件，包含权限和设置
- `popup.html` - 弹出窗口的HTML结构和CSS样式
- `popup.js` - 标签页管理、搜索、排序和导航的JavaScript逻辑
- `create-icons.html` - 用于创建扩展图标的图标生成工具
- `images/` - 包含扩展图标文件的文件夹（16px, 32px, 48px, 128px）
- `push-git.bat` - Git部署脚本

## 技术细节

- **所需权限**：tabs, activeTab, storage
- **存储API**：用于保持用户偏好（排序状态）
- **响应式设计**：网格布局适应不同数量的标签页
- **无障碍**：所有功能的全键盘导航支持

## 注意事项

- 如果无法获取缩略图，将显示网站favicon作为后备
- 扩展使用Chrome的标签页API进行所有标签页操作
- 搜索和过滤适用于所有窗口中所有打开的标签页
- 使用Chrome存储API在浏览器会话之间保持排序偏好

## 演示/截图

以下截图展示了扩展的关键功能：

### 主缩略图视图
![Main Thumbnail View](store-assets/screenshots/screenshort-1.png)
以响应式网格布局显示所有打开的标签页，具有视觉预览和关闭按钮。

### 搜索功能
![Search Functionality](store-assets/screenshots/screenshort-2.png)
按标题或URL实时过滤标签页，快速访问特定标签页。

### 排序与未排序视图
![Sorted View](store-assets/screenshots/screenshort-3.png)
在排序（按URL）和未排序的标签页布局之间切换，组织您的工作空间。

### 键盘导航
![Keyboard Navigation](store-assets/screenshots/screenshort-4.png)
用于高效标签页导航的视觉指示器和键盘快捷键，无需鼠标。

### 标签页管理
![Tab Management](store-assets/screenshots/screenshort-5.png)
高级标签页管理功能，包括快速关闭和在标签页之间切换。

## 项目信息

- **创建时间**：2025-12-19
- **最后修改**：2025-12-19
- **维护者**：[luopub](https://github.com/luopub)

## 安装

### 从Chrome网上应用店安装（推荐）

1. 访问[Chrome网上应用店](https://chrome.google.com/webstore/detail/tab-thumbnails-visual-tab-manager/chrome-thumbs)
2. 点击"添加到Chrome"
3. 授予必要权限
4. 点击工具栏中的扩展图标开始使用

### 手动安装（面向开发者）

1. 克隆此仓库：`git clone https://github.com/luopub/chrome-thumbs.git`
2. 打开Chrome浏览器并转到扩展程序页面 (chrome://extensions/)
3. 启用"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择此文件夹 (chrome-thumbs)
6. 如果需要图标，首先打开create-icons.html文件，下载所有尺寸的图标并保存到images文件夹

## 贡献

欢迎贡献、问题和功能请求！如果您想做出贡献，请随时查看[问题页面](https://github.com/luopub/chrome-thumbs/issues)。

## 许可证

本项目在MIT许可证下授权 - 详见[LICENSE](LICENSE)文件。

## 支持

如果您发现此扩展有帮助，请考虑在GitHub上给它一个⭐星标！

## 主题

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