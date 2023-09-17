import { globalStyle } from '@vanilla-extract/css';

// eslint-disable-next-line import/prefer-default-export
// export const centerAlign = style({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

// eslint-disable-next-line import/prefer-default-export
globalStyle('html, body', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
