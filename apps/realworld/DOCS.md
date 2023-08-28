# 템플릿 세부
> https://www.realworld.how/docs/specs/frontend-specs/templates

# 라우팅 가이드
## Home page (URL: /#/ )
- 태그 목록
- 피드, 글로벌 또는 태그별로 가져온 아티클 목록
- 아티클 목록에 대한 페이지네이션 적용

<br/>

## Sign in/Sign up pages (URL: /#/login, /#/register )
- JWT 사용(토큰을 localStorage에 저장)
- 인증을 세션/쿠키 기반으로 쉽게 전환 가능

<br/>

## Settings page (URL: /#/settings )

<br/>

## Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )

<br/>

## Article page (URL: /#/article/article-slug-here )
- 아티클 삭제 버튼(아티클 작성자에게만 표시됨)
- 클라이언트 측에서 마크다운 렌더링
- 페이지 하단에 댓글 섹션 위치
- 댓글 삭제 버튼(댓글 작성자에게만 표시됨)

<br/>

## Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
- 기본 사용자 정보 표시
- 작성자가 작성한 아티클 또는 작성자가 선호하는 아티클로 채워진 기사 목록

<br/>
