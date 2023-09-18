import { style } from '@vanilla-extract/css';

import { vars } from '../../../public/styles/global.css';

export const articleContainer = style({
  maxWidth: '576px',
  margin: `${vars.space.largest} auto`,
});
