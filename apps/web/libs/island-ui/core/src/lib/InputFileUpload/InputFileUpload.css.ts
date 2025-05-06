import { keyframes, style } from '@vanilla-extract/css'
import { theme } from '@island.is/island-ui/theme'
import { errorMessage as inputErrorMessage } from '../Input/Input.mixins'

export const container = style({
  border: `1px dashed ${theme.color.blue300}`,
  ':hover': {
    border: `1px dashed ${theme.color.blue400}`,
  },
})

export const containerDisabled = style({
  opacity: 0.4,
})

export const uploadedFile = style({
  transition: 'background .5s ease',
  lineHeight: 0,
})

export const progressIconAnimation = style({
  lineHeight: 0,
  animationName: keyframes({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(359deg)',
    },
  }),
  animationTimingFunction: 'linear',
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  transformOrigin: 'center',
})

export const uploadingIndicator = style({
  height: 2,
  bottom: '-1px',
  backgroundColor: theme.color.purple400,
  transition: 'width .25s ease',
})

export const errorMessage = style(inputErrorMessage)

export const canOpenFiles = style({
  cursor: 'pointer',
})

export const fileName = style({
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
