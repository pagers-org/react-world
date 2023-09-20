import { style } from '@vanilla-extract/css';

import { vars } from '../../../public/styles/global.css';

export const loginContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: vars.space.biggest,
});


export const formType = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: vars.space.small,
});

export const submitButton = style({
  marginLeft: 'auto',
  backgroundColor: vars.colors.mainColor,
  padding: `${vars.space.medium} ${vars.space.large}`,
  borderRadius: vars.space.smaller,
  marginTop: vars.space.medium,
  color: 'white',
});
