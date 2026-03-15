import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredService = content.home.featuredDishes[0]
  const supportingServices = content.home.featuredDishes.slice(1)
  const featuredProject = content.gallery.collections[0]
  const supportingProjects = content.gallery.collections.slice(1, 4)
  const standards = content.about.values.slice(0, 3)
  const commonRequests = content.menu.sections.flatMap((section) => section.highlights ?? []).slice(0, 6)
  const heroSnapshots = [featuredService, supportingServices[0]].filter(Boolean)
  const processImages = [
    content.home.experience.images[0],
    content.home.experience.images[1] ?? content.gallery.collections[3]?.image,
  ].filter(Boolean)

  return (
    <>
      <Reveal as="section" className="land-home-intro" variant="organic">
        <div className="land-home-intro__copy">
          <p className="land-home-intro__eyebrow">{content.home.hero.eyebrow}</p>
          <h1 className="land-home-intro__title">{content.home.hero.title}</h1>
          <p className="land-home-intro__description">{content.home.hero.description}</p>
          <div className="land-home-intro__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.gallery} variant="secondary">
              {content.home.hero.secondaryCta}
            </ButtonLink>
          </div>
          <ul className="plain-list land-home-intro__signals">
            {content.home.hero.signals?.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <div className="land-home-intro__visuals">
          {content.home.hero.image ? (
            <figure className="land-home-intro__media">
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

          <div className="land-home-intro__subgrid">
            {heroSnapshots.map((service, index) => (
              <Reveal
                as="article"
                className={`land-home-intro__snapshot ${index === 0 ? 'land-home-intro__snapshot--wide' : ''}`}
                delay={120 + index * 70}
                key={service.name}
                variant="organic"
              >
                <figure className="land-home-intro__snapshot-media">
                  <img
                    alt={service.image.alt}
                    loading="lazy"
                    src={service.image.src}
                    style={service.image.position ? { objectPosition: service.image.position } : undefined}
                  />
                </figure>
                <div className="land-home-intro__snapshot-body">
                  <p className="land-home-intro__fact-label">{service.course}</p>
                  <h2>{service.name}</h2>
                </div>
              </Reveal>
            ))}

            <article className="land-home-intro__overview">
              <p className="land-home-intro__fact-label">Most requested work</p>
              <ul className="plain-list land-home-intro__overview-list">
                {content.home.highlights.map((highlight) => (
                  <li key={highlight.title}>
                    <strong>{highlight.title}</strong>
                    <span>{highlight.description}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="land-home-section" variant="organic">
        <header className="land-home-section__header">
          <p className="land-home-section__eyebrow">Typical first asks</p>
          <h2 className="land-home-section__title">What homeowners usually want to fix first</h2>
          <p className="land-home-section__description">
            The work usually starts with a patio or front approach, then extends into planting, drainage, lighting, and the smaller details that make the property feel settled.
          </p>
        </header>

        <div className="land-home-focus-grid">
          {content.home.highlights.map((highlight, index) => (
            <Reveal
              as="article"
              className="land-home-focus-card"
              delay={index * 80}
              key={highlight.title}
              variant="organic"
            >
              <p className="land-home-focus-card__index">0{index + 1}</p>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {featuredProject ? (
        <Reveal as="section" className="land-home-section" variant="organic">
          <header className="land-home-section__header">
            <p className="land-home-section__eyebrow">Recent work</p>
            <h2 className="land-home-section__title">Project proof from patio builds, front entries, and outdoor-living upgrades</h2>
            <p className="land-home-section__description">
              The fastest way to understand Northline is to look at the kind of properties, materials, and finish level the company is usually hired to handle.
            </p>
          </header>

          <div className="land-portfolio-lead">
            <Reveal as="article" className="land-portfolio-lead__feature" variant="organic">
              <figure className="land-portfolio-lead__media">
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
              <div className="land-portfolio-lead__body">
                <p className="land-portfolio-lead__eyebrow">{featuredProject.subtitle}</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                {featuredProject.facts?.length ? (
                  <ul className="plain-list land-inline-facts">
                    {featuredProject.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="land-section-actions land-section-actions--proof">
                  <ButtonLink size="md" to={routes.gallery}>
                    See all projects
                  </ButtonLink>
                  <ButtonLink size="md" to={routes.reservations} variant="secondary">
                    Request pricing
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <div className="land-portfolio-lead__stack">
              {supportingProjects.map((project, index) => (
                <Reveal
                  as="article"
                  className="land-portfolio-lead__item"
                  delay={110 + index * 60}
                  key={project.title}
                  variant="organic"
                >
                  <figure>
                    <img
                      alt={project.image.alt}
                      loading="lazy"
                      src={project.image.src}
                      style={project.image.position ? { objectPosition: project.image.position } : undefined}
                    />
                  </figure>
                  <div>
                    <p className="land-portfolio-lead__eyebrow">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      <section className="land-cred-strip" aria-label="Northline work standards">
        {standards.map((standard, index) => (
          <Reveal
            as="article"
            className="land-cred-strip__item"
            delay={index * 70}
            key={standard.title}
            variant="organic"
          >
            <p className="land-cred-strip__index">0{index + 1}</p>
            <h2>{standard.title}</h2>
            <p>{standard.description}</p>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="land-home-section" variant="organic">
        <header className="land-home-section__header">
          <p className="land-home-section__eyebrow">Services</p>
          <h2 className="land-home-section__title">Outdoor living, front entries, and finish work that gets the property read right</h2>
          <p className="land-home-section__description">
            Most quote requests come in through one of these buckets: a patio or entry project, a planting refresh, or the lighting and drainage details that finish the property properly.
          </p>
        </header>

        <div className="land-service-matrix">
          {featuredService ? (
            <Reveal as="article" className="land-service-matrix__feature" variant="organic">
              <figure className="land-service-matrix__feature-media">
                <img
                  alt={featuredService.image.alt}
                  loading="lazy"
                  src={featuredService.image.src}
                  style={
                    featuredService.image.position
                      ? { objectPosition: featuredService.image.position }
                      : undefined
                  }
                />
              </figure>
              <div className="land-service-matrix__feature-body">
                <p className="land-service-matrix__eyebrow">{featuredService.course}</p>
                <h3>{featuredService.name}</h3>
                <p>{featuredService.description}</p>
                <div className="land-section-actions">
                  <ButtonLink to={routes.menu}>Review services</ButtonLink>
                  <ButtonLink to={routes.reservations} variant="secondary">
                    Request a quote
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          ) : null}

          {supportingServices.map((service, index) => (
            <Reveal
              as="article"
              className="land-service-matrix__card"
              delay={90 + index * 60}
              key={service.name}
              variant="organic"
            >
              <figure className="land-service-matrix__card-media">
                <img
                  alt={service.image.alt}
                  loading="lazy"
                  src={service.image.src}
                  style={service.image.position ? { objectPosition: service.image.position } : undefined}
                />
              </figure>
              <div className="land-service-matrix__card-body">
                <p className="land-service-matrix__eyebrow">{service.course}</p>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </Reveal>
          ))}

          <Reveal as="article" className="land-service-matrix__panel" delay={220} variant="organic">
            <p className="land-service-matrix__panel-label">Common requests</p>
            <ul className="plain-list land-service-matrix__panel-list">
              {commonRequests.map((request) => (
                <li key={request}>{request}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="land-home-section" variant="organic">
        <header className="land-home-section__header">
          <p className="land-home-section__eyebrow">Quote process</p>
          <h2 className="land-home-section__title">What we need before we price the job</h2>
          <p className="land-home-section__description">
            Northline is easiest to work with when the address, current photos, and the main priority are clear from the start.
          </p>
        </header>

        <div className="land-process-band">
          <div className="land-process-band__steps">
            {content.home.experience.points.map((point, index) => (
              <Reveal
                as="article"
                className="land-process-band__step"
                delay={index * 70}
                key={point}
                variant="organic"
              >
                <p className="land-process-band__step-index">Step 0{index + 1}</p>
                <p>{point}</p>
              </Reveal>
            ))}
          </div>

          <div className="land-process-band__media">
            {processImages.map((image) => (
              <figure className="land-process-band__media-item" key={image.src}>
                <img
                  alt={image.alt}
                  loading="lazy"
                  src={image.src}
                  style={image.position ? { objectPosition: image.position } : undefined}
                />
              </figure>
            ))}
          </div>

          <div className="land-process-band__standards">
            <p className="land-process-band__label">Before a site visit</p>
            <h3>What gets confirmed first</h3>
            <ul className="plain-list">
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="land-home-section" variant="organic">
        <div className="land-estimate-callout">
          <div className="land-estimate-callout__copy">
            <p className="land-process-band__label">Request a quote</p>
            <h3>Send the property details and we will tell you the right next step</h3>
            <p>
              The quickest starts come from sending the address, the part of the yard you want improved, and a few current photos. We review the fit before we book time on site.
            </p>
            <ul className="plain-list land-estimate-callout__list">
              {content.contact.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="land-estimate-callout__aside">
            <div className="land-section-actions">
              <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call office
              </ButtonAnchor>
            </div>
            <p className="land-estimate-callout__meta">Serving Toronto, Etobicoke, Mississauga, and Oakville</p>
          </div>
        </div>
      </Reveal>
    </>
  )
}
