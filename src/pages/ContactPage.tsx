import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function ContactPage() {
  const { content, routes } = useContext(DemoConfigContext)

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
        title="Contact reservations"
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

      <Section title="Before you write">
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
