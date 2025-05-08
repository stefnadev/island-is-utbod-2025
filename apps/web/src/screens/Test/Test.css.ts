import { themeUtils } from '@/components/island-ui/theme';
import { style } from '@vanilla-extract/css';

export const StyledPageWrapper = style({
  background: '#f8f5fa',
  minHeight: '100vh',
  paddingTop: '130px',
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
  }),
});

export const StyledMainWrapper = style({
  ...themeUtils.responsiveStyle({
    md: {
      margin: '0 -30px',
    },
  }),
});
