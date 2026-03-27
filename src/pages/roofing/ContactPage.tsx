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
            <ButtonAnchor href={content.brand.phoneHref}>Call office</ButtonAnchor>
            <ButtonLink to={routes.reservations} variant="secondary">
              Request inspection
            </ButtonLink>
          </>
        }
        className="roofing-hero"
        description={content.contact.intro}
        eyebrow="Contact"
        media={content.gallery.collections[3]?.image}
        revealVariant="firm"
        signals={[
          'General questions',
          'Service-area fit',
          'Photo triage for active issues',
        ]}
        title="Use this page for general questions or an initial inquiry"
      />

      <Section
        className="roofing-section roofing-section--contact"
        description="These are the simplest ways to reach the office or send in a first message."
        eyebrow="Direct channels"
        revealVariant="firm"
        title="Call, email, or confirm service-area fit"
      >
        <div className="card-grid card-grid--3 roofing-card-grid">
          {content.contact.details.map((detail) => (
            <Card key={detail.label} meta={detail.label} title={detail.value}>
              {detail.href ? (
                <ButtonAnchor href={detail.href} variant="secondary">
                  {detail.label.toLowerCase().includes('call')
                    ? 'Call office'
                    : detail.label.toLowerCase().includes('email')
                      ? 'Email request'
                      : 'View map'}
                </ButtonAnchor>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="roofing-section roofing-section--notes"
        description="The best requests are short, specific, and easy to triage."
        eyebrow="What to send"
        revealVariant="firm"
        title="The details that make the first response faster"
      >
        <div className="roofing-notes-layout">
          <ul className="roofing-notes-list">
            {content.contact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>

          <div className="roofing-notes-panel">
            <p className="roofing-notes-panel__eyebrow">Best fit</p>
            <p>
              Blackridge is strongest on residential roofing and exterior scopes where the homeowner wants inspection, scope clarity, and tighter on-site standards before the work is booked.
            </p>
            <div className="roofing-notes-panel__actions">
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
