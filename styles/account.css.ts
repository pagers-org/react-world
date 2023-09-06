import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
});

export const question = style({
  color: '#5CB85C',
  marginBottom: '1rem',
});

export const textCenter = style({
  textAlign: 'center',
});

export const userBoxBlock = style({
  display: 'flex',
});

export const info = style({
  margin: ' 0 1.5rem 0 0.3rem',
});

export const author = style({
  color: '#5CB85C',
  fontWeight: '500',
});

export const date = style({
  color: '#bbb',
  fontSize: '0.8rem',
});

export const heart = style({
  padding: '0.25rem 0.5rem',
  fontSize: '0.875rem',
  borderRadius: '0.2rem',
  cursor: 'pointer',
  userSelect: 'none',
  border: '1px solid #5CB85C',
  background: 'white',
  color: '#5CB85C',
  ':hover': {
    color: '#fff',
    backgroundColor: '#5CB85C',
    borderColor: '#5CB85C',
  },
});
