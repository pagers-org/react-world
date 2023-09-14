import { style } from '@vanilla-extract/css';
import { sidePadding } from './common.css';

export const articleContainer = style([
  sidePadding,
  {
    width: '80%',
  },
]);

export const articleTab = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: 10,
});

export const articleTabItemActivate = style({
  color: '#5CB85C',
  borderBottom: '2px solid #5CB85C',
});

export const articleTabItemDisable = style({
  color: '#aaa',
});

export const articleTabItem = style({
  padding: '0.5rem 1rem',
});

export const articlePreview = style({
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '1.5rem 0',
  width: '100%',
});

export const articleMeta = style({
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
});

export const articleTitle = style({
  fontWeight: '600',
  fontSize: '1.5rem',
  marginBottom: '3px',
});

export const articleDetailTitle = style({
  fontSize: '2.8rem',
  fontWeight: '600',
  marginBottom: 40,
});

export const articleDescription = style({
  fontWeight: '300',
  fontSize: '1rem',
  lineHeight: '1.3rem',
  color: '#999',
  marginBottom: '15px',
});

export const articleReadMore = style({
  fontSize: ' 0.8rem',
  fontWeight: '300',
  color: '#bbb',
  verticalAlign: 'middle',
});

export const articleContent = style({
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
  marginBottom: '2rem',
});

export const articleTextarea = style({
  border: '1px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '0.25rem',
  padding: '0.5rem 0.75rem',
  color: '#55595c',
  ':focus': {
    borderColor: '#66afe9',
    outline: 'none',
  },
});
