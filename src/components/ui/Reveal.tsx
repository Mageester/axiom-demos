import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

export type RevealVariant = 'soft' | 'organic' | 'firm'
type RevealTag = keyof HTMLElementTagNameMap

interface RevealProps {
  children: ReactNode
  className?: string
  as?: RevealTag
  variant?: RevealVariant
  delay?: number
  threshold?: number
  rootMargin?: string
  id?: string
}

export function Reveal({
  children,
  className,
  as = 'div',
  variant = 'soft',
  delay = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -8% 0px',
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    if (isVisible || typeof window === 'undefined') {
      return undefined
    }

    const node = ref.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, rootMargin, threshold])

  const style = delay
    ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties)
    : undefined

  const revealClassName = ['reveal', `reveal--${variant}`, isVisible ? 'reveal--visible' : '', className ?? '']
    .filter(Boolean)
    .join(' ')

  const setNodeRef = (node: HTMLElement | null) => {
    ref.current = node
  }

  const sharedProps = {
    ref: setNodeRef,
    id,
    className: revealClassName,
    style,
  }

  switch (as) {
    case 'section':
      return <section {...sharedProps}>{children}</section>
    case 'article':
      return <article {...sharedProps}>{children}</article>
    case 'figure':
      return <figure {...sharedProps}>{children}</figure>
    default:
      return <div {...sharedProps}>{children}</div>
  }
}
