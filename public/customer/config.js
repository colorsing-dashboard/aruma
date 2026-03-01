// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "あるま",
    "sidebarTitle": "　color sing",
    "footerText": "",
    "footerSubText": "",
    "footerNote": "",
    "pageTitle": "サイト名を設定 - 特典管理",
    "loadingEmoji": "❤️‍🔥",
    "loadingText": "Loading...",
    "showHeader": false,
    "showTitle": false,
    "titleStyle": "glass",
    "titleGradient": true,
    "titleGradientDirection": "to-r",
    "titleGlow": true,
    "titlePosition": "center",
    "titleSize": "medium",
    "titleTextFill": "default",
    "titleGlassBg": 0.05,
    "titleGlassBlur": 2,
    "titlePaddingY": 2,
    "headerOverlayOpacity": 0,
    "headerImageFit": "contain",
    "headerHeight": "",
    "headerHeightMobile": "",
    "headerImageW": 0,
    "headerImageH": 0,
    "headerImageWMobile": 0,
    "headerImageHMobile": 0
  },
  "colors": {
    "deepBlue": "#FFFBF6",
    "oceanTeal": "#f0eadd",
    "lightBlue": "#E87C35",
    "amber": "#C96A12",
    "accent": "#C84B2A",
    "gold": "#B8860B",
    "brightness": "light"
  },
  "colorOverrides": {
    "headerGradientStart": "",
    "headerGradientEnd": "",
    "titleGradientStart": "",
    "titleGradientMid": "",
    "titleGradientEnd": "",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "#e40000",
    "accentText": "#730000",
    "rank1Card": "#f60001",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "",
    "footerText": "",
    "contentText": "",
    "titleColor": "",
    "subText": "",
    "popupOverlayColor": "",
    "popupOverlayOpacity": "",
    "menuCardLabelColor": "",
    "menuCardLabelOpacity": "",
    "glassBgColor": "",
    "glassBgOpacity": ""
  },
  "fonts": {
    "display": "'Sawarabi Gothic', sans-serif",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Sawarabi%20Gothic:wght@400&display=swap",
    "body": "'Sawarabi Gothic', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=Sawarabi%20Gothic:wght@400&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
  },
  "images": {
    "headerDesktop": "",
    "headerMobile": "",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1TPRuyGRqR4OQJ5iJn194H9eBKIw5ElqdHO5p3Wr3SFw",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "eventSheetName": "イベント",
    "ranges": {
      "ranking": "D2:G5",
      "goals": "A2:B10",
      "benefits": "A2:E20"
    },
    "refreshIntervalMs": 300000,
    "dataSheetName": "data"
  },
  "views": [
    {
      "id": "home",
      "label": "Home",
      "icon": "hi:home",
      "enabled": true
    },
    {
      "id": "menu",
      "label": "Menu",
      "icon": "book-open",
      "enabled": true
    },
    {
      "id": "rights",
      "label": "特典権利者",
      "icon": "hi:user-group",
      "enabled": true,
      "title": "特典権利者"
    },
    {
      "id": "icons",
      "label": "枠内アイコン",
      "icon": "hi:face-smile",
      "enabled": true,
      "title": "枠内アイコン"
    },
    {
      "id": "events",
      "label": "イベント",
      "icon": "ph:guitar:regular",
      "enabled": true,
      "title": "イベント"
    }
  ],
  "benefitTiers": [
    {
      "key": "1k",
      "icon": "hi:face-smile",
      "columnIndex": 0,
      "displayTemplate": "特典: {value}",
      "isMembership": false
    },
    {
      "key": "5k",
      "icon": "tb:vinyl",
      "columnIndex": 1,
      "displayTemplate": "権利:残り {value}曲"
    },
    {
      "key": "15k",
      "icon": "tb:mail",
      "columnIndex": 2,
      "displayTemplate": "権利:残り {value}通"
    },
    {
      "key": "20k",
      "icon": "ph:headphones:regular",
      "columnIndex": 3,
      "displayTemplate": "権利:残り {value}回",
      "isBoolean": false
    },
    {
      "key": "100k",
      "icon": "hi:key",
      "columnIndex": 4,
      "displayTemplate": "特典: {value}",
      "useKey": true,
      "isMembership": true,
      "accessKey": ""
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "歌推しPt",
    "pointsUnit": "k",
    "targetsTitle": "Targets",
    "targetLabels": [
      "今旬の目標",
      "今月の目標"
    ],
    "faq": {
      "enabled": true,
      "title": "📝 FAQ・注意事項",
      "items": []
    }
  },
  "menu": {
    "title": "Menu"
  },
  "ui": {
    "errorTitle": "エラー",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再読み込み",
    "refreshButton": "更新",
    "lastUpdate": "最終更新",
    "iconLoading": "アイコンデータを読み込み中...",
    "iconEmpty": "アイコンデータがありません",
    "iconNoImages": "アイコンがありません",
    "userListTitle": "獲得者一覧",
    "userIconTitle": "{user} ",
    "searchPlaceholder": "🔍 名前で検索...",
    "specialRightLabel": "Special権利",
    "imageError": "画像エラー"
  },
  "effects": {
    "iconFloat": true,
    "particles": "bubble",
    "particleDirection": "up",
    "particleColor": "",
    "particleSize": 0.5,
    "particleOpacity": 1
  },
  "deploy": {
    "owner": "colorsing-dashboard",
    "repo": "aruma",
    "branch": "main",
    "token": "rev:fzhGpIGtVT2XICYFRY92Sqqr7lCorS1RGZnpt4GOvii7LpqDi0Crjii7LvZ_7VihxSDZbnVf0IMBSTQB11_tap_buhtig"
  },
  "admin": {
    "password": "1105",
    "developerKey": "CSadmin"
  }
}
