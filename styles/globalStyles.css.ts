import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, h1, h2, h3, h4, h5, p', {
  margin: 0,
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle('a', {
  textDecorationLine: 'none',
});

globalStyle('main', {
  marginBottom: '100px',
});
