import { type FormEvent, useContext, useState } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { landscapingDemoContent } from '../../content/landscapingDemoContent'
import { Button, ButtonAnchor } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

const timelineOptions = [
  'Within 30 days',
  '1 to 3 months',
  '3 to 6 months',
  'Flexible planning horizon',
]

const budgetOptions = ['Under $7k', '$7k to $15k', '$15k to $30k', '$30k+', 'Need guidance']

function getChannelAction(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('call')) return 'Call quote desk'
  if (normalized.includes('email')) return 'Email request'
  return 'View map'
}

export function QuotePage() {
  const [statusMessage, setStatusMessage] = useState('')
  const { content } = useContext(DemoConfigContext)
  const { asidePoints, asideTitle, channelsHeading, hero, intakePrompts } = landscapingDemoContent.quote

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
      <Reveal as="section" className="land-route-hero land-route-hero--quote" variant="organic">
        <div className="land-route-hero__copy">
          <p className="land-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Direct channels</p>
          <h2>{channelsHeading}</h2>
        </div>

        <div className="land-contact-grid">
          {content.reservations.channels.map((channel) => (
            <article className="land-contact-grid__card" key={channel.label}>
              <p className="land-contact-grid__label">{channel.label}</p>
              <h3>{channel.value}</h3>
              <ButtonAnchor href={channel.href} variant="secondary">
                {getChannelAction(channel.label)}
              </ButtonAnchor>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-quote-layout">
          <form className="land-quote-form" onSubmit={onSubmit}>
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
            <textarea id="notes" name="notes" rows={6} />

            <Button type="submit">Send quote details</Button>
            {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
          </form>

          <aside className="land-quote-aside">
            <div className="land-quote-aside__panel">
              <p className="land-quote-aside__label">Quote prompts</p>
              <ul className="plain-list">
                {intakePrompts.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
            </div>
            <div className="land-quote-aside__panel">
              <p className="land-quote-aside__label">{asideTitle}</p>
              <ul className="plain-list">
                {asidePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call {content.brand.phone}
              </ButtonAnchor>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  )
}
