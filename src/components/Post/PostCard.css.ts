import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';

export const postCard = style({
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  padding: `${vars.space.largest} 0`,
});

export const articleMeta = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const postInfo = style({
  display: 'flex',
});

export const profilePic = style({
  borderRadius: '30px',
  marginRight: vars.space.tinny,
});

export const info = style({
  margin: `0 ${vars.space.tinny}`,
});

export const authorName = style({
  color: vars.colors.mainColor,
  fontWeight: vars.font.weight.highlight,
});

export const date = style({
  color: vars.colors.lightGrey,
  fontSize: vars.font.size.little,
});

export const contentWrapper = style({
  marginTop: vars.space.medium,
});

export const title = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.highlight,
});

export const content = style({
  color: vars.colors.lightGrey,
  fontWeight: vars.font.weight.semiThin,
  lineHeight: '1.3rem',
  marginTop: vars.space.tinny,
  marginBottom: vars.space.medium,
});

export const readMore = style({
  fontSize: vars.font.size.little,
  fontWeight: vars.font.weight.semiThin,
  color: vars.colors.lightGrey,
});
