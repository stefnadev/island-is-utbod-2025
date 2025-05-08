import { themeUtils } from '@/components/island-ui/theme';
import { style } from '@vanilla-extract/css';

export const StyledPageWrapper = style({
  background: '#f8f5fa',
  minHeight: '100vh',
  ...themeUtils.responsiveStyle({
    md: {
      paddingTop: '80px',
    },
  }),
});

export const StyledSavedWrapper = style({
  ...themeUtils.responsiveStyle({
    md: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      width: '250px',
    },
    lg: {
      position: 'unset',
    },
  }),
});

export const StyledMainWrapper = style({
  ...themeUtils.responsiveStyle({
    xs: {
      margin: '0 -30px',
    },
    sm: {
      margin: '0 -30px',
    },
    md: {
      margin: '0',
    },
  }),
});
