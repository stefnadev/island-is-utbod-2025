import { style } from '@vanilla-extract/css';
import { theme } from '../island-ui/theme';

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
  width: '65%',
  margin: '0 auto',
});
export const loginFormWrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: '512px',
  margin: '60px auto 0',
});
export const dividerBackground = style({
  position: 'relative',
  width: '100%',
  borderTop: '1px solid',
  borderColor: theme.color.dark100,
});
export const dividerText = style({
  position: 'absolute',
  left: '50%',
  right: '0',
  transform: 'translateX(-50%)',
  width: '190px',
  top: '-10px',
  background: 'white',
  padding: '0 20px',
});
