import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

function getActionLabel(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('call')) return 'Call for a quote'
  if (normalized.includes('email')) return 'Email a quote request'
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
              Call for a quote
            </ButtonAnchor>
            <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
          </>
        }
        className="land-page-hero"
        description={content.contact.intro}
        eyebrow="Contact"
        media={content.gallery.collections[5]?.image}
        signals={['Service area reviewed first', 'Quote replies within one business day', 'On-site visits booked after review']}
        title="Talk with us about the property and what you want to change"
      />

      <Section
        description="Use the contact method that works best for you. If you already know the property address and the type of work you want, include that right away."
        eyebrow="Direct contact"
        title="Call, email, or send the project details"
      >
        <div className="land-contact-grid">
          {content.contact.details.map((detail) => (
            <article className="land-contact-panel" key={detail.label}>
              <p className="land-contact-panel__eyebrow">{detail.label}</p>
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
        description="A strong first inquiry usually includes the property address, the area you want to improve, and any timing constraints."
        eyebrow="Before you reach out"
        title="Helpful details for a first call"
      >
        <div className="land-note-panel land-note-panel--split">
          <ul>
            {content.contact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="land-note-panel__aside">
            <p className="land-note-panel__eyebrow">Typical project</p>
            <p>
              Northline is strongest on residential landscaping projects in Toronto and the west end where finish quality,
              curb appeal, and cleaner project control matter.
            </p>
            <div className="land-section-actions">
              <ButtonLink to={routes.reservations}>Start your quote</ButtonLink>
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
