import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)

  const featuredDish = content.home.featuredDishes[0]
  const supportingDishes = content.home.featuredDishes.slice(1, 3)
  const atmosphereMoments = content.gallery.collections.slice(0, 3)
  const privateDiningMoment =
    content.gallery.collections.find((item) => item.title.includes('Private Dining'))
    ?? content.gallery.collections.find((item) => item.title.includes('The Studio'))
    ?? content.gallery.collections[2]
    ?? content.gallery.collections[0]
  const philosophyMoment =
    content.gallery.collections.find((item) => item.title.includes('Chef Counter'))
    ?? content.gallery.collections.find((item) => item.title.includes('At The Pass'))
    ?? content.gallery.collections[4]
    ?? content.gallery.collections[0]
  const reservationVisual =
    privateDiningMoment?.image
    ?? content.home.experience.images[1]
    ?? content.gallery.collections[content.gallery.collections.length - 1]?.image
    ?? content.home.hero.image
  const leadChef = content.about.team[0]
  const diningExperience = content.home.extras?.diningExperience ?? []
  const guestNotes = content.home.extras?.guestNotes ?? []

  return (
    <>
      <Reveal as="section" className="restaurant-home-hero" variant="soft">
        {content.home.hero.image ? (
          <figure className="restaurant-home-hero__media">
            <img
              alt={content.home.hero.image.alt}
              loading="eager"
              src={content.home.hero.image.src}
              style={
                content.home.hero.image.position
                  ? { objectPosition: content.home.hero.image.position }
                  : undefined
              }
            />
          </figure>
        ) : null}

        <div className="restaurant-home-hero__veil" />
        <div className="restaurant-home-hero__content">
          {content.home.hero.eyebrow ? (
            <p className="restaurant-home-hero__eyebrow">{content.home.hero.eyebrow}</p>
          ) : null}
          <h1 className="restaurant-home-hero__title">{content.home.hero.title}</h1>
          <p className="restaurant-home-hero__description">{content.home.hero.description}</p>

          <div className="restaurant-home-hero__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            {content.home.hero.secondaryCta ? (
              <ButtonLink className="restaurant-home-hero__quiet" size="lg" to={routes.menu} variant="quiet">
                {content.home.hero.secondaryCta}
              </ButtonLink>
            ) : null}
          </div>

          {content.home.hero.signals?.length ? (
            <ul className="plain-list restaurant-home-hero__signals">
              {content.home.hero.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </Reveal>

      <section className="restaurant-house-notes" aria-label="Atelier Meridian room notes">
        {content.home.highlights.map((highlight, index) => (
          <Reveal
            as="article"
            className="restaurant-house-notes__item"
            delay={index * 80}
            key={highlight.title}
            variant="soft"
          >
            <p className="restaurant-house-notes__index">0{index + 1}</p>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="restaurant-home-section" variant="soft">
        <header className="restaurant-home-section__header">
          <p className="restaurant-home-section__eyebrow">Tonight at {content.brand.name}</p>
          <h2 className="restaurant-home-section__title">Dinner this week</h2>
        </header>

        <div className="restaurant-tonight-layout">
          {featuredDish ? (
            <Reveal as="article" className="restaurant-dish-feature" key={featuredDish.name} variant="soft">
              <figure className="restaurant-dish-feature__media">
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
              <div className="restaurant-dish-feature__body">
                <p className="restaurant-dish-feature__course">{featuredDish.course}</p>
                <h3>{featuredDish.name}</h3>
                <p>{featuredDish.description}</p>
                <ButtonLink to={routes.menu} variant="quiet">
                  See dinner menu
                </ButtonLink>
              </div>
            </Reveal>
          ) : null}

          <div className="restaurant-dish-stack">
            {supportingDishes.map((dish, index) => (
              <Reveal
                as="article"
                className="restaurant-dish-stack__item"
                delay={120 + index * 80}
                key={dish.name}
                variant="soft"
              >
                <figure>
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
                <div>
                  <p className="restaurant-dish-feature__course">{dish.course}</p>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="restaurant-home-section" variant="soft">
        <header className="restaurant-home-section__header">
          <p className="restaurant-home-section__eyebrow">Dining atmosphere</p>
          <h2 className="restaurant-home-section__title">From first seating to late evening</h2>
        </header>

        <div className="restaurant-atmosphere-grid">
          {atmosphereMoments.map((moment, index) => (
            <Reveal
              as="figure"
              className="restaurant-atmosphere-grid__item"
              delay={index * 90}
              key={moment.title}
              variant="soft"
            >
              <img
                alt={moment.image.alt}
                loading="lazy"
                src={moment.image.src}
                style={
                  moment.image.position
                    ? { objectPosition: moment.image.position }
                    : undefined
                }
              />
              <figcaption>
                <span>{moment.subtitle}</span>
                <p>{moment.title}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {privateDiningMoment ? (
        <Reveal as="section" className="restaurant-home-section" variant="soft">
          <div className="restaurant-private-layout">
            <figure className="restaurant-private-layout__media">
              <img
                alt={privateDiningMoment.image.alt}
                loading="lazy"
                src={privateDiningMoment.image.src}
                style={
                  privateDiningMoment.image.position
                    ? { objectPosition: privateDiningMoment.image.position }
                    : undefined
                }
              />
            </figure>
            <div className="restaurant-private-layout__body">
              <p className="restaurant-home-section__eyebrow">Private dining</p>
              <h2 className="restaurant-home-section__title">The Studio for celebrations and hosted tables</h2>
              <p>{privateDiningMoment.description}</p>
              <p>
                For birthdays, business dinners, and family occasions, we can
                help you plan a menu and service style that fits your evening.
              </p>
              <div className="restaurant-private-layout__actions">
                <ButtonLink to={routes.contact}>Plan private dining</ButtonLink>
                <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
                  Call reservations
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="restaurant-home-section" variant="soft">
        <div className="restaurant-story-layout">
          <div className="restaurant-story-layout__copy">
            <p className="restaurant-home-section__eyebrow">From the kitchen</p>
            <h2 className="restaurant-home-section__title">A short menu, quiet service, and a room paced for conversation</h2>
            <p>{content.about.intro}</p>
            <p>{content.about.story[0]}</p>
            {leadChef ? (
              <div className="restaurant-story-layout__chef">
                <p>{leadChef.name}</p>
                <span>{leadChef.role}</span>
              </div>
            ) : null}
          </div>

          {philosophyMoment ? (
            <figure className="restaurant-story-layout__media">
              <img
                alt={philosophyMoment.image.alt}
                loading="lazy"
                src={philosophyMoment.image.src}
                style={
                  philosophyMoment.image.position
                    ? { objectPosition: philosophyMoment.image.position }
                    : undefined
                }
              />
            </figure>
          ) : null}
        </div>
      </Reveal>

      {diningExperience.length ? (
        <Reveal as="section" className="restaurant-home-section" variant="soft">
          <header className="restaurant-home-section__header">
            <p className="restaurant-home-section__eyebrow">Dining experience</p>
            <h2 className="restaurant-home-section__title">The room, the harbour, and the way dinner is paced</h2>
          </header>
          <div className="restaurant-values-grid">
            {diningExperience.map((item) => (
              <article className="restaurant-value-panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="restaurant-home-section" variant="soft">
        <div className="restaurant-reservation-module">
          <div className="restaurant-reservation-module__copy">
            <p className="restaurant-home-section__eyebrow">Reservations</p>
            <h2 className="restaurant-home-section__title">Book dinner or plan a hosted table</h2>
            <p>{content.reservations.intro}</p>
            <ul className="plain-list restaurant-reservation-module__policies">
              {content.reservations.policies.slice(0, 2).map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
            <div className="restaurant-reservation-module__actions">
              <ButtonLink size="lg" to={routes.reservations}>
                Book dinner
              </ButtonLink>
              <ButtonAnchor href={content.brand.phoneHref} size="lg" variant="secondary">
                Call reservations
              </ButtonAnchor>
            </div>
          </div>

          {reservationVisual ? (
            <figure className="restaurant-reservation-module__media">
              <img
                alt={reservationVisual.alt}
                loading="lazy"
                src={reservationVisual.src}
                style={
                  reservationVisual.position
                    ? { objectPosition: reservationVisual.position }
                    : undefined
                }
              />
            </figure>
          ) : null}
        </div>
      </Reveal>

      {guestNotes.length ? (
        <Reveal as="section" className="restaurant-home-section" variant="soft">
          <header className="restaurant-home-section__header">
            <p className="restaurant-home-section__eyebrow">Guest notes</p>
            <h2 className="restaurant-home-section__title">Why tables tend to choose this room</h2>
          </header>
          <div className="restaurant-values-grid">
            {guestNotes.map((item) => (
              <article className="restaurant-value-panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="restaurant-home-section restaurant-home-section--visit" variant="soft">
        <header className="restaurant-home-section__header">
          <p className="restaurant-home-section__eyebrow">Before you arrive</p>
          <h2 className="restaurant-home-section__title">Find the dining room and plan the evening</h2>
        </header>
        <div className="restaurant-visit-grid">
          <Reveal as="article" className="restaurant-visit-grid__panel" variant="soft">
            <h3>Location</h3>
            <p>{content.brand.address}</p>
            <ButtonAnchor href={content.contact.details[2]?.href ?? routes.contact} variant="quiet">
              View on map
            </ButtonAnchor>
          </Reveal>

          <Reveal as="article" className="restaurant-visit-grid__panel" delay={80} variant="soft">
            <h3>Service windows</h3>
            <ul className="plain-list">
              {content.brand.hours.slice(0, 3).map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="restaurant-visit-grid__panel" delay={160} variant="soft">
            <h3>Reservation channels</h3>
            <ul className="plain-list">
              <li>
                <a href={content.brand.phoneHref}>{content.brand.phone}</a>
              </li>
              <li>
                <a href={content.brand.emailHref}>{content.brand.email}</a>
              </li>
            </ul>
            <ButtonLink to={routes.contact} variant="quiet">
              Email reservations
            </ButtonLink>
          </Reveal>
        </div>
      </Reveal>
    </>
  )
}
