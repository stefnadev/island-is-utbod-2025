import { style } from '@vanilla-extract/css'
import { theme } from '@island.is/island-ui/theme'

export const label = style({
  position: 'absolute',
  color: theme.color.blue400,
  top: 8,
  left: 8,
  fontWeight: theme.typography.semiBold,
  fontSize: 14,
  lineHeight: 1.142857,
})

export const hasError = style({
  color: `${theme.color.red600} !important`,
})
