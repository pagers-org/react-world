import { style } from '@vanilla-extract/css';

const responsiveStyle = ({ tablet, desktop }) => ({
  '@media': {
    'screen and (min-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
});

export const container = style([
  { margin: '0 auto', padding: '0 15px' },
  responsiveStyle({
    tablet: { width: '768px' },
    desktop: { width: '1140px' },
  }),
]);

export const textCenter = style({
  textAlign: 'center',
});

export const sidePadding = style({
  padding: '0 15px',
});

export const circle = style({
  borderRadius: '50%',
});

export const flexRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const flexCenter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const flex = style({
  display: 'flex',
  width: '100%',
});

export const flexBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const justifyCenter = style([
  flex,
  {
    justifyContent: 'center',
  },
]);

export const alignCenter = style([
  flex,
  {
    alignItems: 'center',
  },
]);

export const flexBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const input = style({
  width: '100%',
  height: '50px',
  padding: '0.75rem 1.5rem',
  fontSize: '1.25rem',
  borderRadius: '0.3rem',
  border: '1px solid rgba(0, 0, 0, 0.15);',
  boxSizing: 'border-box',
  ':focus': {
    borderColor: '#66afe9',
    outline: 'none',
  },
});

export const backgroundGreen = style({
  background: '#5CB85C',
});

export const backgroundBlack = style({
  background: '#333',
});

export const button = style({
  background: 'none',
  borderRadius: '0.2rem',
  padding: '0.25rem 0.5rem',
  fontSize: '0.875rem',
  cursor: 'pointer',
});

export const greenButton = style([
  button,
  {
    border: '1px solid #5CB85C',
    color: '#5CB85C',
    ':hover': {
      background: '#5CB85C',
      color: '#fff',
    },
  },
]);

export const grayButton = style([
  button,
  {
    border: '1px solid #ccc',
    color: '#ccc',
    ':hover': {
      background: '#ccc',
      color: '#fff',
    },
  },
]);

export const redButton = style([
  button,
  {
    border: '1px solid #B85C5C',
    color: '#B85C5C',
    ':hover': {
      background: '#B85C5C',
      color: '#fff',
    },
  },
]);

export const fillGreenButton = style([
  button,
  {
    border: '1px solid #5CB85C',
    background: '#5CB85C',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
    borderRadius: '0.3rem',
    ':hover': {
      backgroundColor: '#449d44',
      borderColor: '#419641',
    },
  },
]);

export const fontSize = style({
  fontSize: '1.3rem',
});

export const paddingTB = style({
  padding: '20px 0',
});

export const hr = style({
  borderBottom: '1px solid lightgray',
});
