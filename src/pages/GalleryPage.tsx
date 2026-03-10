import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function GalleryPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const [leadMoment, ...remainingMoments] = content.gallery.collections
  const supportMoments = remainingMoments.slice(0, 2)
  const galleryWallMoments = remainingMoments.slice(2)
  const reservationMoment = content.gallery.collections[content.gallery.collections.length - 1]

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations}>
            Reserve a table
          </ButtonLink>
        }
        description={content.gallery.intro}
        eyebrow="Gallery"
        media={leadMoment?.image}
        title="Atmosphere and service snapshots"
      />

      <Section
        description="An image-first look at room mood, plating style, and service details."
        title="Evening moments"
      >
        <div className="gallery-feature-grid">
          {leadMoment ? (
            <figure className="gallery-feature-main">
              <img
                alt={leadMoment.image.alt}
                loading="eager"
                src={leadMoment.image.src}
                style={
                  leadMoment.image.position
                    ? { objectPosition: leadMoment.image.position }
                    : undefined
                }
              />
              <figcaption>
                <p className="gallery-feature-main__title">{leadMoment.title}</p>
                <p className="gallery-feature-main__meta">{leadMoment.subtitle}</p>
              </figcaption>
            </figure>
          ) : null}
          <div className="gallery-feature-stack">
            {supportMoments.map((item) => (
              <figure className="gallery-feature-stack__item" key={item.title}>
                <img
                  alt={item.image.alt}
                  loading="lazy"
                  src={item.image.src}
                  style={
                    item.image.position
                      ? { objectPosition: item.image.position }
                      : undefined
                  }
                />
                <figcaption>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section
        description="Curated gallery wall designed to help guests choose the right visit format quickly."
        title="Gallery wall"
      >
        <div className="gallery-wall">
          {galleryWallMoments.map((item, index) => (
            <figure className={`gallery-wall__item gallery-wall__item--${index + 1}`} key={item.title}>
              <img
                alt={item.image.alt}
                loading="lazy"
                src={item.image.src}
                style={
                  item.image.position
                    ? { objectPosition: item.image.position }
                    : undefined
                }
              />
              <figcaption>
                <p>{item.title}</p>
                <span>{item.subtitle}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        className="section--gallery-reserve"
        description="Select your preferred evening and reserve directly."
        title="Ready to reserve"
      >
        <div className="reservation-callout reservation-callout--gallery">
          <div className="reservation-callout__copy">
            <p>
              Use online booking for standard tables or contact concierge for
              private studio seating and hosted occasions.
            </p>
            <p className="reservation-callout__meta">
              Concierge support available daily before evening service
            </p>
          </div>
          {reservationMoment ? (
            <figure className="reservation-callout__media">
              <img
                alt={reservationMoment.image.alt}
                loading="lazy"
                src={reservationMoment.image.src}
                style={
                  reservationMoment.image.position
                    ? { objectPosition: reservationMoment.image.position }
                    : undefined
                }
              />
            </figure>
          ) : null}
          <div className="reservation-callout__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              Start reservation
            </ButtonLink>
            <ButtonLink size="lg" to={routes.contact} variant="secondary">
              Contact concierge
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
