import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredProject = content.gallery.collections[0]
  const comparisonProjects = content.gallery.collections.slice(1, 4)
  const primaryScope = content.menu.sections[0]
  const secondaryScopes = content.menu.sections.slice(1)
  const recentProjects = content.home.extras?.recentProjects ?? []
  const materialBrands = content.home.extras?.materialBrands ?? []
  const serviceAreas = content.home.extras?.serviceAreas ?? []
  const emergencyCallout = content.home.extras?.emergencyCallout
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

      {featuredProject ? (
        <Reveal as="section" className="roof-block" variant="firm">
          <header className="roof-block__header">
            <p className="roof-block__eyebrow">Project references</p>
            <h2 className="roof-block__title">Proof from replacement, repair, and roofline support work</h2>
            <p className="roof-block__description">
              Homeowners usually decide faster once they can see the type of roof, condition issue, and finish level Blackridge is normally hired to handle.
            </p>
          </header>

          <div className="roof-reference-deck">
            <Reveal as="article" className="roof-reference-deck__feature" variant="firm">
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
            </Reveal>

            <div className="roof-reference-deck__stack">
              {comparisonProjects.map((project, index) => (
                <Reveal
                  as="article"
                  className="roof-reference-card"
                  delay={80 + index * 55}
                  key={project.title}
                  variant="firm"
                >
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
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      {recentProjects.length ? (
        <Reveal as="section" className="roof-block" variant="firm">
          <header className="roof-block__header">
            <p className="roof-block__eyebrow">Recent projects</p>
            <h2 className="roof-block__title">Recent replacement scopes homeowners can compare against their own roof</h2>
            <p className="roof-block__description">
              Real contractor sites usually win trust by showing what the finished work looks like, where it was completed, and what system was actually installed.
            </p>
          </header>

          <div className="roof-case-grid">
            {recentProjects.map((project, index) => (
              <Reveal
                as="article"
                className="roof-case-card"
                delay={index * 55}
                key={`${project.title}-${project.neighborhood}`}
                variant="firm"
              >
                <figure className="roof-case-card__media">
                  <img
                    alt={project.image.alt}
                    loading="lazy"
                    src={project.image.src}
                    style={project.image.position ? { objectPosition: project.image.position } : undefined}
                  />
                </figure>
                <div className="roof-case-card__body">
                  <p className="roof-block__eyebrow">{project.projectType}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <dl className="roof-case-card__details">
                    <div>
                      <dt>Neighbourhood</dt>
                      <dd>{project.neighborhood}</dd>
                    </div>
                    <div>
                      <dt>Materials used</dt>
                      <dd>{project.materials.join(' / ')}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      ) : null}

      {(materialBrands.length || serviceAreas.length) ? (
        <Reveal as="section" className="roof-block" variant="firm">
          <div className="roof-trust-layout">
            {materialBrands.length ? (
              <section className="roof-trust-panel">
                <header className="roof-block__header">
                  <p className="roof-block__eyebrow">Materials & brands</p>
                  <h2 className="roof-block__title">Installed with systems homeowners already recognize</h2>
                  <p className="roof-block__description">
                    We do not hide the material conversation. Brand, shingle line, and supporting components are part of how the scope gets priced and approved.
                  </p>
                </header>

                <div className="roof-brand-badges">
                  {materialBrands.map((brand, index) => (
                    <Reveal
                      as="article"
                      className="roof-brand-badge"
                      delay={index * 45}
                      key={brand.name}
                      variant="firm"
                    >
                      <div className="roof-brand-badge__mark" aria-hidden="true">
                        {brand.name.slice(0, 1)}
                      </div>
                      <div className="roof-brand-badge__body">
                        <h3>{brand.name}</h3>
                        <p>{brand.note}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            ) : null}

            {serviceAreas.length ? (
              <section className="roof-trust-panel roof-trust-panel--map">
                <header className="roof-block__header">
                  <p className="roof-block__eyebrow">Service area map</p>
                  <h2 className="roof-block__title">Primary service area for inspection and replacement work</h2>
                </header>

                <div className="roof-service-map">
                  <div className="roof-service-map__canvas" aria-hidden="true">
                    {serviceAreas.map((area) => (
                      <span className="roof-service-map__pin" key={area.name}>
                        {area.name}
                      </span>
                    ))}
                  </div>
                  <div className="roof-service-map__list">
                    {serviceAreas.map((area) => (
                      <article className="roof-service-map__item" key={area.name}>
                        <h3>{area.name}</h3>
                        <p>{area.note}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </Reveal>
      ) : null}

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
          {content.home.experience.points.map((point, index) => (
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

      {emergencyCallout ? (
        <Reveal as="section" className="roof-emergency-band" variant="firm">
          <div className="roof-emergency-band__content">
            <p className="roof-block__eyebrow">Emergency roofing callout</p>
            <h2 className="roof-block__title">{emergencyCallout.title}</h2>
            <p className="roof-block__description">{emergencyCallout.description}</p>
            <ul className="plain-list roof-emergency-band__list">
              {emergencyCallout.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="roof-emergency-band__actions">
            <ButtonAnchor size="lg" href={content.brand.phoneHref}>
              Call now
            </ButtonAnchor>
            <ButtonLink size="lg" to={routes.reservations} variant="secondary">
              Send inspection request
            </ButtonLink>
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="roof-dispatch-band" variant="firm">
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
      </Reveal>
    </>
  )
}
