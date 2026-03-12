import { type FormEvent, useContext, useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import { DemoConfigContext } from '../config/demoConfig'
import { Button, ButtonAnchor } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function ReservationsPage() {
  const [statusMessage, setStatusMessage] = useState('')
  const { content } = useContext(DemoConfigContext)

  function channelActionLabel(label: string, href: string) {
    if (label.toLowerCase().includes('online')) {
      return 'Book online'
    }

    if (href.startsWith('tel:')) {
      return 'Call'
    }

    if (href.startsWith('mailto:')) {
      return 'Email'
    }

    return 'Open'
  }

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
    setStatusMessage('Your email app is opening with your note to the reservations team ready to send.')
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

      <Section
        description="Online booking is best for standard tables. For larger groups, hosted dinners, or timing questions, call or email the reservations team."
        title="Reserve online, call, or email"
      >
        <div className="restaurant-link-grid restaurant-link-grid--3">
          {content.reservations.channels.map((channel) => (
            <article className="restaurant-link-panel" key={channel.label}>
              <p className="restaurant-link-panel__eyebrow">{channel.label}</p>
              <h3>{channel.value}</h3>
              <ButtonAnchor href={channel.href} variant="quiet">
                {channelActionLabel(channel.label, channel.href)}
              </ButtonAnchor>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="Share a preferred date, time, party size, and any dietary or access notes. When you send this form, your email app opens with everything prepared."
        title="Large tables or special requests"
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

            <Button type="submit">Prepare email request</Button>
            {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
          </form>

          <aside className="policy-panel">
            <h3>Reservation notes</h3>
            <ul>
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
            <p className="policy-panel__subtle">
              For larger tables, private dinners, or accessibility requests, call
              the reservations team directly at {content.brand.phone}.
            </p>
          </aside>
        </div>
      </Section>
    </>
  )
}
