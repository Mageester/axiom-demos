import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

export function ServicesPage() {
  const { content, routes } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations} variant="secondary">
            Request project quote
          </ButtonLink>
        }
        description={content.menu.intro}
        eyebrow="Services"
        media={content.menu.sections[1]?.image}
        title="Landscaping services built for premium residential properties"
      />

      <Section
        description="Each service line is structured to keep scope, workmanship standards, and finish quality clear from day one."
        title="Service categories"
      >
        <div className="land-service-sections">
          {content.menu.sections.map((section) => (
            <section className="land-service-section" key={section.title}>
              {section.image ? (
                <figure className="land-service-section__media">
                  <img
                    alt={section.image.alt}
                    loading="lazy"
                    src={section.image.src}
                    style={
                      section.image.position
                        ? { objectPosition: section.image.position }
                        : undefined
                    }
                  />
                </figure>
              ) : null}

              <header className="land-service-section__header">
                <h2>{section.title}</h2>
                <p>{section.note}</p>
              </header>

              <ul className="land-service-list">
                {section.items.map((item) => (
                  <li className="land-service-item" key={item.name}>
                    <div className="land-service-item__header">
                      <h3>{item.name}</h3>
                      <span className="land-service-item__meta">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section
        description="Simple decision flow designed for homeowners comparing fit, quality standards, and timeline confidence."
        title="How we structure engagement"
      >
        <div className="experience-panel">
          <ul className="check-list">
            {content.home.experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="experience-panel__actions">
            <ButtonLink to={routes.reservations}>Start quote request</ButtonLink>
            <ButtonLink to={routes.gallery} variant="quiet">
              Review project gallery
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}