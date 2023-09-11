// decode jwt
// next jwt

// 쿠키를 받고
// 쿠키를 설정하는 함수나 훅 관리
// 어디에 위치해야하나

// api폴더 하위에 auth.ts 만들어서
// 배스트는 쿠키를 핸들링하는 함수를 호출

// 베스트 프랙티스는 서버에서 관리하는 것
// 하지만 그것이 불가능 하다면
// 쿠키에 httponly secuer 설정
import { ReactElement } from "react";

export const Button = (): ReactElement => {
  return <button>Click Me</button>;
};
