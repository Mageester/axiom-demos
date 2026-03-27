import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { landscapingDemoContent } from '../../content/landscapingDemoContent'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function ServicesPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const { guidance, hero, scopes } = landscapingDemoContent.services

  return (
    <>
      <Reveal as="section" className="land-route-hero" variant="organic">
        <div className="land-route-hero__copy">
          <p className="land-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <ul className="plain-list land-route-hero__rail">
            {hero.rail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="land-block__actions">
            <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
            <ButtonLink to={routes.gallery} variant="secondary">
              View projects
            </ButtonLink>
          </div>
        </div>

        <figure className="land-route-hero__media">
          <img
            alt={hero.image.alt}
            loading="eager"
            src={hero.image.src}
            style={hero.image.position ? { objectPosition: hero.image.position } : undefined}
          />
        </figure>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Main scope lanes</p>
          <h2>Each scope is defined by the kind of property shift the homeowner wants.</h2>
        </div>

        <div className="land-scope-stack">
          {scopes.map((scope, index) => (
            <article
              className={`land-scope-card ${index % 2 === 1 ? 'land-scope-card--reverse' : ''}`}
              key={scope.title}
            >
              <figure className="land-scope-card__media">
                <img
                  alt={scope.image.alt}
                  loading="lazy"
                  src={scope.image.src}
                  style={scope.image.position ? { objectPosition: scope.image.position } : undefined}
                />
              </figure>
              <div className="land-scope-card__body">
                <p className="land-scope-card__label">{scope.label}</p>
                <h3>{scope.title}</h3>
                <p>{scope.description}</p>
                <div className="land-scope-card__lists">
                  <div>
                    <p className="land-scope-card__list-label">Usually includes</p>
                    <ul className="plain-list">
                      {scope.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="land-scope-card__list-label">Northline focus</p>
                    <ul className="plain-list">
                      {scope.inclusions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="land-guidance-band" variant="organic">
        <div>
          <p className="land-guidance-band__eyebrow">Fit guidance</p>
          <h2>Northline is strongest when the finished property matters more than a fast patch.</h2>
        </div>
        <ul className="plain-list land-guidance-band__list">
          {guidance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="land-guidance-band__actions">
          <ButtonLink to={routes.reservations}>Start quote review</ButtonLink>
          <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
            Call quote desk
          </ButtonAnchor>
        </div>
      </Reveal>
    </>
  )
}
