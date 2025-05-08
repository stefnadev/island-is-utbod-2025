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
  marginRight: 24,
  fontSize: 16,
  fontWeight: 600,
  zIndex: 9,
  ...themeUtils.responsiveStyle({
    md: {
      marginRight: '12px',
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
    md: {
      display: 'none',
    },
  }),
});

export const StepWrapper = style({
  marginTop: '32px',
});
