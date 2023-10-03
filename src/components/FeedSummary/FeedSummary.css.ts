import { style } from '@vanilla-extract/css';

import { vars } from '@/app/style.css';

export const feedSummary = style({
  padding: '30px 20px',
  borderTop: `1px solid ${vars.color.black03}`,
});

export const feedSummaryHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
});

export const avatar = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  cursor: 'pointer',
});

export const userInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
});

export const username = style({
  color: vars.color.standardGreen,
  cursor: 'pointer',
});

export const createdAt = style({
  color: vars.color.black03,
  fontSize: '12px',
});

export const likeCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  width: 'fit-content',
  height: 'fit-content',
  color: vars.color.standardGreen,
  border: `1px solid ${vars.color.standardGreen}`,
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
});

export const feedTitle = style({
  margin: 0,
  marginBottom: '10px',
  cursor: 'pointer',
});

export const feedDescription = style({
  color: vars.color.gray9,
  cursor: 'pointer',
});

export const feedSummaryFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '13px',
});

export const readMore = style({
  color: vars.color.grayB,
  cursor: 'pointer',
});

export const feedTags = style({
  display: 'flex',
  gap: '5px',
});

export const feedTag = style({
  color: vars.color.grayA,
  border: `1px solid ${vars.color.grayA}`,
  borderRadius: '100px',
  padding: '5px 10px',
  cursor: 'pointer',
});
