import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredService = content.home.featuredDishes[0]
  const secondaryServices = content.home.featuredDishes.slice(1)
  const transformationProjects = content.gallery.collections.slice(0, 2)
  const projectPreview = content.gallery.collections.slice(2, 6)

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.menu} variant="secondary">
              {content.home.hero.secondaryCta}
            </ButtonLink>
          </>
        }
        description={content.home.hero.description}
        eyebrow={content.home.hero.eyebrow}
        media={content.home.hero.image}
        signals={content.home.hero.signals}
        title={content.home.hero.title}
      />

      <Section
        description="Built for homeowners who want premium results, clean process control, and confident project execution."
        title="Operational trust layer"
      >
        <div className="card-grid card-grid--3">
          {content.home.highlights.map((highlight) => (
            <Card
              description={highlight.description}
              key={highlight.title}
              title={highlight.title}
            />
          ))}
        </div>
      </Section>

      <Section
        description="Signature service categories designed for curb appeal, outdoor living quality, and long-term durability."
        title="Featured landscaping scope"
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
                <p className="land-service-focus__description">
                  {featuredService.description}
                </p>
                <ButtonLink to={routes.menu} variant="quiet">
                  View service detail
                </ButtonLink>
              </div>
            </article>
          ) : null}

          <div className="land-service-compact-grid">
            {secondaryServices.map((service) => (
              <Card
                description={service.description}
                image={service.image}
                key={service.name}
                meta={service.course}
                title={service.name}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        description="A quick visual scan of project outcomes that matter most to homeowners evaluating fit and quality."
        title="Transformation preview"
      >
        <div className="land-transformation">
          <div className="land-transformation__layout">
            <div className="land-transformation__visuals">
              {transformationProjects.map((project) => (
                <figure className="land-transformation__item" key={project.title}>
                  <img
                    alt={project.image.alt}
                    loading="lazy"
                    src={project.image.src}
                    style={
                      project.image.position
                        ? { objectPosition: project.image.position }
                        : undefined
                    }
                  />
                  <figcaption className="land-transformation__caption">
                    {project.subtitle}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="land-transformation__body">
              <h3 className="section__title">Projects built for visual lift and daily use</h3>
              <p>
                From front-entry upgrades to full backyard entertaining zones,
                every project is structured around function, finish quality, and
                lasting property value.
              </p>
              <div className="land-section-actions">
                <ButtonLink to={routes.gallery}>View full project gallery</ButtonLink>
                <ButtonLink to={routes.reservations} variant="secondary">
                  Request consultation
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        description="Project examples organized for fast scan and clear service relevance."
        title="Selected project builds"
      >
        <div className="card-grid card-grid--3">
          {projectPreview.map((project) => (
            <Card
              description={project.description}
              image={project.image}
              key={project.title}
              meta={project.subtitle}
              title={project.title}
            />
          ))}
        </div>
      </Section>

      <Section
        description={content.home.experience.description}
        title={content.home.experience.title}
      >
        <div className="land-process-layout">
          <div className="experience-panel">
            <ul className="check-list">
              {content.home.experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="plain-list confidence-list">
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
            <div className="experience-panel__actions">
              <ButtonLink to={routes.reservations}>Start quote request</ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call office
              </ButtonAnchor>
            </div>
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
        description="Best fit for homeowners planning premium residential landscaping with clear scope and timeline intent."
        title="Ready to plan your property upgrade"
      >
        <div className="land-quote-band">
          <div>
            <p>
              Share your address, target services, and timing goals. You will
              receive a practical next step and scope-fit guidance first.
            </p>
          </div>
          <div className="land-section-actions">
            <ButtonLink to={routes.reservations}>Request quote</ButtonLink>
            <ButtonLink to={routes.contact} variant="secondary">
              Contact office
            </ButtonLink>
          </div>
          <p className="land-quote-band__meta">
            Service area: Toronto, Etobicoke, Mississauga, Oakville
          </p>
        </div>
      </Section>
    </>
  )
}