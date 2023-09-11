import { style } from '@vanilla-extract/css';
import { flexBetween } from './common.css';

export const commentForm = style({
  border: '1px solid #e5e5e5',
  borderRadius: '0.25rem',
  width: 730,
  margin: '30px 0',
});

export const commentTextarea = style({
  border: '0px',
  padding: ' 1.25rem',
  width: '100%',
  boxSizing: 'border-box',
  fontSize: '1rem',
  lineHeight: '1.25',
  color: '#55595c',
});

export const commentFormFooter = style([
  flexBetween,
  {
    background: '#f5f5f5',
    borderRadius: '0 0 0.25rem 0.25rem',
    padding: '0.75rem 1.25rem',
    fontSize: '0.8rem',
    fontWeight: 300,
    borderTop: '1px solid #e5e5e5',
  },
]);

export const commentSubmitButton = style({
  fontWeight: 700,
});
