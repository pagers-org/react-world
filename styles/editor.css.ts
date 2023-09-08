import { style } from '@vanilla-extract/css';

export const editorForm = style({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  margin: '0 auto',
});

export const editorButton = style({
  color: '#fff',
  backgroundColor: '#449d44',
  borderColor: '#419641',
  display: 'inline-block',
  float: 'right',
  padding: '0.75rem 1.5rem',
  fontSize: '1.25rem',
  borderRadius: '0.3rem',
  border: '1px solid transparent',
});
