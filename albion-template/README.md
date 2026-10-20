# Albion Minerals 스타일 HTML 템플릿 사용법

## 📁 폴더 구조
```
albion-template/
├── index.html          ← 메인 HTML 파일
├── images/             ← 이미지 폴더 (직접 생성)
│   ├── logo-white.svg      (로고 - 흰색/투명 배경)
│   ├── company-logo.svg    (회사 로고)
│   ├── hero-bg.jpg         (히어로 배경 이미지)
│   ├── icon-bone.svg       (뼈 건강 아이콘)
│   ├── icon-heart.svg      (심장 건강 아이콘)
│   ├── icon-sports.svg     (스포츠 아이콘)
│   ├── icon-brain.svg      (인지 건강 아이콘)
│   ├── icon-immune.svg     (면역 아이콘)
│   ├── stats-1.jpg         (통계 섹션 이미지 1)
│   ├── stats-2.jpg         (통계 섹션 이미지 2)
│   ├── science-image.jpg   (과학 섹션 이미지)
│   ├── product-1~4.jpg     (제품 이미지)
│   ├── ingredient-1~5.png  (원료 아이콘)
│   └── news-1~3.jpg        (뉴스 이미지)
```

## 🔴 이미지 교체 방법
HTML 파일에서 `🔴` 주석이 있는 `<img>` 태그의 `src` 속성만 변경하면 됩니다.
- 예: `<img src="images/product-1.jpg">` → `<img src="images/내이미지.jpg">`

## 📝 텍스트 교체 방법
각 섹션의 텍스트만 변경하면 됩니다.
- `🔴` 주석이 있는 부분이 교체 대상입니다.
- 텍스트는 자유롭게 수정 가능합니다.

## 🎨 색상 변경
`<style>` 섹션 상단의 `:root` 변수에서 색상을 변경할 수 있습니다.
```css
:root {
  --navy: #0d2d3f;        /* 메인 다크 색상 */
  --teal: #1a6b6b;        /* 포인트 컬러 */
  --white: #ffffff;       /* 흰색 */
  ...
}
```

## 📱 반응형
- 모바일/태블릿/데스크톱 자동 대응
- 768px 이하에서 그리드가 1열로 전환

## ⚠️ 참고사항
- 이미지 폴더(`images/`)를 직접 생성해야 합니다.
- 이미지 크기 권장:
  - 히어로 배경: 1920x1080 이상
  - 제품 이미지: 800x600 이상
  - 뉴스 이미지: 600x400 이상
  - 아이콘: 200x200 (PNG/SVG)
  - 로고: 300x100 이하