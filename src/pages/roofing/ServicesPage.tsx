import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { roofingDemoContent } from '../../content/roofingDemoContent'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function ServicesPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const { decisionGuide, hero, lanes } = roofingDemoContent.services

  return (
    <>
      <Reveal as="section" className="roof-route-hero" variant="firm">
        <div className="roof-route-hero__copy">
          <p className="roof-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="roof-command-deck__actions">
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call office
            </ButtonAnchor>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">Service lanes</p>
          <h2 className="roof-block__title">The page is organized by problem type so homeowners can sort themselves fast.</h2>
        </div>

        <div className="roof-lane-stack">
          {lanes.map((lane) => (
            <article className="roof-lane-card" key={lane.title}>
              {lane.image ? (
                <figure className="roof-lane-card__media">
                  <img
                    alt={lane.image.alt}
                    loading="lazy"
                    src={lane.image.src}
                    style={lane.image.position ? { objectPosition: lane.image.position } : undefined}
                  />
                </figure>
              ) : null}
              <div className="roof-lane-card__body">
                <p className="roof-lane-card__label">{lane.label}</p>
                <h3>{lane.title}</h3>
                <p>{lane.description}</p>
                <ul className="plain-list roof-lane-card__list">
                  {lane.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="roof-decision-band" variant="firm">
        <div>
          <p className="roof-decision-band__eyebrow">Decision guide</p>
          <h2>Repair, replace, or support the roofline based on the actual condition.</h2>
        </div>
        <ul className="plain-list roof-decision-band__list">
          {decisionGuide.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </>
  )
}
