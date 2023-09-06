import { globalStyle } from '@vanilla-extract/css';

globalStyle(
  `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video`,
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
);

globalStyle(
  `article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section`,
  {
    display: 'block',
  },
);

globalStyle('body', {
  lineHeight: 1,
});

globalStyle('ol, ul, li', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle(
  `blockquote::before,
blockquote::after,
q::before,
q::after`,
  {
    content: '',
  },
);

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('*, *::before, *::after, *::-webkit-scrollbar', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  letterSpacing: '-0.05em',
  outline: 'none',
  scrollbarWidth: 'none',
});

globalStyle('img', {
  border: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'black',
});

globalStyle('select, input, textarea', {
  fontSize: 16,
});

globalStyle('input, button', {
  WebkitAppearance: 'none',
});

globalStyle('input::-webkit-contacts-auto-fill-button', {
  position: 'absolute',
  right: 0,
  display: 'none !important',
  pointerEvents: 'none',
  visibility: 'hidden',
});

globalStyle('input', {
  backgroundColor: 'transparent',
  backgroundImage: 'none !important',
  border: 0,
});

globalStyle('button', {
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: 'transparent',
  border: 0,
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
});

globalStyle(
  `input:is([type='button'], [type='submit'], [type='reset']),
input[type='file']::file-selector-button,
button`,
  {
    color: 'initial',
  },
);

globalStyle(
  `input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button`,
  {
    WebkitAppearance: 'none',
    margin: 0,
  },
);

globalStyle('input[type=number]', {
  MozAppearance: 'textfield',
});

globalStyle('*::-webkit-scrollbar', {
  display: 'none',
  scrollbarWidth: 'none',
});

globalStyle('*', {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});
