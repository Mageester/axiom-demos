import type { ReactNode } from 'react'
import { Reveal, type RevealVariant } from './Reveal'

interface SectionProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children: ReactNode
  revealVariant?: RevealVariant
  revealDelay?: number
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
  revealVariant = 'soft',
  revealDelay = 0,
}: SectionProps) {
  return (
    <Reveal
      as="section"
      className={['section', className ?? ''].join(' ').trim()}
      delay={revealDelay}
      id={id}
      variant={revealVariant}
    >
      <header className="section__header">
        {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
        <h2 className="section__title">{title}</h2>
        {description ? <p className="section__description">{description}</p> : null}
      </header>
      <div className="section__content">{children}</div>
    </Reveal>
  )
}
