import { style } from '@vanilla-extract/css';
import { theme } from '../../../../theme';

export const blockquote = style({
  boxShadow: `inset 2px 0 0 ${theme.color.purple400}`,
});
