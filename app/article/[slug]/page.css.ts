import { style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const bannerContent = style({
  display: 'flex',
  gap: 16,
});

export const author = style({
  display: 'flex',
  gap: 4,
});

export const authorImage = style({
  borderRadius: '50%',
});

export const authorName = style({
  color: vars.color.primary,
  fontWeight: 500,
});

export const createdDate = style({
  fontSize: 14,
  color: vars.color.gray,
});

export const followButton = style({
  border: `1px solid ${vars.color.gray}`,
  padding: 4,
  color: vars.color.gray,
});

export const favoriteButton = style({
  border: `1px solid ${vars.color.primary}`,
  marginLeft: 4,
  padding: 4,
  color: vars.color.primary,
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  maxWidth: 1140,
  margin: '0 auto',
  padding: 40,
});

export const content = style({
  fontSize: 18,
  lineHeight: '150%',
});

export const tag = style({
  display: 'flex',
  gap: 4,
});

export const chip = style({
  padding: 6,
  border: `1px solid ${vars.color.gray}`,
  color: vars.color.gray400,
  borderRadius: 12,
  fontSize: 12,
});

export const horizontalLine = style({
  borderBottom: `1px solid ${vars.color.gray}`,
});

export const footerContent = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 16,
});

export const footerDescription = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 4,
});

export const linkText = style({
  color: vars.color.primary,
});
