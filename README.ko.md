# Chrome 탭 썸네일 확장 프로그램

고급 탐색 및 관리 기능이 있는 모든 열린 탭의 썸네일을 표시하는 강력하고 기능이 풍부한 Chrome 브라우저 확장 프로그램입니다. 시각적 미리보기로 여러 브라우저 탭을 효율적으로 관리하여 생산성을 높이세요.

## 기능

- **탭 썸네일 표시**: 모든 열린 브라우저 탭을 보여주는 시각적 그리드 레이아웃
- **빠른 탭 탐색**: 썸네일을 클릭하여 해당 탭으로 즉시 전환
- **직접 탭 관리**: 호버 시 나타나는 닫기 버튼으로 확장 프로그램에서 직접 탭 닫기
- **시각적 피드백**: 활성 탭 강조 표시 및 부드러운 호버 효과
- **스마트 검색**: 제목이나 URL로 탭을 실시간 필터링
- **유연한 정렬**: 정렬된(URL 기준) 및 정렬되지 않은 탭 배열 간 전환
- **전체 키보드 지원**: 화살표 키 및 키보드 단축키로 탭 탐색
- **상태 지속성**: 브라우저 세션 간 정렬 기본 설정 기억
- **반응형 디자인**: 열린 탭 수에 따라 적응
- **접근성 기능**: 모든 기능에 대한 WCAG 준수 키보드 탐색

## 통계

### GitHub 별점

![GitHub stars](https://img.shields.io/github/stars/luopub/chrome-thumbs?style=social)
![GitHub forks](https://img.shields.io/github/forks/luopub/chrome-thumbs?style=social)
![GitHub issues](https://img.shields.io/github/issues/luopub/chrome-thumbs)
![GitHub license](https://img.shields.io/github/license/luopub/chrome-thumbs)

### 별점 기록

[![Star History Chart](https://api.star-history.com/svg?repos=luopub/chrome-thumbs&type=Date)](https://star-history.com/#luopub/chrome-thumbs&Date)

## 키워드
chrome-extension, tab-management, browser-extension, tab-thumbnails, productivity, chrome-tabs, tab-switcher, browser-tools

## 설치

1. Chrome 브라우저를 열고 확장 프로그램 페이지로 이동 (chrome://extensions/)
2. "개발자 모드" 활성화
3. "압축해제된 확장 프로그램을 로드합니다" 클릭
4. 이 폴더(chrome-thumbs) 선택
5. 아이콘이 필요한 경우 먼저 create-icons.html 파일을 열고 모든 크기의 아이콘을 다운로드하여 images 폴더에 저장

## 사용법

### 기본 사용법
1. 브라우저 도구 모음에서 확장 프로그램 아이콘 클릭
2. 팝업 창에 모든 열린 탭의 썸네일이 표시됩니다
3. 썸네일을 클릭하여 해당 탭으로 전환

### 고급 기능

#### 탭 검색
- 상단 검색 상자를 사용하여 제목이나 URL로 탭 필터링
- 입력하는 동안 결과가 실시간으로 업데이트됩니다

#### 탭 정렬
- "정렬됨/정렬 안됨" 버튼을 클릭하여 정렬된 뷰와 정렬되지 않은 뷰 간 전환
- 정렬은 URL을 기준으로 알파벳순으로 수행됩니다
- 기본 설정은 미래 세션을 위해 저장됩니다

#### 키보드 탐색
- **Tab으로 초점**: Tab 키를 눌러 요소 간 탐색
- **화살표 탐색**: 초점 상태일 때 화살표 키(↑↓←→)를 사용하여 썸네일 간 탐색
- **Enter**: 초점된 썸네일에서 Enter를 눌러 해당 탭으로 전환
- **Escape**: Escape를 눌러 검색 상자로 초점 반환
- **검색 상자에서 Enter**: 검색 상자가 초점된 상태에서 Enter를 눌러 첫 번째 결과로 이동

#### 탭 닫기
- 모든 탭 썸네일 위로 마우스를 가져가 닫기 버튼(×) 표시
- 닫기 버튼을 클릭하여 해당 탭 닫기
- 닫은 후 탭 목록이 자동으로 업데이트됩니다

## 파일 구조

- `manifest.json` - 권한 및 설정이 포함된 확장 프로그램 구성 파일
- `popup.html` - 팝업 창의 HTML 구조 및 CSS 스타일링
- `popup.js` - 탭 관리, 검색, 정렬 및 탐색을 위한 JavaScript 로직
- `create-icons.html` - 확장 프로그램 아이콘 생성을 위한 아이콘 생성 도구
- `images/` - 확장 프로그램 아이콘 파일(16px, 32px, 48px, 128px)을 포함하는 폴더
- `push-git.bat` - Git 배포 스크립트

## 기술적 세부사항

- **필요 권한**: tabs, activeTab, storage
- **스토리지 API**: 사용자 기본 설정(정렬 상태)을 유지하는 데 사용
- **반응형 디자인**: 그리드 레이아웃이 다양한 수의 탭에 적응
- **접근성**: 모든 기능에 대한 전체 키보드 탐색 지원

## 참고사항

- 썸네일을 가져올 수 없는 경우 웹사이트 파비콘이 대체로 표시됩니다
- 확장 프로그램은 모든 탭 작업에 Chrome의 탭 API를 사용합니다
- 검색 및 필터링은 모든 창의 모든 열린 탭에서 작동합니다
- 정렬 기본 설정은 Chrome 스토리지 API를 사용하여 브라우저 세션 간에 유지됩니다

## 데모/스크린샷

다음 스크린샷은 확장 프로그램의 주요 기능을 보여줍니다:

### 주요 썸네일 뷰
![Main Thumbnail View](store-assets/screenshots/screenshort-1.png)
시각적 미리보기와 닫기 버튼이 있는 반응형 그리드 레이아웃으로 모든 열린 탭을 표시합니다.

### 검색 기능
![Search Functionality](store-assets/screenshots/screenshort-2.png)
제목이나 URL로 탭을 실시간 필터링하여 특정 탭에 빠르게 접근합니다.

### 정렬된 뷰와 정렬되지 않은 뷰
![Sorted View](store-assets/screenshots/screenshort-3.png)
정렬된(URL 기준) 및 정렬되지 않은 탭 배열 간 전환하여 작업 공간을 정리하세요.

### 키보드 탐색
![Keyboard Navigation](store-assets/screenshots/screenshort-4.png)
마우스 없이 효율적인 탭 탐색을 위한 시각적 표시기 및 키보드 단축키.

### 탭 관리
![Tab Management](store-assets/screenshots/screenshort-5.png)
빠른 닫기 및 탭 간 전환을 포함한 고급 탭 관리 기능.

## 프로젝트 정보

- **생성일**: 2025-12-19
- **마지막 수정일**: 2025-12-19
- **관리자**: [luopub](https://github.com/luopub)

## 설치

### Chrome 웹 스토어에서 설치(권장)

1. [Chrome 웹 스토어](https://chrome.google.com/webstore/detail/tab-thumbnails-visual-tab-manager/chrome-thumbs) 방문
2. "Chrome에 추가" 클릭
3. 필요한 권한 부여
4. 도구 모음에서 확장 프로그램 아이콘을 클릭하여 사용 시작

### 수동 설치(개발자용)

1. 이 리포지토리 복제: `git clone https://github.com/luopub/chrome-thumbs.git`
2. Chrome 브라우저를 열고 확장 프로그램 페이지로 이동 (chrome://extensions/)
3. "개발자 모드" 활성화
4. "압축해제된 확장 프로그램을 로드합니다" 클릭
5. 이 폴더(chrome-thumbs) 선택
6. 아이콘이 필요한 경우 먼저 create-icons.html 파일을 열고 모든 크기의 아이콘을 다운로드하여 images 폴더에 저장

## 기여

기여, 문제 및 기능 요청을 환영합니다! 기여하고 싶으시면 [문제 페이지](https://github.com/luopub/chrome-thumbs/issues)를 확인해 주세요.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 지원

이 확장 프로그램이 도움이 되었다면, GitHub에서 ⭐ 별점을 주시는 것을 고려해 주세요!

## 주제

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