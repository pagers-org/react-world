import { style } from '@vanilla-extract/css';

export const userBlock = style({
  background: '#f3f3f3',
  marginBottom: '30px',
});

export const userInfo = style({
  padding: '2rem 0 1rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '70%',
  margin: '0 auto',
});

export const userImage = style({
  marginBottom: '1rem',
  borderRadius: '50%',
});

export const userImageSm = style({
  borderRadius: '50%',
});

export const userName = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  marginBottom: '0.5rem',
});

export const settingButton = style({
  color: '#999',
  marginLeft: 'auto',
  border: '1px solid #999',
  padding: '0.25rem 0.5rem',
  fontSize: '0.875rem',
  borderRadius: '0.2rem',
  alignSelf: '',
  ':hover': {
    backgroundColor: '#ccc',
  },
});
