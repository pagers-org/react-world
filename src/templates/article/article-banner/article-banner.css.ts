import { style } from '@vanilla-extract/css';

export const articleBanner = style({
  color: '#fff',
  backgroundColor: '#333',
  padding: '2rem',
  marginBottom: '2rem',
});

export const articleBannerContainer = style({
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media': {
    '(min-width: 544px)': {
      maxWidth: '576px',
    },
    '(min-width: 768px)': {
      maxWidth: '720px',
    },
    '(min-width: 992px)': {
      maxWidth: '940px',
    },
    '(min-width: 1200px)': {
      maxWidth: '1140px',
    },
  },
});

export const articleBannerHeadLine = style({
  textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
  marginBottom: 0,
});

export const articleMeta = style({
  display: 'block',
  position: 'relative',
  fontWeight: 300,
});

export const articleMetaAuthor = style({
  display: 'flex',
  gap: '6px',
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

export const articleActionButtons = style({
  display: 'flex',
  gap: '6px',
});
