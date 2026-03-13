import type { ReactNode } from 'react'
import type { VisualAssetContent } from '../../content/types'

interface RoofingPageHeaderProps {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  summaryLabel: string
  summaryItems: string[]
  media?: VisualAssetContent
  meta?: string[]
}

export function RoofingPageHeader({
  eyebrow,
  title,
  description,
  actions,
  summaryLabel,
  summaryItems,
  media,
  meta = [],
}: RoofingPageHeaderProps) {
  return (
    <section className="roofing-page-header">
      <div className="roofing-page-header__lead">
        <p className="roofing-page-header__eyebrow">{eyebrow}</p>
        <h1 className="roofing-page-header__title">{title}</h1>
        <p className="roofing-page-header__description">{description}</p>
        {actions ? <div className="roofing-page-header__actions">{actions}</div> : null}
        {meta.length ? (
          <div className="roofing-page-header__meta">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
      </div>

      <aside className="roofing-page-header__brief">
        {media ? (
          <figure className="roofing-page-header__media">
            <img
              alt={media.alt}
              loading="eager"
              src={media.src}
              style={media.position ? { objectPosition: media.position } : undefined}
            />
          </figure>
        ) : null}
        <div className="roofing-page-header__brief-body">
          <p className="roofing-page-header__summary-label">{summaryLabel}</p>
          <ul className="plain-list roofing-page-header__summary-list">
            {summaryItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  )
}
