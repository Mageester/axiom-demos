import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

function getActionLabel(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('call')) return 'Call office'
  if (normalized.includes('email')) return 'Email Blackridge'
  if (normalized.includes('map') || normalized.includes('service area') || normalized.includes('office')) {
    return 'View map'
  }
  return 'Open'
}

export function ContactPage() {
  const { content, routes } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call office
            </ButtonAnchor>
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
          </>
        }
        className="roof-page-hero"
        description={content.contact.intro}
        eyebrow="Contact"
        media={content.gallery.collections[5]?.image}
        signals={['Inspection replies within one business day', 'Urgent leak calls prioritized when possible', 'Service-area fit confirmed first']}
        title="Speak with Blackridge about your roof or exterior concern"
      />

      <Section
        description="Use the direct channel that best fits the urgency of the issue and how much you already know about the property condition."
        eyebrow="Direct channels"
        title="Contact Blackridge"
      >
        <div className="roof-contact-grid">
          {content.contact.details.map((detail) => (
            <article className="roof-contact-panel" key={detail.label}>
              <p className="roof-section-eyebrow">{detail.label}</p>
              <h3>{detail.value}</h3>
              {detail.href ? (
                <ButtonAnchor href={detail.href} variant="secondary">
                  {getActionLabel(detail.label)}
                </ButtonAnchor>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="A better first message includes the property address, what you are seeing, and whether the issue is active damage or preventative planning."
        eyebrow="Before you call"
        title="What to include"
      >
        <div className="roof-note-panel">
          <ul>
            {content.contact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="roof-note-panel__aside">
            <p className="roof-section-eyebrow">Best fit</p>
            <p>
              Blackridge is strongest on residential roofing and exterior scopes where inspection, clear options,
              and stronger site control matter more than a vague low-end quote.
            </p>
            <div className="roof-section-actions">
              <ButtonLink to={routes.reservations}>Start inspection request</ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call {content.brand.phone}
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
