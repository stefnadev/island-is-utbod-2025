import React, { forwardRef } from 'react'
import cn from 'classnames'

import { Text } from '../Text/Text'
import { Hyphen } from '../Hyphen/Hyphen'
import { shouldLinkOpenInNewWindow } from '@island.is/shared/utils'

import * as styles from './Tag.css'
import { TagProps } from './types'

export const Tag = forwardRef<HTMLButtonElement & HTMLAnchorElement, TagProps>(
  (
    {
      children,
      href,
      onClick,
      variant = 'blue',
      active,
      disabled,
      outlined,
      attention,
      truncate,
      hyphenate,
      textLeft,
      CustomLink,
      whiteBackground,
      ...props
    }: TagProps,
    ref,
  ) => {
    const className = cn(styles.container, styles.variants[variant], {
      [styles.active]: active,
      [styles.outlined]: outlined,
      [styles.attention]: attention,
      [styles.focusable]: !disabled,
      [styles.hyphenate]: hyphenate,
      [styles.textLeft]: textLeft,
      [styles.disabled]: disabled,
      [styles.whiteBackground]: whiteBackground,
    })

    const isExternal = href && shouldLinkOpenInNewWindow(href)

    const anchorProps = {
      ...(isExternal && { rel: 'noreferrer noopener' }),
    }

    const sharedProps = {
      className,
      ref,
    }

    const hyphenated = hyphenate && typeof children === 'string' && (
      <Hyphen>{children}</Hyphen>
    )

    const content = (
      <Text variant="eyebrow" as="span" truncate={truncate}>
        {!truncate && hyphenate ? hyphenated : children}
      </Text>
    )

    if (CustomLink) {
      return <CustomLink {...sharedProps}>{content}</CustomLink>
    }

    return href ? (
      <a href={href} {...anchorProps} {...sharedProps} {...props}>
        {content}
      </a>
    ) : onClick ? (
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        {...sharedProps}
        {...props}
      >
        {content}
      </button>
    ) : (
      <span {...sharedProps} {...props}>
        {content}
      </span>
    )
  },
)
