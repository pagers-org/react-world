import { vars } from '@/src/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.4)',
  zIndex: 60,
});

export const modal = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: vars.colors.primary,
  width: 280,
});

export const text = style({
  padding: 24,
  paddingBottom: 16,
  fontSize: 14,
});

export const buttonWrapper = style({
  width: '100%',
  display: 'flex',
});

export const button = style({
  flex: 1,
  height: 52,
  fontSize: 14,
  fontWeight: 700,
  color: vars.colors.white,
});
