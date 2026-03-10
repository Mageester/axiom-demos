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
        title="Atmosphere and service snapshots"
      />

      <Section
        description="Structured gallery objects designed to be reused across hospitality and service demos."
        title="Curated moments"
      >
        <div className="card-grid card-grid--3">
          {content.gallery.collections.map((item) => (
            <Card
              description={item.description}
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
