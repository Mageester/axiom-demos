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
            <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
            <ButtonLink to={routes.gallery} variant="secondary">
              View projects
            </ButtonLink>
          </>
        }
        className="land-page-hero"
        description={content.menu.intro}
        eyebrow="Services"
        media={content.menu.sections[1]?.image}
        signals={[
          'Patios, front entries, and backyard upgrades',
          'Planting, lighting, and seasonal care',
          'Toronto and West GTA service area',
        ]}
        title="Residential landscaping services for patios, planting, entries, and outdoor living"
      />

      <Section
        description="A clear breakdown of the landscaping work Northline handles most often for residential properties."
        eyebrow="Services"
        title="What Northline is usually hired to do"
      >
        <div className="land-service-sections">
          {content.menu.sections.map((section, index) => (
            <section
              className={`land-service-section ${index % 2 === 1 ? 'land-service-section--reverse' : ''}`}
              key={section.title}
            >
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

              <div className="land-service-section__content">
                <header className="land-service-section__header">
                  <p className="land-service-section__eyebrow">{section.note}</p>
                  <h2>{section.title}</h2>
                  {section.highlights?.length ? (
                    <ul className="plain-list land-inline-facts">
                      {section.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
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
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section
        description="Most Northline jobs need proper planning, strong finish quality, and a cleaner overall result than a quick patch or low-detail install."
        eyebrow="Project type"
        title="The kind of work we are built for"
      >
        <div className="land-fit-grid">
          <article className="land-fit-panel">
            <h3>Property upgrade, not quick patchwork</h3>
            <p>
              Best for homeowners improving the front approach, backyard living area,
              or full property composition rather than looking for the cheapest short-term fix.
            </p>
          </article>
          <article className="land-fit-panel">
            <h3>Clear scope and realistic timing</h3>
            <p>
              The strongest projects start with a defined priority, a known service area,
              and a practical completion window we can plan around properly.
            </p>
          </article>
          <article className="land-fit-panel">
            <h3>Finish quality matters</h3>
            <p>
              This is for homeowners who care how the work reads from the street,
              how it performs in use, and how the site is handled during the build.
            </p>
          </article>
        </div>
        <div className="land-section-actions">
          <ButtonLink to={routes.reservations}>Start your quote</ButtonLink>
          <ButtonLink to={routes.contact} variant="secondary">
            Contact office
          </ButtonLink>
        </div>
      </Section>
    </>
  )
}
