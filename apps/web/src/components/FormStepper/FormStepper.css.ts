import { style } from '@vanilla-extract/css';
import { themeUtils } from '../island-ui/theme';

export const StepNumber = style({
  height: ' 32px',
  minWidth: '32px',
  width: ' 32px',
  borderRadius: '50%',
  display: ' flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: ' #fff',
  background: '#c3abd9',
  fontSize: 16,
  fontWeight: 600,
  zIndex: 9,
  ...themeUtils.responsiveStyle({
    xs: {
      marginRight: '12px',
    },
    sm: {
      marginRight: '12px',
    },
    md: {
      marginRight: 16,
    },
  }),
});

export const Line = style({
  position: 'absolute',
  height: '40px',
  width: '2px',
  background: '#3abd9',
  left: '15px',
  top: '-20px',
  ...themeUtils.responsiveStyle({
    xs: {
      display: 'none',
    },
    sm: {
      display: 'none',
    },
    md: {
      display: 'none',
    },
    lg: {
      display: 'block',
    },
  }),
});

export const StepWrapper = style({
  marginTop: '32px',
});
