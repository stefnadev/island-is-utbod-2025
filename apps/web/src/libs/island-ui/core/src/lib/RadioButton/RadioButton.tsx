import React from 'react'
import cn from 'classnames'

import { Text } from '../Text/Text'
import { Tooltip } from '../Tooltip/Tooltip'
import * as styles from './RadioButton.css'
import { InputBackgroundColor } from '../Input/types'
import { Box } from '../Box/Box'
import { BoxProps } from '../Box/types'
import { Tag } from '../Tag/Tag'
import { TagVariant } from '../Tag/types'
import { TestSupport } from '@island.is/island-ui/utils'
import { Hidden } from '../Hidden/Hidden'

export interface RadioButtonProps {
  name?: string
  id?: string
  label?: React.ReactNode
  value?: string | number
  checked?: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  tooltip?: React.ReactNode
  tag?: {
    label: string
    variant?: TagVariant
    outlined?: boolean
  }
  hasError?: boolean
  errorMessage?: string
  large?: boolean
  /** backgroundColor can only be used if the 'large' prop set to true */
  backgroundColor?: InputBackgroundColor
  /** subLabel can only be used if the 'large' prop set to true */
  subLabel?: React.ReactNode
  /** illustration can only be used if the 'large' prop set to true */
  illustration?: React.FC<React.PropsWithChildren<unknown>>
  hasIllustration?: boolean
}

interface AriaError {
  'aria-invalid': boolean
  'aria-describedby': string
}

const backgroundColors: Record<InputBackgroundColor, BoxProps['background']> = {
  white: 'white',
  blue: 'blue100',
}
export const RadioButton = ({
  label,
  subLabel,
  name,
  id = name,
  value,
  checked,
  disabled,
  onChange,
  tooltip,
  tag,
  illustration: Illustration,
  hasError,
  errorMessage,
  large,
  dataTestId,
  backgroundColor,
  hasIllustration,
}: RadioButtonProps & TestSupport) => {
  const errorId = `${id}-error`
  const ariaError = hasError
    ? {
        'aria-invalid': true,
        'aria-describedby': errorId,
      }
    : {}

  return hasIllustration ? (
    <Box
      className={cn(styles.container)}
      background={
        large && backgroundColor ? backgroundColors[backgroundColor] : undefined
      }
      height="full"
    >
      <input
        className={styles.input}
        type="radio"
        name={name}
        disabled={disabled}
        id={id}
        data-testid={dataTestId}
        onChange={onChange}
        value={value}
        checked={checked}
        {...(ariaError as AriaError)}
      />
      <Box
        display="flex"
        alignItems="flexStart"
        flexDirection="column"
        justifyContent="spaceBetween"
      >
        {Illustration && (
          <Box>
            <Illustration />
          </Box>
        )}
        <label
          className={cn(styles.label, {
            [styles.radioButtonLabelDisabled]: disabled,
            [styles.largeLabel]: large,
          })}
          htmlFor={id}
        >
          <div
            className={cn(styles.radioButton, {
              [styles.radioButtonChecked]: checked,
              [styles.radioButtonError]: hasError,
              [styles.radioButtonDisabled]: disabled,
            })}
          >
            <div className={styles.checkMark} />
          </div>
          <span className={styles.labelText}>
            <Text as="span" fontWeight={checked ? 'semiBold' : 'light'}>
              {label}
            </Text>
            {subLabel && (
              <Text
                as="span"
                marginTop="smallGutter"
                fontWeight="regular"
                variant="small"
              >
                {subLabel}
              </Text>
            )}
          </span>
        </label>
        {hasError && errorMessage && (
          <div
            id={errorId}
            className={styles.errorMessage}
            aria-live="assertive"
          >
            {errorMessage}
          </div>
        )}
      </Box>
    </Box>
  ) : (
    <Box
      className={cn(styles.container, {
        [styles.large]: large,
        [styles.largeError]: large && hasError,
      })}
      background={
        large && backgroundColor ? backgroundColors[backgroundColor] : undefined
      }
    >
      <input
        className={styles.input}
        type="radio"
        name={name}
        disabled={disabled}
        id={id}
        data-testid={dataTestId}
        onChange={onChange}
        value={value}
        checked={checked}
        {...(ariaError as AriaError)}
      />
      <label
        className={cn(styles.label, {
          [styles.radioButtonLabelDisabled]: disabled,
          [styles.largeLabel]: large,
        })}
        htmlFor={id}
      >
        <div
          className={cn(styles.radioButton, {
            [styles.radioButtonChecked]: checked,
            [styles.radioButtonError]: hasError,
            [styles.radioButtonDisabled]: disabled,
          })}
        >
          <div className={styles.checkMark} />
        </div>
        <span className={styles.labelText}>
          <Text as="span" fontWeight={checked ? 'semiBold' : 'light'}>
            {label}
          </Text>
          {subLabel && (
            <Text
              as="span"
              marginTop="smallGutter"
              fontWeight="regular"
              variant="small"
            >
              {subLabel}
            </Text>
          )}
        </span>
        {large && Illustration && (
          <Box marginLeft="auto" paddingRight="smallGutter">
            <Illustration />
          </Box>
        )}
        {tooltip && (
          <div
            className={cn(styles.tooltipContainer, {
              [styles.tooltipLargeContainer]: large && !Illustration,
              [styles.toolTipLargeContainerWithIllustration]:
                large && Illustration,
            })}
          >
            <Tooltip text={tooltip} />
          </div>
        )}
        <Hidden below="sm">
          {tag && large && (
            <Tag outlined={tag.outlined} variant={tag.variant} disabled>
              {tag.label}
            </Tag>
          )}
        </Hidden>
      </label>
      <Hidden above="xs">
        {tag && large && (
          <Box paddingLeft="gutter" paddingBottom="gutter">
            <Tag outlined={tag.outlined} variant={tag.variant} disabled>
              {tag.label}
            </Tag>
          </Box>
        )}
      </Hidden>
      {hasError && errorMessage && (
        <div id={errorId} className={styles.errorMessage} aria-live="assertive">
          {errorMessage}
        </div>
      )}
    </Box>
  )
}
