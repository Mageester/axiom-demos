import { useContext } from 'react'
import { routes } from '../config/routes'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function GalleryPage() {
  const { content } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations} variant="secondary">
            Reserve for this experience
          </ButtonLink>
        }
        description={content.gallery.intro}
        eyebrow="Gallery"
        media={content.gallery.collections[0]?.image}
        title="Atmosphere and service snapshots"
      />

      <Section
        description="A quick scan of atmosphere, plating, and service context before guests reserve."
        title="Curated moments"
      >
        <div className="gallery-mosaic">
          {content.gallery.collections.map((item) => (
            <Card
              description={item.description}
              image={item.image}
              key={item.title}
              meta={item.subtitle}
              title={item.title}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
