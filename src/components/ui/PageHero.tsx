import type { ReactNode } from 'react'
import type { VisualAssetContent } from '../../content/types'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
  actions?: ReactNode
  media?: VisualAssetContent
  signals?: string[]
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  media,
  signals,
}: PageHeroProps) {
  return (
    <section className={`page-hero ${media ? 'page-hero--media' : ''}`}>
      <div className="page-hero__copy">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__description">{description}</p>
        {actions ? <div className="page-hero__actions">{actions}</div> : null}
        {signals?.length ? (
          <ul className="plain-list page-hero__signals" role="list">
            {signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        ) : null}
      </div>
      {media ? (
        <figure className="page-hero__media">
          <img
            alt={media.alt}
            loading="eager"
            src={media.src}
            style={media.position ? { objectPosition: media.position } : undefined}
          />
        </figure>
      ) : null}
    </section>
  )
}
