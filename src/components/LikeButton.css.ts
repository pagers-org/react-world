import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const likeButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.space.smaller}${vars.space.small}`,
  fontSize: vars.font.size.little,
  border: `1px solid ${vars.colors.mainColor}`,
  borderRadius: '0.2rem',
  color: vars.colors.mainColor,
  ':hover': {
    color: vars.colors.white,
    backgroundColor: vars.colors.mainColor,
  },
  cursor: 'pointer',
});

export const count = style({
  marginLeft: vars.space.tinny,
});
