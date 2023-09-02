import { style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const loginContainer = style({
  marginTop: 40,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
});

export const loginText = style({
  fontSize: 40,
  fontWeight: 500,
});

export const descriptionText = style({
  color: vars.color.primary,
});

export const input = style({
  width: 330,
  height: 50,
  padding: '12px 8px',
  border: `1px solid ${vars.color.gray}`,

  '::placeholder': {
    color: vars.color.gray,
  },
});

export const loginButton = style({
  width: 330,
  height: 50,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  fontSize: 20,
  fontWeight: 400,
});
