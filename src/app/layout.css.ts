import { style } from '@vanilla-extract/css';

// 600px에 햄버거
// 12000px에 태그 리스트 띄우기
export const mainFrame = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
