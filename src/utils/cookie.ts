'use client';

export const setCookie = (key: string, value: string, maxAge: number) => {
  document.cookie = `${key}=${value};max-age=${maxAge}`;
};

export const getCookie = (key: string) => {
  const cookie = document.cookie
    .split('; ')
    .find((v) => v.split('=')[0] === key);

  if (!cookie) {
    return;
  }

  const [, value] = cookie.split('=');

  return value;
};

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';');

  cookies.forEach((_, idx) => {
    document.cookie = cookies[idx] + '=;expires=' + new Date(0).toUTCString();
  });
};
