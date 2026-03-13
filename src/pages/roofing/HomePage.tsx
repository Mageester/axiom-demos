import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredProject = content.gallery.collections[0]
  const comparisonProjects = content.gallery.collections.slice(1, 4)
  const primaryScope = content.menu.sections[0]
  const secondaryScopes = content.menu.sections.slice(1)

  return (
    <>
      <section className="roof-command-deck">
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
      </section>

      <section className="roof-response-grid" aria-label="Common Blackridge calls">
        {content.home.highlights.map((highlight, index) => (
          <article className="roof-response-card" key={highlight.title}>
            <p className="roof-response-card__index">0{index + 1}</p>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      {featuredProject ? (
        <section className="roof-block">
          <header className="roof-block__header">
            <p className="roof-block__eyebrow">Project references</p>
            <h2 className="roof-block__title">Proof from replacement, repair, and roofline support work</h2>
            <p className="roof-block__description">
              Homeowners usually decide faster once they can see the type of roof, condition issue, and finish level Blackridge is normally hired to handle.
            </p>
          </header>

          <div className="roof-reference-deck">
            <article className="roof-reference-deck__feature">
              <div className="roof-reference-deck__content">
                <p className="roof-block__eyebrow">{featuredProject.subtitle}</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                {featuredProject.facts?.length ? (
                  <ul className="plain-list roof-chip-list">
                    {featuredProject.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="roof-command-deck__actions">
                  <ButtonLink to={routes.gallery}>View projects</ButtonLink>
                  <ButtonLink to={routes.reservations} variant="secondary">
                    Request inspection
                  </ButtonLink>
                </div>
              </div>
              <figure className="roof-reference-deck__media">
                <img
                  alt={featuredProject.image.alt}
                  loading="lazy"
                  src={featuredProject.image.src}
                  style={
                    featuredProject.image.position
                      ? { objectPosition: featuredProject.image.position }
                      : undefined
                  }
                />
              </figure>
            </article>

            <div className="roof-reference-deck__stack">
              {comparisonProjects.map((project) => (
                <article className="roof-reference-card" key={project.title}>
                  <figure className="roof-reference-card__media">
                    <img
                      alt={project.image.alt}
                      loading="lazy"
                      src={project.image.src}
                      style={project.image.position ? { objectPosition: project.image.position } : undefined}
                    />
                  </figure>
                  <div className="roof-reference-card__body">
                    <p className="roof-block__eyebrow">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Services</p>
          <h2 className="roof-block__title">How the work is usually grouped on real jobs</h2>
          <p className="roof-block__description">
            Most calls fall into one of three buckets: active roof issues, replacement planning, or the exterior support work that finishes the roofline properly once the main scope is handled.
          </p>
        </header>

        <div className="roof-scope-ledger">
          {primaryScope ? (
            <article className="roof-scope-ledger__primary">
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
            </article>
          ) : null}

          <div className="roof-scope-ledger__stack">
            {secondaryScopes.map((scope) => (
              <article className="roof-scope-card" key={scope.title}>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roof-visit-lane">
        <div className="roof-visit-lane__copy">
          <p className="roof-block__eyebrow">Inspection path</p>
          <h2 className="roof-block__title">What gets checked, priced, and confirmed before the crew is booked</h2>
          <p className="roof-block__description">{content.home.experience.description}</p>
        </div>

        <div className="roof-visit-lane__steps">
          {content.home.experience.points.map((point, index) => (
            <article className="roof-visit-step" key={point}>
              <p className="roof-visit-step__index">Step 0{index + 1}</p>
              <p>{point}</p>
            </article>
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
      </section>

      <section className="roof-dispatch-band">
        <div className="roof-dispatch-band__copy">
          <p className="roof-block__eyebrow">Inspection request</p>
          <h2 className="roof-block__title">Send the address, issue, and a few photos. We will tell you the cleanest next step.</h2>
          <p className="roof-block__description">
            Most requests move faster when the property address, the part of the roof or exterior causing concern, and current photos are included with the first message.
          </p>
        </div>
        <div className="roof-dispatch-band__actions">
          <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
          <ButtonAnchor href={content.brand.emailHref} variant="secondary">
            Email photos
          </ButtonAnchor>
        </div>
        <p className="roof-dispatch-band__meta">Serving Toronto, Scarborough, Pickering, Ajax, and Whitby</p>
      </section>
    </>
  )
}
