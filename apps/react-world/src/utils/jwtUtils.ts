import Cookies from 'js-cookie';

export const saveTokenToCookie = (token: string) => {
  Cookies.set('jwtToken', token, {
    secure: true, // HTTPS에서만 쿠키 전송
    sameSite: 'lax', // CSRF 공격 방지를 위한 설정
  });
};
