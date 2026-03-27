import { type FormEvent, useContext, useState } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { Button, ButtonAnchor, ButtonLink } from '../../components/ui/Button'
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
  const { content, routes } = useContext(DemoConfigContext)

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
      <PageHero
        actions={<ButtonAnchor href={content.brand.phoneHref}>Call office</ButtonAnchor>}
        className="roofing-hero"
        description={content.reservations.intro}
        eyebrow="Inspection"
        media={content.home.hero.image}
        revealVariant="firm"
        signals={[
          'Best for serious roof work',
          'Photos help us triage faster',
          'Replies usually within one business day',
        ]}
        title="Request an inspection when the next step still needs to be confirmed"
      />

      <Section
        className="roofing-section roofing-section--request"
        description="This is the cleanest route when you are ready to share the address and the issue details."
        eyebrow="Inspection form"
        revealVariant="firm"
        title="Send the property details first"
      >
        <div className="roofing-request-layout">
          <form className="roofing-request-form" onSubmit={onSubmit}>
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

          <aside className="roofing-request-aside">
            <div className="roofing-request-panel">
              <p className="roofing-request-panel__eyebrow">What happens next</p>
              <ul className="plain-list roofing-request-panel__list">
                {content.reservations.policies.map((policy) => (
                  <li key={policy}>{policy}</li>
                ))}
              </ul>
            </div>

            <div className="roofing-request-panel roofing-request-panel--accent">
              <p className="roofing-request-panel__eyebrow">Urgent issues</p>
              <p>
                For active leaks or recent storm damage, call {content.brand.phone} so the request can be triaged first.
              </p>
              <div className="roofing-request-panel__actions">
                <ButtonLink to={routes.contact}>Go to contact page</ButtonLink>
                <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                  Call now
                </ButtonAnchor>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
