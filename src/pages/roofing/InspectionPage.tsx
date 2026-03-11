import { type FormEvent, useContext, useState } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { Button, ButtonAnchor } from '../../components/ui/Button'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

const issueOptions = [
  'Active leak or water entry',
  'Storm or wind damage concern',
  'Aging roof needing inspection',
  'Siding, soffit, or fascia issue',
  'Eavestrough or drainage concern',
  'Planning a full replacement',
]

const timelineOptions = [
  'As soon as possible',
  'Within 30 days',
  '1 to 3 months',
  'Flexible planning horizon',
]

export function InspectionPage() {
  const [statusMessage, setStatusMessage] = useState('')
  const { content } = useContext(DemoConfigContext)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') as string)?.trim() ?? ''
    const email = (formData.get('email') as string)?.trim() ?? ''
    const phone = (formData.get('phone') as string)?.trim() ?? ''
    const address = (formData.get('address') as string)?.trim() ?? ''
    const issue = (formData.get('issue') as string)?.trim() ?? ''
    const timeline = (formData.get('timeline') as string)?.trim() ?? ''
    const notes = (formData.get('notes') as string)?.trim() ?? ''

    const body = [
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Property Address: ${address || 'Not provided'}`,
      `Primary Concern: ${issue || 'Not provided'}`,
      `Preferred Timing: ${timeline || 'Not provided'}`,
      `Inspection Notes: ${notes || 'None'}`,
    ].join('\n')

    const query = new URLSearchParams({
      subject: `Inspection request from ${name || 'Homeowner'}`,
      body,
    })

    window.location.href = `${content.brand.emailHref}?${query.toString()}`
    setStatusMessage('Your email app is opening with your inspection request details.')
    event.currentTarget.reset()
  }

  return (
    <>
      <PageHero
        actions={
          <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
            Call office
          </ButtonAnchor>
        }
        className="roof-page-hero"
        description={content.reservations.intro}
        eyebrow="Inspection"
        media={content.home.hero.image}
        signals={['Inspection-led recommendations', 'Repair or replacement clarity', 'Photo-backed next steps']}
        title="Request a roof or exterior inspection"
      />

      <Section
        description="If the issue is active water entry or recent storm damage, call directly. For everything else, use the channel that best fits your timeline."
        eyebrow="Direct options"
        title="Inspection channels"
      >
        <div className="roof-contact-grid">
          {content.reservations.channels.map((channel) => (
            <article className="roof-contact-panel" key={channel.label}>
              <p className="roof-section-eyebrow">{channel.label}</p>
              <h3>{channel.value}</h3>
              <ButtonAnchor href={channel.href} variant="secondary">
                {channel.label.toLowerCase().includes('call') ? 'Call office' : channel.label.toLowerCase().includes('email') ? 'Email request' : 'View map'}
              </ButtonAnchor>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="Send the core details first so Blackridge can confirm urgency, service-area fit, and the right next step before a site visit is booked."
        eyebrow="Form"
        title="Inspection request form"
      >
        <div className="reservation-layout reservation-layout--roofing">
          <form className="reservation-form reservation-form--roofing" onSubmit={onSubmit}>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" required type="text" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" required type="email" />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" required type="tel" />

            <label htmlFor="address">Property address</label>
            <input id="address" name="address" required type="text" />

            <label htmlFor="issue">Primary concern</label>
            <select id="issue" name="issue" required>
              <option value="">Select concern</option>
              {issueOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="timeline">Preferred timing</label>
            <select id="timeline" name="timeline" required>
              <option value="">Select timing</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="notes">Inspection notes</label>
            <textarea id="notes" name="notes" rows={5} />

            <Button type="submit">Send inspection request</Button>
            {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
          </form>

          <aside className="policy-panel policy-panel--roofing">
            <h3>What happens next</h3>
            <ul>
              {content.reservations.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
            <p className="policy-panel__subtle">
              For active leaks or recent storm damage, call {content.brand.phone} so we can determine whether the request should be prioritized.
            </p>
          </aside>
        </div>
      </Section>
    </>
  )
}
