import type { ReactNode } from 'react'
import type { VisualAssetContent } from '../../content/types'

interface CardProps {
  title: string
  description?: string
  meta?: string
  children?: ReactNode
  image?: VisualAssetContent
}

export function Card({ title, description, meta, children, image }: CardProps) {
  return (
    <article className={`card ${image ? 'card--media' : ''}`}>
      {image ? (
        <figure className="card__media">
          <img
            alt={image.alt}
            loading="lazy"
            src={image.src}
            style={image.position ? { objectPosition: image.position } : undefined}
          />
        </figure>
      ) : null}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description ? <p className="card__description">{description}</p> : null}
        {meta ? <p className="card__meta">{meta}</p> : null}
        {children ? <div className="card__body">{children}</div> : null}
      </div>
    </article>
  )
}
