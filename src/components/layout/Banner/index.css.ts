import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const bannerContainer = style({
  padding: '32px 16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.colors.white,
  boxShadow:
    'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
});

export const bannerContent = style({
  maxWidth: 1140,
  margin: '0 auto',
});

export const bannerTitle = style({
  fontSize: 40,
  fontWeight: 600,
});

export const bannerDescription = style({
  marginTop: 20,
  fontSize: 20,
  fontWeight: 300,
});

export const background = styleVariants(vars.colors, (background) => ({
  background,
}));
