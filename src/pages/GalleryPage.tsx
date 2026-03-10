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
        media={content.gallery.collections[3]?.image ?? leadMoment?.image}
        title="Evenings at Atelier Meridian"
      />

      <Section
        description="A closer look at the room, the plates, and the pace of dinner."
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
        description="Scenes from the dining room, bar, and kitchen as the night unfolds."
        title="Around the room"
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
        description="If you already have a date in mind, we would be glad to host you."
        title="Join us for dinner"
      >
        <div className="reservation-callout reservation-callout--gallery">
          <div className="reservation-callout__copy">
            <p>
              Reserve online for standard tables, or contact our reservations
              team for private room dinners and hosted occasions.
            </p>
            <p className="reservation-callout__meta">
              Reservations support available daily before dinner service
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
              Reserve a table
            </ButtonLink>
            <ButtonLink size="lg" to={routes.contact} variant="secondary">
              Private dining enquiry
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
