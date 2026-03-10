import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'quiet'
type ButtonSize = 'md' | 'lg'

interface SharedButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
}

interface ButtonLinkProps extends SharedButtonProps {
  to: string
  onClick?: LinkProps['onClick']
}

interface ButtonAnchorProps
  extends SharedButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> {
  href: string
}

interface ButtonProps
  extends SharedButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {}

function buildButtonClass({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
}: Omit<SharedButtonProps, 'children'>): string {
  return [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      className={buildButtonClass({ variant, size, fullWidth, className })}
      onClick={onClick}
      to={to}
    >
      {children}
    </Link>
  )
}

export function ButtonAnchor({
  href,
  children,
  variant = 'secondary',
  size = 'md',
  fullWidth = false,
  className,
  target,
  rel,
  ...anchorProps
}: ButtonAnchorProps) {
  return (
    <a
      className={buildButtonClass({ variant, size, fullWidth, className })}
      href={href}
      rel={rel}
      target={target}
      {...anchorProps}
    >
      {children}
    </a>
  )
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  type = 'button',
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={buildButtonClass({ variant, size, fullWidth, className })}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
