import { style } from '@vanilla-extract/css';

export const HomePageBannerContainer = style([
  {
    height: '200px',
    maxWidth: 'unset',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '20px',
    backgroundColor: '#8b00ce',
    color: '#ffffff',
    boxShadow: 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
  },
  'container',
  'd-flex flex-column justify-content-center align-items-center gap-2',
]);

export const HomePagePaginationContainer = style({
  marginTop: '24px',
});
