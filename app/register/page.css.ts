import { style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const registerContainer = style({
  marginTop: 40,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
});

export const registerText = style({
  fontSize: 40,
  fontWeight: 500,
});

export const descriptionText = style({
  color: vars.colors.primary,
});

export const registerInput = style({
  width: 330,
  height: 50,
  padding: '12px 8px',
  border: `1px solid ${vars.colors.gray}`,

  '::placeholder': {
    color: vars.colors.gray,
  },
});

export const registerButton = style({
  width: 330,
  height: 50,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  fontSize: 20,
  fontWeight: 400,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
});

export const errorMessage = style({
  marginTop: 4,
  color: vars.colors.danger,
});
