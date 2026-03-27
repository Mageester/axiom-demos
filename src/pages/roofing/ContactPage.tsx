import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { roofingDemoContent } from '../../content/roofingDemoContent'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

function getActionLabel(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('call')) return 'Call office'
  if (normalized.includes('email')) return 'Email request'
  return 'View map'
}

export function ContactPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const { checklist, guidance, hero } = roofingDemoContent.contact

  return (
    <>
      <Reveal as="section" className="roof-route-hero" variant="firm">
        <div className="roof-route-hero__copy">
          <p className="roof-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="roof-command-deck__actions">
            <ButtonAnchor href={content.brand.phoneHref}>Call office</ButtonAnchor>
            <ButtonLink to={routes.reservations} variant="secondary">
              Request inspection
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">Direct channels</p>
          <h2 className="roof-block__title">Use contact for general fit, first guidance, or photo triage.</h2>
        </div>

        <div className="roof-contact-grid">
          {content.contact.details.map((detail) => (
            <article className="roof-contact-grid__card" key={detail.label}>
              <p className="roof-contact-grid__label">{detail.label}</p>
              <h3>{detail.value}</h3>
              {detail.href ? (
                <ButtonAnchor href={detail.href} variant="secondary">
                  {getActionLabel(detail.label)}
                </ButtonAnchor>
              ) : null}
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <div className="roof-contact-guidance">
          <div className="roof-contact-guidance__cards">
            {guidance.map((item) => (
              <article className="roof-contact-guidance__card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="roof-contact-guidance__panel">
            <p className="roof-contact-guidance__label">What makes the response faster</p>
            <ul className="plain-list roof-contact-guidance__list">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="roof-command-deck__actions">
              <ButtonLink to={routes.reservations}>Go to inspection request</ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                Call {content.brand.phone}
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  )
}
