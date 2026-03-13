import { type FormEvent, useContext, useState } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { RoofingPageHeader } from '../../components/roofing/RoofingPageHeader'
import { Button, ButtonAnchor } from '../../components/ui/Button'

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
    setStatusMessage('Your email app is opening with the inspection request details.')
    event.currentTarget.reset()
  }

  return (
    <>
      <RoofingPageHeader
        actions={<ButtonAnchor href={content.brand.phoneHref}>Call office</ButtonAnchor>}
        description={content.reservations.intro}
        eyebrow="Inspection"
        media={content.home.hero.image}
        meta={['Use this when the next step still needs to be confirmed', 'Call first for active leak issues']}
        summaryItems={[
          'Property address, roof concern, and timing are the first details we need',
          'Photos help us confirm urgency and whether the scope fits the service area',
          'Repair-versus-replacement guidance is sent after the first visit, not before it',
        ]}
        summaryLabel="What this request should include"
        title="Request a roof or exterior inspection"
      />

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Direct options</p>
          <h2 className="roof-block__title">Call, email, or send the inspection form</h2>
        </header>

        <div className="roof-contact-board">
          {content.reservations.channels.map((channel) => (
            <article className="roof-contact-dossier" key={channel.label}>
              <p className="roof-block__eyebrow">{channel.label}</p>
              <h3>{channel.value}</h3>
              <ButtonAnchor href={channel.href} variant="secondary">
                {channel.label.toLowerCase().includes('call')
                  ? 'Call office'
                  : channel.label.toLowerCase().includes('email')
                    ? 'Email request'
                    : 'View map'}
              </ButtonAnchor>
            </article>
          ))}
        </div>
      </section>

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Inspection form</p>
          <h2 className="roof-block__title">Send the property details first</h2>
          <p className="roof-block__description">
            This form is best when the problem is clear enough to describe but the right scope still needs to be confirmed before a site visit is booked.
          </p>
        </header>

        <div className="roof-request-layout">
          <form className="roof-request-form" onSubmit={onSubmit}>
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

          <aside className="roof-request-aside">
            <div className="roof-request-aside__panel">
              <p className="roof-block__eyebrow">What happens next</p>
              <ul className="plain-list roof-command-deck__brief-list">
                {content.reservations.policies.map((policy) => (
                  <li key={policy}>{policy}</li>
                ))}
              </ul>
            </div>
            <div className="roof-request-aside__panel roof-request-aside__panel--accent">
              <p className="roof-block__eyebrow">Urgent issues</p>
              <p>
                For active leaks or recent storm damage, call {content.brand.phone} so the request can be triaged first.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
