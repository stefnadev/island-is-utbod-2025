import { style } from '@vanilla-extract/css';
import { theme } from '../../island-ui/theme';

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
