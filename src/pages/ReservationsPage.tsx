import { type FormEvent, useContext, useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import { DemoConfigContext } from '../config/demoConfig'
import { Button, ButtonAnchor } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function ReservationsPage() {
  const [statusMessage, setStatusMessage] = useState('')
  const { content } = useContext(DemoConfigContext)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') as string)?.trim() ?? ''
    const date = (formData.get('date') as string)?.trim() ?? ''
    const guests = (formData.get('guests') as string)?.trim() ?? ''
    const notes = (formData.get('notes') as string)?.trim() ?? ''

    const body = [
      `Name: ${name || 'Not provided'}`,
      `Preferred Date: ${date || 'Not provided'}`,
      `Guests: ${guests || 'Not provided'}`,
      `Notes: ${notes || 'None'}`,
    ].join('\n')

    const query = new URLSearchParams({
      subject: `Reservation inquiry from ${name || 'Guest'}`,
      body,
    })

    window.location.href = `${content.brand.emailHref}?${query.toString()}`
    setStatusMessage('Your email app is opening with your reservation details.')
    event.currentTarget.reset()
  }

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonAnchor href={content.reservations.channels[0]?.href ?? content.brand.emailHref} variant="primary">
              Book online
            </ButtonAnchor>
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call reservations
            </ButtonAnchor>
          </>
        }
        description={content.reservations.intro}
        eyebrow="Reservations"
        media={content.home.experience.images[1]}
        title="Reserve your table"
      />

      <Section title="Booking channels">
        <div className="card-grid card-grid--3">
          {content.reservations.channels.map((channel) => (
            <Card key={channel.label} meta={channel.label} title={channel.value}>
              <ButtonAnchor href={channel.href} variant="quiet">
                Open
              </ButtonAnchor>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        description="Share your preferred date and party size. This form opens your mail client with your request prefilled."
        title="Reservation request"
      >
        <div className="reservation-layout">
          <form className="reservation-form" onSubmit={onSubmit}>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" required type="text" />

            <label htmlFor="date">Preferred date</label>
            <input id="date" name="date" required type="date" />

            <label htmlFor="guests">Party size</label>
            <select id="guests" name="guests" required>
              <option value="">Select</option>
              {[...Array(siteConfig.partySizeCap)].map((_, index) => {
                const value = String(index + 1)
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              })}
            </select>

            <label htmlFor="notes">Dietary notes</label>
            <textarea id="notes" name="notes" rows={4} />

            <Button type="submit">Send request</Button>
            {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
          </form>

          <aside className="policy-panel">
            <h3>Reservation policy</h3>
            <ul>
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
            <p className="policy-panel__subtle">
              For large parties, private events, or accessibility requests, contact
              our reservations team directly at {content.brand.phone}.
            </p>
          </aside>
        </div>
      </Section>
    </>
  )
}
