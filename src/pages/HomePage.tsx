import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonAnchor } from '../components/ui/Button'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const primaryAtmosphereImage =
    content.home.experience.images[0] ?? content.home.hero.image
  const featuredDish = content.home.featuredDishes[0]
  const supportingDishes = content.home.featuredDishes.slice(1)

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.menu} variant="secondary">
              {content.home.hero.secondaryCta}
            </ButtonLink>
          </>
        }
        description={content.home.hero.description}
        eyebrow={content.home.hero.eyebrow}
        media={content.home.hero.image}
        signals={content.home.hero.signals}
        title={content.home.hero.title}
      />

      <Section
        className="section--signature"
        description="A calm, premium sequence that helps guests decide quickly and reserve with confidence."
        title="Signature experience"
      >
        <div className="signature-layout">
          <div className="card-grid card-grid--3">
            {content.home.highlights.map((item) => (
              <Card
                description={item.description}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
          {primaryAtmosphereImage ? (
            <aside className="signature-visual">
              <img
                alt={primaryAtmosphereImage.alt}
                loading="lazy"
                src={primaryAtmosphereImage.src}
                style={
                  primaryAtmosphereImage.position
                    ? { objectPosition: primaryAtmosphereImage.position }
                    : undefined
                }
              />
              <div className="signature-visual__body">
                <p className="signature-visual__eyebrow">Dining atmosphere</p>
                <p className="signature-visual__title">
                  Designed for intimate conversation and deliberate service pace.
                </p>
              </div>
            </aside>
          ) : null}
        </div>
      </Section>

      <Section
        className="section--featured-dishes"
        description="Selected dishes presented to show plating quality, pacing, and style."
        title="Featured dishes"
      >
        <div className="dish-showcase">
          {featuredDish ? (
            <article className="dish-card dish-card--featured" key={featuredDish.name}>
              <figure className="dish-card__media">
                <img
                  alt={featuredDish.image.alt}
                  loading="lazy"
                  src={featuredDish.image.src}
                  style={
                    featuredDish.image.position
                      ? { objectPosition: featuredDish.image.position }
                      : undefined
                  }
                />
              </figure>
              <div className="dish-card__body">
                <p className="dish-card__course">{featuredDish.course}</p>
                <h3 className="dish-card__title">{featuredDish.name}</h3>
                <p className="dish-card__description">{featuredDish.description}</p>
                <ButtonLink to={routes.menu} variant="quiet">
                  View full menu
                </ButtonLink>
              </div>
            </article>
          ) : null}
          <div className="dish-grid dish-grid--secondary">
            {supportingDishes.map((dish) => (
              <article className="dish-card" key={dish.name}>
                <figure className="dish-card__media">
                  <img
                    alt={dish.image.alt}
                    loading="lazy"
                    src={dish.image.src}
                    style={
                      dish.image.position
                        ? { objectPosition: dish.image.position }
                        : undefined
                    }
                  />
                </figure>
                <div className="dish-card__body">
                  <p className="dish-card__course">{dish.course}</p>
                  <h3 className="dish-card__title">{dish.name}</h3>
                  <p className="dish-card__description">{dish.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="section--menu-preview"
        description={content.menu.intro}
        title="Seasonal menu preview"
      >
        <div className="menu-preview-grid">
          {content.menu.sections.map((section) => (
            <Card
              image={section.image}
              key={section.title}
              title={section.title}
            >
              <p className="menu-preview-note">{section.note}</p>
              <ul className="plain-list menu-preview-list">
                {section.items.slice(0, 2).map((item) => (
                  <li className="menu-preview-list__item" key={item.name}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="section--experience"
        description={content.home.experience.description}
        title={content.home.experience.title}
      >
        <div className="experience-layout">
          <div className="experience-panel">
            <ul className="check-list">
              {content.home.experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="plain-list confidence-list">
              {content.reservations.policies.slice(0, 2).map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>
          <div className="atmosphere-stack">
            {content.home.experience.images.map((image, index) => (
              <figure
                className={`atmosphere-stack__item atmosphere-stack__item--${index + 1}`}
                key={image.src}
              >
                <img
                  alt={image.alt}
                  loading="lazy"
                  src={image.src}
                  style={image.position ? { objectPosition: image.position } : undefined}
                />
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="section--reservation-callout"
        description="Reserve your table in under a minute or call concierge for private dining support."
        title="Ready to book your evening"
      >
        <div className="reservation-callout">
          <div className="reservation-callout__copy">
            <p>
              Secure your preferred service window now. For hosted dinners and
              larger groups, our concierge team can coordinate table format and
              pacing details before arrival.
            </p>
            <p className="reservation-callout__meta">
              Dinner service Tuesday-Sunday • Private room up to 12 guests
            </p>
          </div>
          <div className="reservation-callout__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              Start reservation
            </ButtonLink>
            <ButtonAnchor href={content.brand.phoneHref} size="lg" variant="secondary">
              Call concierge
            </ButtonAnchor>
          </div>
        </div>
      </Section>
    </>
  )
}
