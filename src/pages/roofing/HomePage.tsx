import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { roofingDemoContent } from '../../content/roofingDemoContent'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const { caseFile, ctaBand, hero, responseDeck, standards } = roofingDemoContent.home

  return (
    <>
      <Reveal as="section" className="roof-command-deck" variant="firm">
        <div className="roof-command-deck__lead">
          <p className="roof-command-deck__eyebrow">{hero.eyebrow}</p>
          <h1 className="roof-command-deck__title">{hero.title}</h1>
          <p className="roof-command-deck__description">{hero.description}</p>
          <div className="roof-command-deck__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {hero.primaryCta}
            </ButtonLink>
            <ButtonAnchor size="lg" href={content.brand.phoneHref} variant="secondary">
              {hero.secondaryCta}
            </ButtonAnchor>
          </div>
          <ul className="plain-list roof-command-deck__signals">
            {hero.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <figure className="roof-command-deck__media">
          <img
            alt={hero.image.alt}
            loading="eager"
            src={hero.image.src}
            style={hero.image.position ? { objectPosition: hero.image.position } : undefined}
          />
        </figure>

        <div className="roof-command-deck__status">
          <p className="roof-command-deck__status-label">Dispatch status</p>
          <ul className="plain-list">
            {hero.statusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="roof-command-deck__status-actions">
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call office
            </ButtonAnchor>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block roof-block--services" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">Service lanes</p>
          <h2 className="roof-block__title">Sort the issue first. Then decide the scope.</h2>
          <p className="roof-block__description">
            Blackridge is strongest when the homeowner needs the problem clarified quickly and the next step written clearly.
          </p>
        </div>

        <div className="roof-scope-ledger">
          {responseDeck.map((card) => (
            <article className="roof-scope-card" key={card.title}>
              <p className="roof-scope-card__label">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="plain-list roof-scope-card__list">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">Operating standards</p>
          <h2 className="roof-block__title">Operational trust beats decorative marketing.</h2>
        </div>

        <div className="roof-standard-grid">
          {standards.map((item) => (
            <article className="roof-standard-grid__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block roof-block--case" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">{caseFile.label}</p>
          <h2 className="roof-block__title">{caseFile.title}</h2>
          <p className="roof-block__description">{caseFile.description}</p>
        </div>

        <article className="roof-case-file">
          <figure className="roof-case-file__media">
            <img
              alt={caseFile.image.alt}
              loading="lazy"
              src={caseFile.image.src}
              style={caseFile.image.position ? { objectPosition: caseFile.image.position } : undefined}
            />
          </figure>
          <div className="roof-case-file__body">
            <p className="roof-case-file__label">What closed the confidence gap</p>
            <ul className="plain-list roof-case-file__list">
              {caseFile.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <div className="roof-command-deck__actions">
              <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
              <ButtonLink to={routes.gallery} variant="secondary">
                View more references
              </ButtonLink>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal as="section" className="roof-dispatch-band" variant="firm">
        <div>
          <p className="roof-dispatch-band__eyebrow">Inspection request</p>
          <h2>{ctaBand.title}</h2>
          <p>{ctaBand.description}</p>
        </div>
        <div className="roof-dispatch-band__actions">
          <ButtonLink size="lg" to={routes.reservations}>
            Request inspection
          </ButtonLink>
          <ButtonAnchor size="lg" href={content.brand.emailHref} variant="secondary">
            Email photos
          </ButtonAnchor>
        </div>
      </Reveal>
    </>
  )
}
