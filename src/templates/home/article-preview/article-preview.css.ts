import { style } from '@vanilla-extract/css';

export const articlePreviewSkeletonMeta = style({
  marginBottom: '16px',
});

export const articlePreviewSkeletonLink = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const articlePreviewContainer = style({
  padding: '20px 10px',
  borderBottom: '1px solid #e6e6e6',
});

export const articlePreviewMeta = style([
  {
    height: '32px',
    marginBottom: '16px',
  },
  'd-flex justify-content-between',
]);

export const articlePreviewMetaInfo = style([
  {
    gap: '6px',
  },
  'd-flex',
]);

export const articlePreviewMetaInfoAuthorImageBox = style({
  display: 'flex',
  alignItems: 'center',
});

export const articlePreviewMetaInfoAuthorImage = style([{}, 'rounded-circle']);

export const articlePreviewMetaInfoBox = style([
  {
    height: '32px',
    lineHeight: 1,
  },
  'd-flex flex-column justify-content-center',
]);

export const articlePreviewMetaInfoAuthor = style({
  textDecoration: 'none',
  color: '#000000',
});

export const articlePreviewMetaInfoDate = style([
  {
    height: '16px',
    fontSize: '12px',
    color: '#bbbbbb',
  },
  'd-flex align-items-center',
]);

export const articlePreviewContent = style({
  textDecoration: 'none',
  color: '#000000',
});

export const articlePreviewContentTitle = style({
  fontSize: '24px',
  marginBottom: '3px',
});

export const articlePreviewContentDescription = style({
  fontSize: '16px',
  fontWeight: 300,
  color: '#999999',
  lineHeight: 1.3,
});

export const articlePreviewContentReadMoreBox = style([{}, 'd-flex justify-content-between']);

export const articlePreviewContentReadMore = style({
  color: '#bbbbbb',
  fontSize: '12px',
});

export const articlePreviewContentTagList = style([
  {
    gap: '4px',
  },
  'd-flex',
]);
