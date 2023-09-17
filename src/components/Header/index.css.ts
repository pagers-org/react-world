import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

const HeaderStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

const BlogNameStyle = style({
  color: vars.color.greened,
});

const DeskNavigationStyle = style({
  display: 'flex',
});

export { HeaderStyle, BlogNameStyle, DeskNavigationStyle };
