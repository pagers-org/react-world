import { style } from '@vanilla-extract/css';

import { vars } from '../../../public/styles/global.css';

export const loginContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: vars.space.biggest,
});

export const title = style({
  fontSize: vars.font.size.h2,
  marginBottom: vars.space.tinny,
});
export const subTitle = style({
  color: vars.colors.mainColor,
  marginBottom: vars.space.small,
});

export const formType = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: vars.space.small,
});

export const inputType = style({
  width: '300px',
  height: '25px',
  backgroundColor: '#E8F0FE',
  padding: `${vars.space.medium}${vars.space.large}`,
  margin: ` ${vars.space.smaller} 0`,
  border: '1px solid rgba(0, 0, 0, 0.15)',
  fontSize: vars.font.size.highlight,
  borderRadius: vars.space.small,
  ':focus': {
    outline: 'none',
    border: `2px solid #4A90E2`,
  },
});

export const submitButton = style({
  marginLeft: 'auto',
  backgroundColor: vars.colors.mainColor,
  padding: `${vars.space.medium} ${vars.space.large}`,
  borderRadius: vars.space.smaller,
  marginTop: vars.space.medium,
  color: 'white',
});
