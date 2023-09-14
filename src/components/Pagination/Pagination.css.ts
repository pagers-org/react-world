import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';

export const buttonLayer = style({
  display: 'flex',
  justifyContent: 'center',
  margin: vars.space.biggest,
});

export const buttons = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${vars.colors.lightGrey}`,
  borderRadius: '3px',
});

export const activeButton = style({
  backgroundColor: vars.colors.subColor,
  padding: `${vars.space.smaller}${vars.space.medium}`,
  borderLeft: `1px solid ${vars.colors.lightGrey}`,
  marginLeft: '-1px',
});

export const inActiveButton = style({
  backgroundColor: vars.colors.white,
  padding: `${vars.space.smaller}${vars.space.medium}`,
  borderLeft: `1px solid ${vars.colors.lightGrey}`,
  marginLeft: '-1px',
});
