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
          <>
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonLink to={routes.gallery} variant="secondary">
              Review projects
            </ButtonLink>
          </>
        }
        className="roof-page-hero"
        description={content.menu.intro}
        eyebrow="Services"
        media={content.menu.sections[1]?.image}
        signals={['Repair and replacement', 'Exterior support work', 'Inspection-led recommendations']}
        title="Roofing and exterior services structured around condition, scope, and long-term protection"
      />

      <Section
        description="Each service line is organized so homeowners can understand what needs immediate action, what can be staged, and what the work is meant to solve."
        eyebrow="Service lines"
        title="Blackridge services"
      >
        <div className="roof-service-sections">
          {content.menu.sections.map((section) => (
            <section className="roof-service-panel" key={section.title}>
              {section.image ? (
                <figure className="roof-service-panel__media">
                  <img
                    alt={section.image.alt}
                    loading="lazy"
                    src={section.image.src}
                    style={section.image.position ? { objectPosition: section.image.position } : undefined}
                  />
                </figure>
              ) : null}
              <div className="roof-service-panel__content">
                <header className="roof-service-panel__header">
                  <p className="roof-section-eyebrow">{section.note}</p>
                  <h2>{section.title}</h2>
                  {section.highlights?.length ? (
                    <ul className="plain-list roof-inline-facts">
                      {section.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                </header>
                <ul className="roof-service-list">
                  {section.items.map((item) => (
                    <li className="roof-service-list__item" key={item.name}>
                      <div className="roof-service-list__row">
                        <h3>{item.name}</h3>
                        <span>{item.price}</span>
                      </div>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section
        description="Blackridge is strongest when the homeowner needs a contractor who can inspect properly, explain the options clearly, and execute with tighter operational control than a basic trade crew."
        eyebrow="Best fit"
        title="When this service model makes the most sense"
      >
        <div className="roof-fit-grid">
          <article className="roof-fit-panel">
            <h3>Active issue or aging exterior system</h3>
            <p>
              Best for roof leaks, storm damage, aging shingles, drainage problems, or exterior wear where the property needs a serious condition review.
            </p>
          </article>
          <article className="roof-fit-panel">
            <h3>Repair versus replacement needs to be clarified</h3>
            <p>
              Strong fit when you need a contractor to separate what is urgent, what can be repaired, and what should be planned as a larger replacement scope.
            </p>
          </article>
          <article className="roof-fit-panel">
            <h3>Site standards matter</h3>
            <p>
              Blackridge is built for homeowners who care about communication, access protection, cleanup, and a cleaner handoff at the end of the job.
            </p>
          </article>
        </div>
      </Section>
    </>
  )
}
