import type { ReactNode } from 'react'
import type { VisualAssetContent } from '../../content/types'
import { Reveal } from '../ui/Reveal'

interface LandscapingPageHeaderProps {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  media?: VisualAssetContent
  utilityLabel?: string
  utilityTitle?: string
  utilityItems?: string[]
  utilityMeta?: string[]
}

export function LandscapingPageHeader({
  eyebrow,
  title,
  description,
  actions,
  media,
  utilityLabel,
  utilityTitle,
  utilityItems = [],
  utilityMeta = [],
}: LandscapingPageHeaderProps) {
  return (
    <Reveal as="section" className="land-utility-hero" variant="organic">
      <div className="land-utility-hero__copy">
        <p className="land-utility-hero__eyebrow">{eyebrow}</p>
        <h1 className="land-utility-hero__title">{title}</h1>
        <p className="land-utility-hero__description">{description}</p>
        {actions ? <div className="land-section-actions">{actions}</div> : null}
      </div>

      <div className="land-utility-hero__aside">
        {media ? (
          <figure className="land-utility-hero__media">
            <img
              alt={media.alt}
              loading="eager"
              src={media.src}
              style={media.position ? { objectPosition: media.position } : undefined}
            />
          </figure>
        ) : null}

        {utilityTitle || utilityItems.length || utilityMeta.length ? (
          <div className="land-utility-hero__panel">
            {utilityLabel ? <p className="land-utility-hero__panel-label">{utilityLabel}</p> : null}
            {utilityTitle ? <h2 className="land-utility-hero__panel-title">{utilityTitle}</h2> : null}
            {utilityItems.length ? (
              <ul className="plain-list land-utility-hero__list">
                {utilityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {utilityMeta.length ? (
              <div className="land-utility-hero__meta">
                {utilityMeta.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </Reveal>
  )
}
