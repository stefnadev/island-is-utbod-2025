import { style } from '@vanilla-extract/css';
import { themeUtils } from '../island-ui/theme';

export const textContainer = style({
  ...themeUtils.responsiveStyle({
    xs: {
      marginLeft: 12,
      paddingLeft: 12,
    },
    sm: {
      marginLeft: 32,
      paddingLeft: 32,
    },
  }),
});
