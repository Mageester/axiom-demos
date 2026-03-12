import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function ContactPage() {
  const { content, routes } = useContext(DemoConfigContext)

  function contactActionLabel(label: string, href: string) {
    if (href.startsWith('tel:')) {
      return 'Call'
    }

    if (href.startsWith('mailto:')) {
      return 'Email'
    }

    if (label.toLowerCase().includes('visit')) {
      return 'View map'
    }

    return 'Open'
  }

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call reservations
            </ButtonAnchor>
            <ButtonLink to={routes.reservations}>Reserve a table</ButtonLink>
          </>
        }
        description={content.contact.intro}
        eyebrow="Contact"
        media={content.gallery.collections[5]?.image}
        title="Contact the dining room at Atelier Meridian"
      />

      <Section
        description="For booking changes, private dining, or accessibility details, these are the quickest ways to reach the dining room."
        title="Reservations, hosted tables, and guest notes"
      >
        <div className="restaurant-link-grid restaurant-link-grid--3">
          {content.contact.details.map((detail) => (
            <article className="restaurant-link-panel" key={detail.label}>
              <p className="restaurant-link-panel__eyebrow">{detail.label}</p>
              <h3>{detail.value}</h3>
              {detail.href ? (
                <ButtonAnchor href={detail.href} variant="quiet">
                  {contactActionLabel(detail.label, detail.href)}
                </ButtonAnchor>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section title="A few details that help">
        <div className="experience-panel">
          <ul className="check-list">
            {content.contact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
