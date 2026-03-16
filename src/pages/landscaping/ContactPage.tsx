import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { LandscapingPageHeader } from '../../components/landscaping/LandscapingPageHeader'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
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
      <LandscapingPageHeader
        actions={
          <>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call for a quote
            </ButtonAnchor>
            <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
          </>
        }
        description={content.contact.intro}
        eyebrow="Contact"
        media={content.gallery.collections[2]?.image}
        title="Talk with us about the yard and the work you want priced"
        utilityItems={['Service area reviewed first', 'Quote replies within one business day', 'On-site visits booked after review']}
        utilityLabel="Direct contact"
        utilityMeta={['If you already know the address and the area that needs work, include both in the first message.']}
        utilityTitle="Best first contact for pricing and scope"
      />

      <Section
        description="Use the contact method that works best for you. If you already know the property address and the type of work you want, include that right away."
        eyebrow="Direct contact"
        title="Call, email, or send the property details"
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
        title="What helps us price it faster"
      >
        <div className="land-note-panel land-note-panel--split">
          <ul>
            {content.contact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="land-note-panel__aside">
            <p className="land-note-panel__eyebrow">Best fit</p>
            <p>
              Northline is strongest on residential landscaping projects in Toronto and the west end where patios,
              planting, front-entry work, and overall finish quality matter.
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
