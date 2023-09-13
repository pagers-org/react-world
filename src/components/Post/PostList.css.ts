import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';

export const postsContainer = style({
  maxWidth: '576px',
  margin: `${vars.space.largest} auto`,
});
