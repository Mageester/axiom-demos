import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { RoofingPageHeader } from '../../components/roofing/RoofingPageHeader'
import { ButtonLink } from '../../components/ui/Button'

export function ServicesPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const repairScope = content.menu.sections[0]
  const replacementScope = content.menu.sections[1]
  const supportScope = content.menu.sections[2]

  return (
    <>
      <RoofingPageHeader
        actions={
          <>
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonLink to={routes.gallery} variant="secondary">
              View projects
            </ButtonLink>
          </>
        }
        description={content.menu.intro}
        eyebrow="Services"
        media={replacementScope?.image}
        meta={['Repairs, replacements, siding, soffit, fascia, and eavestroughs', 'Toronto & Durham Region']}
        summaryItems={[
          'Inspection first when the failure point is still unclear',
          'Replacement scopes laid out by urgency and section',
          'Roofline support work handled so the house is not left half-finished',
        ]}
        summaryLabel="How Blackridge groups the work"
        title="Roofing and exterior scopes organized the way homeowners actually buy them"
      />

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Primary service lines</p>
          <h2 className="roof-block__title">What the work usually turns into after the inspection</h2>
          <p className="roof-block__description">
            Once condition is confirmed, the next step is usually a repair scope, a planned replacement, or the exterior support work tied to the roofline and drainage.
          </p>
        </header>

        <div className="roof-service-rail">
          {content.menu.sections.map((section) => (
            <article className="roof-service-dossier" key={section.title}>
              {section.image ? (
                <figure className="roof-service-dossier__media">
                  <img
                    alt={section.image.alt}
                    loading="lazy"
                    src={section.image.src}
                    style={section.image.position ? { objectPosition: section.image.position } : undefined}
                  />
                </figure>
              ) : null}
              <div className="roof-service-dossier__body">
                <p className="roof-block__eyebrow">{section.note}</p>
                <h3>{section.title}</h3>
                {section.highlights?.length ? (
                  <ul className="plain-list roof-chip-list">
                    {section.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
                <ul className="plain-list roof-ledger-list">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.description}</span>
                      </div>
                      <em>{item.price}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Repair versus replacement</p>
          <h2 className="roof-block__title">What we are usually helping homeowners sort out</h2>
        </header>

        <div className="roof-decision-grid">
          <article className="roof-decision-card">
            <p className="roof-block__eyebrow">Repair-led jobs</p>
            <h3>{repairScope?.title}</h3>
            <p>
              Best when the issue is tied to a specific area, the rest of the roof still has service life, and the homeowner needs the failure point confirmed before spending on a larger scope.
            </p>
          </article>
          <article className="roof-decision-card">
            <p className="roof-block__eyebrow">Replacement-led jobs</p>
            <h3>{replacementScope?.title}</h3>
            <p>
              Best when deterioration is broad, multiple sections are failing, or the roof is near the end of service life and staged repairs would only delay the real work.
            </p>
          </article>
          <article className="roof-decision-card">
            <p className="roof-block__eyebrow">Support scopes</p>
            <h3>{supportScope?.title}</h3>
            <p>
              Best when roof-edge details, siding, fascia, soffit, or drainage issues need to be handled so the finished job actually protects the house and looks complete.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
