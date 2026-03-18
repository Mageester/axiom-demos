import { useId, useState, type CSSProperties } from 'react'
import type { VisualAssetContent } from '../../content/types'

interface BeforeAfterCompareProps {
  before: VisualAssetContent
  after: VisualAssetContent
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfterCompare({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className,
}: BeforeAfterCompareProps) {
  const [position, setPosition] = useState(52)
  const inputId = useId()
  const frameStyle = {
    ['--before-after-position' as const]: `${position}%`,
  } as CSSProperties

  return (
    <div className={['before-after-compare', className ?? ''].filter(Boolean).join(' ')}>
      <figure className="before-after-compare__frame" style={frameStyle}>
        <img
          alt={before.alt}
          className="before-after-compare__image before-after-compare__image--base"
          loading="lazy"
          src={before.src}
          style={before.position ? { objectPosition: before.position } : undefined}
        />
        <div className="before-after-compare__overlay">
          <img
            alt={after.alt}
            className="before-after-compare__image before-after-compare__image--overlay"
            loading="lazy"
            src={after.src}
            style={after.position ? { objectPosition: after.position } : undefined}
          />
        </div>
        <span className="before-after-compare__badge before-after-compare__badge--before">{beforeLabel}</span>
        <span className="before-after-compare__badge before-after-compare__badge--after">{afterLabel}</span>
        <div className="before-after-compare__divider">
          <span className="before-after-compare__handle" aria-hidden="true" />
        </div>
      </figure>

      <label className="before-after-compare__control" htmlFor={inputId}>
        <span>Drag to compare</span>
        <input
          id={inputId}
          max={100}
          min={0}
          onChange={(event) => setPosition(Number(event.target.value))}
          type="range"
          value={position}
        />
      </label>
    </div>
  )
}
