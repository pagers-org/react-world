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

export const nav = style({
  display: 'flex',
  gap: 5,
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
  padding: '10px 20px',
  fontSize: '1.5rem',
  // textAlign: 'center',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  borderRadius: '5px',
  border: '1px solid gray',
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
