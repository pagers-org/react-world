import { style } from '@vanilla-extract/css';

export const settingBlock = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const settingForm = style({
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const settingTitle = style({
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '500',
  margin: '0.5rem 0',
});
