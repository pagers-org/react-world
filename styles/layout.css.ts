import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem, 1rem',
  width: '80%',
  margin: '0 auto',
});

export const logo = style({
  fontSize: '1.5rem',
  color: '#5CB85C',
  paddingBottom: 4,
  lineHeight: 2,
  fontWeight: 'bold',
});

export const footer = style({
  backgroundColor: 'black',
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
});

export const navItem = style({
  padding: '0.425rem 0px',
});

export const activate = style({
  color: 'rgba(0, 0, 0, 0.8)',
});

export const disabled = style({
  color: 'rgba(0, 0, 0, 0.3)',
});

export const container = style({
  width: '80%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const sideBar = style({
  padding: '5px 10px 10px 10px',
  background: '#f3f3f3',
  borderRadius: '4px',
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const input = style({
  width: '300px',
  height: '50px',
  padding: '0.75rem 1.5rem',
  fontSize: '1.25rem',
  borderRadius: '0.3rem',
  border: '1px solid rgba(0, 0, 0, 0.15);',
  boxSizing: 'border-box',
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

export const flexBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const buttonBox = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
});
