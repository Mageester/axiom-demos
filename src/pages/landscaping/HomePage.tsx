import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Section } from '../../components/ui/Section'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredService = content.home.featuredDishes[0]
  const serviceCards = content.home.featuredDishes.slice(1)
  const featuredProject = content.gallery.collections[0]
  const supportingProjects = content.gallery.collections.slice(1, 4)
  const detailProjects = content.gallery.collections.slice(3, 6)
  const mapHref = content.contact.details.find((detail) => detail.label.toLowerCase().includes('office'))?.href

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
            {content.home.hero.secondaryCta ? (
              <ButtonLink size="lg" to={routes.menu} variant="secondary">
                {content.home.hero.secondaryCta}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <aside className="land-home-hero__panel">
          <p className="land-home-hero__panel-eyebrow">Project fit</p>
          <h2 className="land-home-hero__panel-title">
            Premium residential work for homeowners planning a real exterior upgrade.
          </h2>
          <ul className="plain-list land-home-hero__signal-list">
            {content.home.hero.signals?.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <div className="land-home-hero__panel-meta">
            <span>{content.brand.city}</span>
            <span>Quote replies typically within one business day</span>
          </div>
        </aside>
      </section>

      <section className="land-proof-strip" aria-label="Northline highlights">
        {content.home.highlights.map((highlight, index) => (
          <article className="land-proof-strip__item" key={highlight.title}>
            <p className="land-proof-strip__index">0{index + 1}</p>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      <Section
        description="A focused service mix for curb appeal, outdoor living, and long-term property polish."
        eyebrow="Services"
        title="What Northline is hired to design and build"
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
                <div className="land-section-actions">
                  <ButtonLink to={routes.menu}>View services</ButtonLink>
                  <ButtonLink to={routes.reservations} variant="secondary">
                    Request estimate
                  </ButtonLink>
                </div>
              </div>
            </article>
          ) : null}

          <div className="land-service-compact-grid">
            {serviceCards.map((service) => (
              <article className="land-service-card" key={service.name}>
                <figure className="land-service-card__media">
                  <img
                    alt={service.image.alt}
                    loading="lazy"
                    src={service.image.src}
                    style={
                      service.image.position ? { objectPosition: service.image.position } : undefined
                    }
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
      </Section>

      {featuredProject ? (
        <Section
          description="Project references that show the kind of exterior work Northline is designed to deliver."
          eyebrow="Projects"
          title="A stronger read on what a Northline property upgrade looks like"
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
                      style={
                        project.image.position ? { objectPosition: project.image.position } : undefined
                      }
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

          <div className="land-project-cards">
            {detailProjects.map((project) => (
              <article className="land-project-card" key={project.title}>
                <figure className="land-project-card__media">
                  <img
                    alt={project.image.alt}
                    loading="lazy"
                    src={project.image.src}
                    style={
                      project.image.position ? { objectPosition: project.image.position } : undefined
                    }
                  />
                </figure>
                <div className="land-project-card__body">
                  <p className="land-project-card__eyebrow">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.facts?.length ? (
                    <ul className="plain-list land-inline-facts land-inline-facts--compact">
                      {project.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      <Section
        description={content.home.experience.description}
        eyebrow="Delivery"
        title={content.home.experience.title}
      >
        <div className="land-standard-layout">
          <div className="experience-panel land-standard-panel">
            <p className="land-standard-panel__eyebrow">Project path</p>
            <ul className="check-list">
              {content.home.experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="experience-panel__actions">
              <ButtonLink to={routes.reservations}>Start estimate request</ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call office
              </ButtonAnchor>
            </div>
          </div>

          <div className="land-standard-panel land-standard-panel--muted">
            <p className="land-standard-panel__eyebrow">What homeowners can expect</p>
            <ul className="plain-list confidence-list">
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>

          <aside className="land-process-media">
            {content.home.experience.images.map((image) => (
              <figure className="land-process-media__item" key={image.src}>
                <img
                  alt={image.alt}
                  loading="lazy"
                  src={image.src}
                  style={image.position ? { objectPosition: image.position } : undefined}
                />
              </figure>
            ))}
          </aside>
        </div>
      </Section>

      <Section
        description="We are best fit for premium residential properties in our service area with a defined scope, realistic budget, and clear timing intent."
        eyebrow="Estimate"
        title="Plan the next step before you commit to a full site visit"
      >
        <div className="land-quote-band">
          <div>
            <p>
              Share the property address, the part of the yard you want to improve,
              and when you would ideally like the work completed. We will confirm
              fit and recommend the right next step first.
            </p>
          </div>
          <div className="land-section-actions">
            <ButtonLink to={routes.reservations}>Request estimate</ButtonLink>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call {content.brand.phone}
            </ButtonAnchor>
          </div>
          <p className="land-quote-band__meta">
            Service area: {content.brand.city}
            {mapHref ? ' | Map available from contact page' : ''}
          </p>
        </div>
      </Section>
    </>
  )
}
