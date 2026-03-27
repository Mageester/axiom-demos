import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { landscapingDemoContent } from '../../content/landscapingDemoContent'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

function getActionLabel(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('call')) return 'Call now'
  if (normalized.includes('email')) return 'Email quote desk'
  return 'Open map'
}

export function ContactPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const { checklist, hero, responseCards } = landscapingDemoContent.contact

  return (
    <>
      <Reveal as="section" className="land-route-hero land-route-hero--contact" variant="organic">
        <div className="land-route-hero__copy">
          <p className="land-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="land-block__actions">
            <ButtonAnchor href={content.brand.phoneHref}>Call quote desk</ButtonAnchor>
            <ButtonLink to={routes.reservations} variant="secondary">
              Request a quote
            </ButtonLink>
          </div>
        </div>
        <figure className="land-route-hero__media">
          <img
            alt={hero.image.alt}
            loading="eager"
            src={hero.image.src}
            style={hero.image.position ? { objectPosition: hero.image.position } : undefined}
          />
        </figure>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Direct channels</p>
          <h2>Use the contact method that matches how far along the project already is.</h2>
        </div>

        <div className="land-contact-grid">
          {content.contact.details.map((detail) => (
            <article className="land-contact-grid__card" key={detail.label}>
              <p className="land-contact-grid__label">{detail.label}</p>
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

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-contact-guidance">
          <div>
            <p className="land-block__eyebrow">Before you reach out</p>
            <h2>Contact goes faster when the first message is specific.</h2>
            <ul className="plain-list land-contact-guidance__list">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="land-contact-guidance__cards">
            {responseCards.map((card) => (
              <article className="land-contact-guidance__card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="land-block__actions">
          <ButtonLink to={routes.reservations}>Start quote request</ButtonLink>
          <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
            Call {content.brand.phone}
          </ButtonAnchor>
        </div>
      </Reveal>
    </>
  )
}
