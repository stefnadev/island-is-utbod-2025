import { style } from '@vanilla-extract/css';
import { themeUtils } from '../island-ui/theme';

export const logo = style({
  position: 'absolute',
  left: '50%',
  right: '0',
  transform: 'translateX(-50%)',
  width: '200px',
  top: '-13px',
  background: 'white',
  padding: '0 20px',
});
export const text = style({
  textAlign: 'center',
});
export const pageWrapper = style({
  width: ' calc(100% - 48px)',
  margin: '0 auto',
});
export const loginFormWidth = style({
  margin: '0 auto',
  ...themeUtils.responsiveStyle({
    xs: {
      width: '85%',
    },
    sm: {
      width: '65%',
    },
  }),
});
export const loginFormWrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: '512px',
  margin: '60px auto 0',
});
