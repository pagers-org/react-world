import { createGlobalTheme, styleVariants } from '@vanilla-extract/css';

// eslint-disable-next-line import/prefer-default-export
export const vars = createGlobalTheme('html, body', {
  color: {
    greened: '#5CB85C',
  },
  font: {
    body: 'arial',
  },
});

// eslint-disable-next-line import/prefer-default-export
export const greenWords = styleVariants({
  blogName: [{ color: vars.color.greened }],
});
