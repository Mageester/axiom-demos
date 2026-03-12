import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Section } from '../../components/ui/Section'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredService = content.home.featuredDishes[0]
  const supportingServices = content.home.featuredDishes.slice(1)
  const featuredProject = content.gallery.collections[0]
  const supportingProjects = content.gallery.collections.slice(1, 4)
  const fitImages = [
    content.home.experience.images[0],
    content.home.experience.images[1] ?? content.gallery.collections[3]?.image,
  ].filter(Boolean)
  const mapHref = content.contact.details.find((detail) => {
    const normalizedLabel = detail.label.toLowerCase()
    return normalizedLabel.includes('service area') || normalizedLabel.includes('map') || normalizedLabel.includes('office')
  })?.href

  return (
    <>
      <section className="land-home-hero">
        {content.home.hero.image ? (
          <figure className="land-home-hero__media">
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

        <div className="land-home-hero__veil" />

        <div className="land-home-hero__content">
          {content.home.hero.eyebrow ? (
            <p className="land-home-hero__eyebrow">{content.home.hero.eyebrow}</p>
          ) : null}
          <h1 className="land-home-hero__title">{content.home.hero.title}</h1>
          <p className="land-home-hero__description">{content.home.hero.description}</p>
          <div className="land-home-hero__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.gallery} variant="secondary">
              View projects
            </ButtonLink>
          </div>
        </div>

        <aside className="land-home-hero__panel">
          <p className="land-home-hero__panel-eyebrow">What Northline handles</p>
          <h2 className="land-home-hero__panel-title">
            Front yards, backyards, patios, planting, and outdoor living upgrades for homes across the west end.
          </h2>
          <ul className="plain-list land-home-hero__signal-list">
            {content.home.hero.signals?.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <div className="land-home-hero__panel-meta">
            <p>Service area: {content.brand.city}</p>
            <p>Quotes start with the address, scope, and a few current photos.</p>
          </div>
        </aside>
      </section>

      <section className="land-proof-strip" aria-label="Northline landscaping standards">
        {content.home.highlights.map((highlight, index) => (
          <article className="land-proof-strip__item" key={highlight.title}>
            <p className="land-proof-strip__index">0{index + 1}</p>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      <Section
        description="Northline handles the residential landscaping work people usually call about when the property needs a more finished look and a better layout."
        eyebrow="Services"
        title="Landscaping work for the front yard, backyard, and around the house"
      >
        <div className="land-service-showcase">
          {featuredService ? (
            <article className="land-service-focus">
              <figure className="land-service-focus__media">
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
              <div className="land-service-focus__body">
                <p className="land-service-focus__eyebrow">{featuredService.course}</p>
                <h3 className="land-service-focus__title">{featuredService.name}</h3>
                <p className="land-service-focus__description">{featuredService.description}</p>
              </div>
            </article>
          ) : null}

          <div className="land-service-compact-grid">
            {supportingServices.map((service) => (
              <article className="land-service-card" key={service.name}>
                <figure className="land-service-card__media">
                  <img
                    alt={service.image.alt}
                    loading="lazy"
                    src={service.image.src}
                    style={service.image.position ? { objectPosition: service.image.position } : undefined}
                  />
                </figure>
                <div className="land-service-card__body">
                  <p className="land-service-card__eyebrow">{service.course}</p>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="land-section-actions">
          <ButtonLink to={routes.menu}>Review all services</ButtonLink>
          <ButtonLink to={routes.reservations} variant="secondary">
            Request a quote
          </ButtonLink>
        </div>
      </Section>

      {featuredProject ? (
        <Section
          description="A sample of the type of front-yard, backyard, and outdoor-living work Northline is built to take on."
          eyebrow="Recent work"
          title="Projects that clean up the whole property"
        >
          <div className="land-project-band">
            <article className="land-project-band__feature">
              <figure className="land-project-band__feature-media">
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
              <div className="land-project-band__feature-body">
                <p className="land-project-band__eyebrow">{featuredProject.subtitle}</p>
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
                    Request a similar quote
                  </ButtonLink>
                </div>
              </div>
            </article>

            <div className="land-project-band__stack">
              {supportingProjects.map((project) => (
                <article className="land-project-band__item" key={project.title}>
                  <figure>
                    <img
                      alt={project.image.alt}
                      loading="lazy"
                      src={project.image.src}
                      style={project.image.position ? { objectPosition: project.image.position } : undefined}
                    />
                  </figure>
                  <div>
                    <p className="land-project-band__eyebrow">{project.subtitle}</p>
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
        description="Most Northline inquiries come from homeowners planning a real exterior upgrade, not a quick one-day patch."
        eyebrow="Typical projects"
        title="The kind of properties we usually get called for"
      >
        <div className="land-transformation">
          <div className="land-transformation__layout">
            <div className="land-transformation__visuals">
              {fitImages.map((image) => (
                <figure className="land-transformation__item" key={image.src}>
                  <img
                    alt={image.alt}
                    loading="lazy"
                    src={image.src}
                    style={image.position ? { objectPosition: image.position } : undefined}
                  />
                  <span className="land-transformation__caption">{image.alt}</span>
                </figure>
              ))}
            </div>

            <div className="land-transformation__body">
              <p>
                Northline is usually brought in when the front of the house needs a better first impression,
                the backyard needs to be easier to use, or the whole property still feels unfinished.
              </p>
              <ul className="plain-list confidence-list">
                <li>Front-yard upgrades that improve arrival, curb appeal, and day-to-day upkeep</li>
                <li>Backyard patios and walkways that make the space easier to use and host in</li>
                <li>Planting, lighting, and grading work that needs to hold together as one project</li>
              </ul>
              <div className="land-section-actions">
                <ButtonLink to={routes.about}>About Northline</ButtonLink>
                {mapHref ? (
                  <ButtonAnchor href={mapHref} variant="secondary">
                    View service area
                  </ButtonAnchor>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        description="Start with the property address, the part of the yard you want to improve, and any timing constraints."
        eyebrow="Request a quote"
        title="Tell us what you want to change"
      >
        <div className="land-quote-band">
          <div>
            <p>
              We review service area, scope, and timing first, then let you know whether the next step should be a call,
              a quote discussion, or an on-site visit.
            </p>
          </div>
          <div className="land-section-actions">
            <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call office
            </ButtonAnchor>
          </div>
          <p className="land-quote-band__meta">Serving Toronto, Etobicoke, Mississauga, and Oakville</p>
        </div>
      </Section>
    </>
  )
}
