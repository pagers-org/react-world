import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const logo = style({
  fontSize: '0.8rem',
});

export const footer = style({
  backgroundColor: 'black',
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const input = style({
  width: '300px',
  height: '50px',
  padding: '10px 30px',
  fontSize: '1.5rem',
  borderRadius: '5px',
  border: '1px solid gray',
});

export const button = style({
  width: '100px',
  height: '40px',
  backgroundColor: 'white',
  borderRadius: '5px',
  border: '1px solid black',
  cursor: 'pointer',
  ':hover': {
    boxShadow: 'none',
    background: 'transparent',
    color: 'lightgray',
    border: '1px solid lightgray',
  },
});
