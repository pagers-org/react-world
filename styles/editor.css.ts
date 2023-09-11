import { style } from '@vanilla-extract/css';
import { fillGreenButton } from './common.css';

export const editorForm = style({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  margin: '0 auto',
  color: '#55595c',
});

export const editorButton = style([
  fillGreenButton,
  {
    float: 'right',
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
  },
]);
