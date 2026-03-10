import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

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
            <ButtonLink to={routes.reservations}>Request quote</ButtonLink>
          </>
        }
        description={content.contact.intro}
        eyebrow="Contact"
        media={content.gallery.collections[5]?.image}
        title="Direct access to Northline project planning"
      />

      <Section title="Direct channels">
        <div className="card-grid card-grid--3">
          {content.contact.details.map((detail) => (
            <Card key={detail.label} meta={detail.label} title={detail.value}>
              {detail.href ? (
                <ButtonAnchor href={detail.href} variant="quiet">
                  Open
                </ButtonAnchor>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        description="Before your first call, include key details so we can confirm fit and timeline quickly."
        title="Inquiry prep notes"
      >
        <div className="land-note-panel">
          <ul>
            {content.contact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="land-section-actions">
            <ButtonLink to={routes.reservations}>Start quote request</ButtonLink>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call {content.brand.phone}
            </ButtonAnchor>
          </div>
        </div>
      </Section>
    </>
  )
}