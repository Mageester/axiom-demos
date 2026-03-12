import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Section } from '../../components/ui/Section'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredService = content.home.featuredDishes[0]
  const serviceCards = content.home.featuredDishes.slice(1)
  const featuredProject = content.gallery.collections[0]
  const supportingProjects = content.gallery.collections.slice(1, 3)
  const mapHref = content.contact.details.find((detail) => {
    const normalizedLabel = detail.label.toLowerCase()
    return normalizedLabel.includes('service area') || normalizedLabel.includes('map')
  })?.href

  return (
    <>
      <section className="land-home-intro">
        <div className="land-home-intro__copy">
          {content.home.hero.eyebrow ? (
            <p className="land-home-intro__eyebrow">{content.home.hero.eyebrow}</p>
          ) : null}
          <h1 className="land-home-intro__title">{content.home.hero.title}</h1>
          <p className="land-home-intro__description">{content.home.hero.description}</p>
          <div className="land-home-intro__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.gallery} variant="secondary">
              View projects
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
            <article className="land-home-intro__fact-card">
              <p className="land-home-intro__fact-label">Service area</p>
              <h2>{content.brand.city}</h2>
              <p>Premium residential projects across Toronto, Etobicoke, Mississauga, and Oakville.</p>
            </article>
            <article className="land-home-intro__fact-card">
              <p className="land-home-intro__fact-label">Project focus</p>
              <h2>Outdoor living, entries, lighting, and curb appeal.</h2>
              <p>Best fit for homeowners planning a real exterior upgrade, not quick cosmetic patchwork.</p>
            </article>
            <article className="land-home-intro__fact-card land-home-intro__fact-card--accent">
              <p className="land-home-intro__fact-label">Estimate path</p>
              <h2>Scope fit first. Site visit second.</h2>
              <p>We confirm service area, priority, and timing before booking a property review.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="land-cred-strip" aria-label="Northline standards">
        {content.home.highlights.map((highlight, index) => (
          <article className="land-cred-strip__item" key={highlight.title}>
            <p className="land-cred-strip__index">0{index + 1}</p>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      {featuredProject ? (
        <Section
          description="Project framing built around how the property looks from the street, how the space works in use, and how cleanly the details hold together."
          eyebrow="Featured work"
          title="Portfolio-led presentation for premium residential landscaping"
        >
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
                  <ButtonLink to={routes.gallery}>View project gallery</ButtonLink>
                  <ButtonLink to={routes.reservations} variant="secondary">
                    Discuss similar scope
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
        </Section>
      ) : null}

      <Section
        description="Northline is built around a tighter set of services so the finished property feels cohesive rather than assembled from separate crews."
        eyebrow="Services"
        title="Where the business is strongest"
      >
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
              </div>
            </article>
          ) : null}

          {serviceCards.map((service) => (
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

          <aside className="land-service-matrix__panel">
            <p className="land-service-matrix__panel-label">Common homeowner priorities</p>
            <ul className="plain-list land-service-matrix__panel-list">
              <li>Stronger curb appeal before a full renovation or resale cycle</li>
              <li>Cleaner patio and walkway flow for everyday use and hosting</li>
              <li>Lighting, planting, and grading that make the yard feel finished</li>
            </ul>
            <div className="land-section-actions">
              <ButtonLink to={routes.menu}>Review services</ButtonLink>
              <ButtonLink to={routes.contact} variant="secondary">
                Talk through scope
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        description="A strong landscaping site has to explain how the work is planned, how the property is handled, and what the homeowner can expect before anyone books a visit."
        eyebrow="Project path"
        title="How Northline runs a project"
      >
        <div className="land-process-band">
          <article className="land-process-band__steps">
            {content.home.experience.points.map((point, index) => (
              <div className="land-process-band__step" key={point}>
                <p className="land-process-band__step-index">0{index + 1}</p>
                <p>{point}</p>
              </div>
            ))}
          </article>

          <aside className="land-process-band__standards">
            <p className="land-process-band__label">What homeowners can expect</p>
            <ul className="plain-list confidence-list">
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </aside>

          <div className="land-process-band__media">
            {content.home.experience.images.map((image) => (
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
        </div>
      </Section>

      <Section
        description="Start with a quick fit review so the first conversation is about the right scope, budget band, and next step for the property."
        eyebrow="Estimate"
        title="Request the right next step for your property"
      >
        <div className="land-estimate-callout">
          <div className="land-estimate-callout__copy">
            <h3>Send the property address, the area you want to improve, and your target timing.</h3>
            <p>
              We will confirm service-area fit, look at the type of work you are planning,
              and recommend whether the next step should be a call, a proposal discussion,
              or an on-site consultation.
            </p>
            <ul className="plain-list land-estimate-callout__list">
              <li>Address or neighbourhood</li>
              <li>Main outdoor priority</li>
              <li>Desired completion window</li>
            </ul>
          </div>

          <div className="land-estimate-callout__aside">
            <div className="land-section-actions">
              <ButtonLink to={routes.reservations}>Request estimate</ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call office
              </ButtonAnchor>
              {mapHref ? (
                <ButtonAnchor href={mapHref} variant="secondary">
                  View service area
                </ButtonAnchor>
              ) : null}
            </div>
            <p className="land-estimate-callout__meta">
              Service area: {content.brand.city}
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
