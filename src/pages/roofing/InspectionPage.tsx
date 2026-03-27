import { type FormEvent, useContext, useState } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { roofingDemoContent } from '../../content/roofingDemoContent'
import { Button, ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

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
  const { hero, prep, urgencyPanel } = roofingDemoContent.inspection

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
      <Reveal as="section" className="roof-route-hero roof-route-hero--inspection" variant="firm">
        <div className="roof-route-hero__copy">
          <p className="roof-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="roof-command-deck__actions">
            <ButtonAnchor href={content.brand.phoneHref}>Call office first</ButtonAnchor>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
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
            <textarea id="notes" name="notes" rows={6} />

            <Button type="submit">Send inspection request</Button>
            {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
          </form>

          <aside className="roof-request-aside">
            <div className="roof-request-aside__panel roof-request-aside__panel--accent">
              <p className="roof-request-aside__label">{urgencyPanel.title}</p>
              <p>{urgencyPanel.description}</p>
              <ul className="plain-list roof-request-aside__list">
                {urgencyPanel.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call {content.brand.phone}
              </ButtonAnchor>
            </div>

            <div className="roof-request-aside__panel">
              <p className="roof-request-aside__label">Before you submit</p>
              <ul className="plain-list roof-request-aside__list">
                {prep.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="roof-command-deck__actions">
                <ButtonLink to={routes.contact} variant="secondary">
                  General contact
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  )
}
