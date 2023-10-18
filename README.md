# Next World

### Real World에서 제공해주는 API를 활용하여 블로그를 개발한 프로젝트입니다.

## 프로젝트 목표

### Next.js 13 App Router의 사용법을 익히고 SSR 이해하기

### Vanilla Extract의 사용법을 익히고 제로 런타임 이해하기

### React Query의 사용법을 익히고 효율적인 데이터 패칭을 구현하기

### Zustand의 사용법을 익히고 Flux 패턴 이해하기

## Stacks

### Environment

<div style="display: flex">
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
</div>

### Config

<img src="https://img.shields.io/badge/Npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<div style="display: flex">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/Vanilla Extract-DB7093?style=for-the-badge&logo=vanilla extract&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-3578E5?style=for-the-badge&logo=Zustand&logoColor=white">
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
</div>

## 페이지 구성

### 메인 페이지 (Article 목록)

### Article 상세 페이지

### 로그인 페이지

### 회원가입 페이지

### 설정 페이지

### 글쓰기 페이지

### 프로필 페이지

## 주요 기능

- Article CRUD 기능 구현 (전체, 태그, 좋아요, 팔로우)
- Comment CRD 기능 구현
- User & Auth 기능 구현 (로그인, 회원가입, 정보 수정)
- 좋아요 & 팔로우 기능 구현

## Future Works

- [ ] cookies 넣는 부분 util 함수로 빼기
- [ ] route handler Response 일관성 있게 통일하기
- [ ] Error Message에 따라 알맞은 에러 처리
- [ ] 사용하지 않는 함수들 제거하기
- [ ] 좋아요 & 팔로우 버튼
  - [ ] Optimistic Updates를 활용한 사용자 경험 향상
  - [ ] 일관된 UI를 위해 button 크기 고정 (좋아요 수가 99개가 넘어갈 경우 99+로 표시)
- [ ] ArticlePreview
  - [ ] 제목 크기 고정 및 크기를 넘어가면 ... 처리
  - [ ] 한 번 봤던 게시글 표시하기 (체크 표시 또는 배경색을 다르게)
- [ ] alert을 사용하지 않고 Dialog 컴포넌트 구현
- [ ] 페이지 별 스켈레톤 UI 적용
- [ ] Vanilla Extract 기능을 활용하여 CSS 정리 (급하게 하느라 너무 막 짠 거 같습니다..)
- [ ] 테스트 코드 추가
