import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem, 1rem',
  width: '90%',
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
  background: 'linear-gradient(#485563, #29323c)',
  position: 'fixed',
  bottom: 0,
  color: '#fff',
  width: '100%',
  textAlign: 'center',
  padding: '15px',
  boxShadow: '0 5px 5px 5px rgba(0,0,0,0.4)',
  zIndex: '999',
  fontSize: '1.5rem',
});

export const footerLink = style({
  color: '#fff',
  paddingLeft: 10,
});

export const footerIcon = style({
  fontSize: '22px',
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

export const sideBar = style({
  padding: '5px 10px 10px 10px',
  background: '#f3f3f3',
  borderRadius: '4px',
  width: 255,
});

export const sideBarText = style({
  margin: 0,
  marginBottom: '0.2rem',
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const tagItem = style({
  color: '#fff',
  fontSize: '0.8rem',
  padding: '0.1rem 0.6rem',
  backgroundColor: '#818a91',
  marginRight: '3px',
  marginBottom: '0.2rem',
  display: 'flex',
  alignItems: 'center',
});

export const tagFill = style({
  borderRadius: '0.6rem',
});

export const button = style({
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

export const buttonBox = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
});
