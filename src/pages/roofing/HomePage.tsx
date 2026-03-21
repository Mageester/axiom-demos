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

      <section className="roof-response-grid" aria-label="Common Blackridge calls">
        {content.home.highlights.map((highlight, index) => (
          <Reveal
            as="article"
            className="roof-response-card"
            delay={index * 55}
            key={highlight.title}
            variant="firm"
          >
            <p className="roof-response-card__index">0{index + 1}</p>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="roof-block" variant="firm">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Services</p>
          <h2 className="roof-block__title">How the work is usually grouped on real jobs</h2>
          <p className="roof-block__description">
            Most calls fall into one of three buckets: active roof issues, replacement planning, or the exterior support work that finishes the roofline properly once the main scope is handled.
          </p>
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
                <ul className="plain-list roof-ledger-list">
                  {primaryScope.items.map((item) => (
                    <li key={item.name}>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.description}</span>
                      </div>
                      <em>{item.price}</em>
                    </li>
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
                  {scope.highlights?.length ? (
                    <ul className="plain-list roof-chip-list">
                      {scope.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
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

      <Reveal as="section" className="roof-visit-lane" variant="firm">
        <div className="roof-visit-lane__copy">
          <p className="roof-block__eyebrow">Inspection path</p>
          <h2 className="roof-block__title">What gets checked, priced, and confirmed before the crew is booked</h2>
          <p className="roof-block__description">{content.home.experience.description}</p>
        </div>

        <div className="roof-visit-lane__steps">
          {content.home.experience.points.slice(0, 3).map((point, index) => (
            <Reveal
              as="article"
              className="roof-visit-step"
              delay={index * 55}
              key={point}
              variant="firm"
            >
              <p className="roof-visit-step__index">Step 0{index + 1}</p>
              <p>{point}</p>
            </Reveal>
          ))}
        </div>

        <aside className="roof-visit-lane__support">
          <p className="roof-command-deck__brief-label">Before work is booked</p>
          <ul className="plain-list roof-command-deck__brief-list">
            {content.reservations.policies.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
          <div className="roof-command-deck__brief-callout">
            <p className="roof-command-deck__brief-title">Best fit</p>
            <p>
              Strongest for homeowners dealing with an active roof issue, aging shingles, drainage failures, or a broader exterior reset where the next step needs to be clarified first.
            </p>
          </div>
        </aside>
      </Reveal>

      <Reveal as="section" className="roof-dispatch-band" variant="firm">
        <div className="roof-dispatch-band__copy">
          <p className="roof-block__eyebrow">Inspection request</p>
          <h2 className="roof-block__title">Send the address, issue, and a few photos.</h2>
          <p className="roof-block__description">We will confirm the cleanest next step after the first review.</p>
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
