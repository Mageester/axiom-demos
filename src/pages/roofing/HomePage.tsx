import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Section } from '../../components/ui/Section'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredService = content.home.featuredDishes[0]
  const secondaryServices = content.home.featuredDishes.slice(1)
  const featuredProject = content.gallery.collections[0]
  const supportingProjects = content.gallery.collections.slice(1, 4)

  return (
    <>
      <section className="roof-home-hero">
        {content.home.hero.image ? (
          <figure className="roof-home-hero__media">
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
        <div className="roof-home-hero__veil" />

        <div className="roof-home-hero__content">
          {content.home.hero.eyebrow ? (
            <p className="roof-home-hero__eyebrow">{content.home.hero.eyebrow}</p>
          ) : null}
          <h1 className="roof-home-hero__title">{content.home.hero.title}</h1>
          <p className="roof-home-hero__description">{content.home.hero.description}</p>
          <div className="roof-home-hero__actions">
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

        <aside className="roof-home-hero__panel">
          <p className="roof-home-hero__panel-eyebrow">What the first visit covers</p>
          <ul className="plain-list roof-home-hero__signal-list">
            {content.home.hero.signals?.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <div className="roof-home-hero__panel-meta">
            <span>{content.brand.city}</span>
            <span>Inspection replies typically within one business day</span>
          </div>
        </aside>
      </section>

      <section className="roof-proof-strip" aria-label="Blackridge operating standards">
        {content.home.highlights.map((highlight, index) => (
          <article className="roof-proof-strip__item" key={highlight.title}>
            <p className="roof-proof-strip__index">0{index + 1}</p>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>

      <Section
        description="Built for homeowners who need a serious exterior contractor, not a vague quote and a rushed install crew."
        eyebrow="Services"
        title="Core Blackridge scopes"
      >
        <div className="roof-service-band">
          {featuredService ? (
            <article className="roof-service-band__feature">
              <figure className="roof-service-band__media">
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
              <div className="roof-service-band__body">
                <p className="roof-section-eyebrow">{featuredService.course}</p>
                <h3>{featuredService.name}</h3>
                <p>{featuredService.description}</p>
                <div className="roof-section-actions">
                  <ButtonLink to={routes.menu}>View services</ButtonLink>
                  <ButtonLink to={routes.reservations} variant="secondary">
                    Request inspection
                  </ButtonLink>
                </div>
              </div>
            </article>
          ) : null}

          <div className="roof-service-band__stack">
            {secondaryServices.map((service) => (
              <article className="roof-service-card" key={service.name}>
                <figure className="roof-service-card__media">
                  <img
                    alt={service.image.alt}
                    loading="lazy"
                    src={service.image.src}
                    style={
                      service.image.position ? { objectPosition: service.image.position } : undefined
                    }
                  />
                </figure>
                <div className="roof-service-card__body">
                  <p className="roof-section-eyebrow">{service.course}</p>
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
          description="Representative exterior work showing how Blackridge documents, scopes, and executes both repair-led and replacement-led jobs."
          eyebrow="Projects"
          title="Project references for homeowners comparing repair versus replacement work"
        >
          <div className="roof-project-feature">
            <article className="roof-project-feature__main">
              <figure className="roof-project-feature__media">
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
              <div className="roof-project-feature__body">
                <p className="roof-section-eyebrow">{featuredProject.subtitle}</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                {featuredProject.facts?.length ? (
                  <ul className="plain-list roof-inline-facts">
                    {featuredProject.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>

            <div className="roof-project-feature__stack">
              {supportingProjects.map((project) => (
                <article className="roof-project-feature__item" key={project.title}>
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
                    <p className="roof-section-eyebrow">{project.subtitle}</p>
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
        description={content.home.experience.description}
        eyebrow="Process"
        title={content.home.experience.title}
      >
        <div className="roof-process-grid">
          <article className="roof-process-panel">
            <p className="roof-section-eyebrow">Inspection and scope</p>
            <ul className="check-list">
              {content.home.experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="roof-process-panel roof-process-panel--muted">
            <p className="roof-section-eyebrow">What happens after the visit</p>
            <ul className="plain-list confidence-list">
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </article>

          <aside className="roof-process-media">
            {content.home.experience.images.map((image) => (
              <figure className="roof-process-media__item" key={image.src}>
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
        description="Best fit for homeowners dealing with aging roofs, exterior wear, drainage issues, or broader envelope updates that need a cleaner scope path."
        eyebrow="Inspection"
        title="Request a roof or exterior inspection"
      >
        <div className="roof-callout-band">
          <div>
            <p>
              Share the property address, what you are seeing, and whether the issue is active damage,
              preventative planning, or part of a larger exterior upgrade. Blackridge will point you to the right next step first.
            </p>
          </div>
          <div className="roof-section-actions">
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call office
            </ButtonAnchor>
          </div>
          <p className="roof-callout-band__meta">Serving Toronto, Scarborough, Pickering, Ajax, and Whitby</p>
        </div>
      </Section>
    </>
  )
}
