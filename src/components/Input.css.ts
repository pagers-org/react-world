import { style } from '@vanilla-extract/css';
import { vars } from '../../public/styles/global.css';

export const inputType = style({
  width: '300px',
  height: '25px',
  backgroundColor: '#E8F0FE',
  padding: `${vars.space.medium}${vars.space.large}`,
  margin: ` ${vars.space.smaller} 0`,
  border: '1px solid rgba(0, 0, 0, 0.15)',
  fontSize: vars.font.size.highlight,
  borderRadius: vars.space.small,
  ':focus': {
    outline: 'none',
    border: `2px solid #4A90E2`,
  },
});