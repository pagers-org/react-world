import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

const BannerStyle = style({
  border: 'solid',
  width: '100%',
  backgroundColor: `${vars.color.greened}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      backgroundColor: 'red',
    },
  },
});

export { BannerStyle };
