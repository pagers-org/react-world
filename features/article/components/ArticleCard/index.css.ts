import { style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const articleCard = style({
  padding: '16px 0',
  borderBottom: `1px solid ${vars.colors.gray}`,
});

export const top = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const topLeft = style({
  display: 'flex',
  gap: 6,
});

export const authorImage = style({
  borderRadius: '50%',
});

export const authorName = style({
  color: vars.colors.primary,
  fontWeight: 500,
});

export const createdDate = style({
  fontSize: 14,
  color: vars.colors.gray,
});

export const favoriteButton = style({
  padding: 4,
  border: `1px solid ${vars.colors.primary}`,
  color: vars.colors.primary,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 12,
  gap: 8,
});

export const articleTitle = style({
  fontSize: 20,
  fontWeight: 700,
});

export const articleDescription = style({
  color: vars.colors.gray,
});

export const bottom = style({
  display: 'flex',
  color: vars.colors.gray,
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 12,
});

export const bottomTagList = style({
  display: 'flex',
  gap: 4,
});

export const bottomTag = style({
  padding: 6,
  border: `1px solid ${vars.colors.gray}`,
  borderRadius: 12,
  fontSize: 12,
});
