import { theme } from '@island.is/island-ui/theme'
import { style } from '@vanilla-extract/css'

export const container = style({
  paddingBottom: '56.25%',
  position: 'relative',
  display: 'block',
  width: '100%',
})

export const content = style({
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
})

export const innerContent = style({
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const link = style({
  textDecoration: 'underline',
})

export const playIconContainer = style({
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.color.blue400,
  padding: '14px',
  borderRadius: '50%',
  cursor: 'pointer',
})

export const modal = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  width: '400px',
  maxWidth: '100%',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.16)',
})
