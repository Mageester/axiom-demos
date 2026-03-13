import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { RoofingPageHeader } from '../../components/roofing/RoofingPageHeader'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'

function getActionLabel(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('call')) return 'Call office'
  if (normalized.includes('email')) return 'Email Blackridge'
  return 'View map'
}

export function ContactPage() {
  const { content, routes } = useContext(DemoConfigContext)

  return (
    <>
      <RoofingPageHeader
        actions={
          <>
            <ButtonAnchor href={content.brand.phoneHref}>Call office</ButtonAnchor>
            <ButtonLink to={routes.reservations} variant="secondary">
              Request inspection
            </ButtonLink>
          </>
        }
        description={content.contact.intro}
        eyebrow="Contact"
        media={content.gallery.collections[4]?.image}
        meta={['Inspection questions, service-area fit, and active issue triage', 'Toronto & Durham Region']}
        summaryItems={[
          'Call first for active leaks or recent weather damage',
          'Email photos when the issue is visible from the ground or attic',
          'Use the inspection form when the next step still needs to be confirmed',
        ]}
        summaryLabel="Best use of each contact channel"
        title="Speak with Blackridge about a roof, siding, or drainage concern"
      />

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Direct channels</p>
          <h2 className="roof-block__title">Call, email, or confirm service-area fit</h2>
        </header>

        <div className="roof-contact-board">
          {content.contact.details.map((detail) => (
            <article className="roof-contact-dossier" key={detail.label}>
              <p className="roof-block__eyebrow">{detail.label}</p>
              <h3>{detail.value}</h3>
              {detail.href ? (
                <ButtonAnchor href={detail.href} variant="secondary">
                  {getActionLabel(detail.label)}
                </ButtonAnchor>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Before you send the request</p>
          <h2 className="roof-block__title">The details that make triage faster</h2>
        </header>

        <div className="roof-note-board">
          <ul className="roof-note-board__list">
            {content.contact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="roof-note-board__aside">
            <p className="roof-block__eyebrow">Best fit</p>
            <p>
              Blackridge is strongest on residential roofing and exterior scopes where the homeowner wants inspection, scope clarity, and tighter on-site standards before the work is booked.
            </p>
            <div className="roof-command-deck__actions">
              <ButtonLink to={routes.reservations}>Start inspection request</ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call {content.brand.phone}
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
