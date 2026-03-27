import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const primaryScope = content.menu.sections[0]
  const secondaryScopes = content.menu.sections.slice(1)
  const beforeAfter = content.home.extras?.beforeAfter

  return (
    <>
      <Reveal as="section" className="roof-command-deck" variant="firm">
        <div className="roof-command-deck__lead">
          <p className="roof-command-deck__eyebrow">{content.home.hero.eyebrow}</p>
          <h1 className="roof-command-deck__title">{content.home.hero.title}</h1>
          <p className="roof-command-deck__description">{content.home.hero.description}</p>
          <div className="roof-command-deck__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonAnchor size="lg" href={content.brand.phoneHref} variant="secondary">
              Call office
            </ButtonAnchor>
          </div>
          <div className="roof-command-deck__meta">
            <span>{content.brand.city}</span>
            <span>Inspection replies usually within one business day</span>
          </div>
        </div>

        {content.home.hero.image ? (
          <figure className="roof-command-deck__media">
            <img
              alt={content.home.hero.image.alt}
              loading="eager"
              src={content.home.hero.image.src}
              style={
                content.home.hero.image.position
                  ? { objectPosition: content.home.hero.image.position }
                  : undefined
              }
            />
          </figure>
        ) : null}

        <aside className="roof-command-deck__brief">
          <p className="roof-command-deck__brief-label">What the first visit is for</p>
          <ul className="plain-list roof-command-deck__brief-list">
            {content.home.hero.signals?.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <div className="roof-command-deck__brief-callout">
            <p className="roof-command-deck__brief-title">Urgent leak or recent storm damage</p>
            <p>Call first so the issue can be triaged before a formal inspection slot is booked.</p>
            <a href={content.brand.phoneHref}>{content.brand.phone}</a>
          </div>
        </aside>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Services</p>
          <h2 className="roof-block__title">Roof issues, replacements, and roof-edge work.</h2>
          <p className="roof-block__description">Most calls fall into repair, replacement, or roof-edge support.</p>
        </header>

        <div className="roof-scope-ledger">
          {primaryScope ? (
            <Reveal as="article" className="roof-scope-ledger__primary" variant="firm">
              {primaryScope.image ? (
                <figure className="roof-scope-ledger__primary-media">
                  <img
                    alt={primaryScope.image.alt}
                    loading="lazy"
                    src={primaryScope.image.src}
                    style={
                      primaryScope.image.position
                        ? { objectPosition: primaryScope.image.position }
                        : undefined
                    }
                  />
                </figure>
              ) : null}
              <div className="roof-scope-ledger__primary-body">
                <p className="roof-block__eyebrow">{primaryScope.note}</p>
                <h3>{primaryScope.title}</h3>
                <p>{primaryScope.items[0]?.description}</p>
                <ul className="plain-list roof-chip-list">
                  {primaryScope.highlights?.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}

          <div className="roof-scope-ledger__stack">
            {secondaryScopes.map((scope, index) => (
              <Reveal
                as="article"
                className="roof-scope-card"
                delay={index * 55}
                key={scope.title}
                variant="firm"
              >
                {scope.image ? (
                  <figure className="roof-scope-card__media">
                    <img
                      alt={scope.image.alt}
                      loading="lazy"
                      src={scope.image.src}
                      style={scope.image.position ? { objectPosition: scope.image.position } : undefined}
                    />
                  </figure>
                ) : null}
                <div className="roof-scope-card__body">
                  <p className="roof-block__eyebrow">{scope.note}</p>
                  <h3>{scope.title}</h3>
                  <p>{scope.items[0]?.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {beforeAfter ? (
        <Reveal as="section" className="roof-block" variant="firm">
          <header className="roof-block__header">
            <p className="roof-block__eyebrow">Before / after comparison</p>
            <h2 className="roof-block__title">{beforeAfter.title}</h2>
            <p className="roof-block__description">{beforeAfter.summary}</p>
          </header>

          <article className="roof-before-after">
            <figure className="roof-before-after__panel">
              <span className="roof-before-after__label">Before</span>
              <img
                alt={beforeAfter.before.alt}
                loading="lazy"
                src={beforeAfter.before.src}
                style={beforeAfter.before.position ? { objectPosition: beforeAfter.before.position } : undefined}
              />
            </figure>
            <figure className="roof-before-after__panel">
              <span className="roof-before-after__label roof-before-after__label--after">After</span>
              <img
                alt={beforeAfter.after.alt}
                loading="lazy"
                src={beforeAfter.after.src}
                style={beforeAfter.after.position ? { objectPosition: beforeAfter.after.position } : undefined}
              />
            </figure>
            <div className="roof-before-after__summary">
              <p className="roof-block__eyebrow">What changed</p>
              <ul className="plain-list roof-chip-list">
                {beforeAfter.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="roof-command-deck__actions">
                <ButtonLink to={routes.reservations}>Request an inspection</ButtonLink>
                <ButtonLink to={routes.gallery} variant="secondary">
                  View more projects
                </ButtonLink>
              </div>
            </div>
          </article>
        </Reveal>
      ) : null}

      <Reveal as="section" className="roof-dispatch-band" variant="firm">
        <div className="roof-dispatch-band__copy">
          <p className="roof-block__eyebrow">Inspection request</p>
          <h2 className="roof-block__title">Send the address, issue, and photos.</h2>
          <p className="roof-block__description">We will confirm the next step after the first review.</p>
        </div>
        <div className="roof-dispatch-band__actions">
          <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
          <ButtonAnchor href={content.brand.emailHref} variant="secondary">
            Email photos
          </ButtonAnchor>
        </div>
        <p className="roof-dispatch-band__meta">Serving Toronto, Scarborough, Pickering, Ajax, and Whitby</p>
      </Reveal>
    </>
  )
}
