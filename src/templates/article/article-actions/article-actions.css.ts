import { style } from '@vanilla-extract/css';

export const articleActionsContainer = style({
  textAlign: 'center',
  margin: '1.5rem 0 3rem',
});

export const articleMeta = style({
  display: 'block',
  position: 'relative',
  fontWeight: 300,
});

export const articleMetaImage = style({
  display: 'inline-block',
  verticalAlign: 'middle',
  height: '32px',
  width: '32px',
  borderRadius: '30px',
});

export const articleMetaInfo = style({
  margin: '0 1.5rem 0 0.3rem',
  display: 'inline-block',
  verticalAlign: 'middle',
  lineHeight: '1rem',
});

export const articleMetaInfoAuthor = style({
  display: 'block',
  fontWeight: '500 !important',
});

export const articleMetaInfoDate = style({
  color: '#bbb',
  fontSize: '0.8rem',
  display: 'block',
});
