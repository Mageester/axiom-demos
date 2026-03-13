import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredService = content.home.featuredDishes[0]
  const supportingServices = content.home.featuredDishes.slice(1)
  const featuredProject = content.gallery.collections[0]
  const supportingProjects = content.gallery.collections.slice(1, 4)
  const standards = content.about.values.slice(0, 3)
  const commonRequests = content.menu.sections.flatMap((section) => section.highlights ?? []).slice(0, 6)
  const processImages = [
    content.home.experience.images[0],
    content.home.experience.images[1] ?? content.gallery.collections[3]?.image,
  ].filter(Boolean)

  return (
    <>
      <section className="land-home-intro">
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

          <div className="land-home-intro__fact-grid">
            {content.home.highlights.map((highlight, index) => (
              <article
                className={`land-home-intro__fact-card ${index === 0 ? 'land-home-intro__fact-card--accent' : ''}`}
                key={highlight.title}
              >
                <p className="land-home-intro__fact-label">Project focus 0{index + 1}</p>
                <h2>{highlight.title}</h2>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featuredProject ? (
        <section className="land-home-section">
          <header className="land-home-section__header">
            <p className="land-home-section__eyebrow">Recent work</p>
            <h2 className="land-home-section__title">Project proof from patios, front approaches, and backyard upgrades</h2>
            <p className="land-home-section__description">
              The fastest way to understand Northline is to look at the kind of properties, materials, and finish level the company is usually hired to handle.
            </p>
          </header>

          <div className="land-portfolio-lead">
            <article className="land-portfolio-lead__feature">
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
                <div className="land-section-actions">
                  <ButtonLink to={routes.gallery}>View all projects</ButtonLink>
                  <ButtonLink to={routes.reservations} variant="secondary">
                    Request a similar quote
                  </ButtonLink>
                </div>
              </div>
            </article>

            <div className="land-portfolio-lead__stack">
              {supportingProjects.map((project) => (
                <article className="land-portfolio-lead__item" key={project.title}>
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
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="land-cred-strip" aria-label="Northline work standards">
        {standards.map((standard, index) => (
          <article className="land-cred-strip__item" key={standard.title}>
            <p className="land-cred-strip__index">0{index + 1}</p>
            <h2>{standard.title}</h2>
            <p>{standard.description}</p>
          </article>
        ))}
      </section>

      <section className="land-home-section">
        <header className="land-home-section__header">
          <p className="land-home-section__eyebrow">Services</p>
          <h2 className="land-home-section__title">Where homeowners usually start</h2>
          <p className="land-home-section__description">
            Most quote requests come in through one of these buckets: a patio or entry project, a planting refresh, or the lighting and drainage details that finish the property properly.
          </p>
        </header>

        <div className="land-service-matrix">
          {featuredService ? (
            <article className="land-service-matrix__feature">
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
            </article>
          ) : null}

          {supportingServices.map((service) => (
            <article className="land-service-matrix__card" key={service.name}>
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
            </article>
          ))}

          <article className="land-service-matrix__panel">
            <p className="land-service-matrix__panel-label">Common requests</p>
            <ul className="plain-list land-service-matrix__panel-list">
              {commonRequests.map((request) => (
                <li key={request}>{request}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="land-home-section">
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
              <article className="land-process-band__step" key={point}>
                <p className="land-process-band__step-index">Step 0{index + 1}</p>
                <p>{point}</p>
              </article>
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
      </section>

      <section className="land-home-section">
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
      </section>
    </>
  )
}
