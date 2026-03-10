import { type FormEvent, useContext, useState } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { Button, ButtonAnchor } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

const timelineOptions = [
  'Within 30 days',
  '1 to 3 months',
  '3 to 6 months',
  'Flexible planning horizon',
]

const budgetOptions = [
  'Under $7k',
  '$7k to $15k',
  '$15k to $30k',
  '$30k+',
  'Need guidance',
]

export function QuotePage() {
  const [statusMessage, setStatusMessage] = useState('')
  const { content } = useContext(DemoConfigContext)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') as string)?.trim() ?? ''
    const email = (formData.get('email') as string)?.trim() ?? ''
    const phone = (formData.get('phone') as string)?.trim() ?? ''
    const address = (formData.get('address') as string)?.trim() ?? ''
    const service = (formData.get('service') as string)?.trim() ?? ''
    const timeline = (formData.get('timeline') as string)?.trim() ?? ''
    const budget = (formData.get('budget') as string)?.trim() ?? ''
    const notes = (formData.get('notes') as string)?.trim() ?? ''

    const body = [
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Property Address: ${address || 'Not provided'}`,
      `Primary Service: ${service || 'Not provided'}`,
      `Preferred Timeline: ${timeline || 'Not provided'}`,
      `Budget Band: ${budget || 'Not provided'}`,
      `Project Notes: ${notes || 'None'}`,
    ].join('\n')

    const query = new URLSearchParams({
      subject: `Quote request from ${name || 'Homeowner'}`,
      body,
    })

    window.location.href = `${content.brand.emailHref}?${query.toString()}`
    setStatusMessage('Your email app is opening with your quote request details.')
    event.currentTarget.reset()
  }

  return (
    <>
      <PageHero
        actions={
          <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
            Call quote desk
          </ButtonAnchor>
        }
        description={content.reservations.intro}
        eyebrow="Request Quote"
        media={content.home.hero.image}
        title="Start with a clear project-fit review"
      />

      <Section title="Quote channels">
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
        description="Share the practical details first so we can confirm scope fit, service area, and next scheduling step."
        title="Quote request form"
      >
        <div className="reservation-layout">
          <form className="reservation-form" onSubmit={onSubmit}>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" required type="text" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" required type="email" />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" required type="tel" />

            <label htmlFor="address">Property address</label>
            <input id="address" name="address" required type="text" />

            <label htmlFor="service">Primary service focus</label>
            <select id="service" name="service" required>
              <option value="">Select service</option>
              {content.menu.sections.map((section) => (
                <option key={section.title} value={section.title}>
                  {section.title}
                </option>
              ))}
            </select>

            <label htmlFor="timeline">Preferred timeline</label>
            <select id="timeline" name="timeline" required>
              <option value="">Select timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="budget">Budget range</label>
            <select id="budget" name="budget" required>
              <option value="">Select range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="notes">Project notes</label>
            <textarea id="notes" name="notes" rows={5} />

            <Button type="submit">Send quote request</Button>
            {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
          </form>

          <aside className="policy-panel">
            <h3>Before we schedule</h3>
            <ul>
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
            <p className="policy-panel__subtle">
              For urgent timing constraints, call {content.brand.phone} so we can
              confirm availability faster.
            </p>
          </aside>
        </div>
      </Section>
    </>
  )
}