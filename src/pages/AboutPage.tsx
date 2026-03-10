import { useContext } from 'react'
import { routes } from '../config/routes'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function AboutPage() {
  const { content } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations}>Reserve your visit</ButtonLink>
        }
        description={content.about.intro}
        eyebrow="About"
        media={content.gallery.collections[0]?.image}
        title="People, process, and place"
      />

      <Section title="Our approach">
        <div className="story-layout">
          <div className="story-grid">
            {content.about.story.map((paragraph) => (
              <p className="story-grid__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="about-visual-stack">
            {[content.gallery.collections[1], content.gallery.collections[3]].map((item) =>
              item ? (
                <figure className="about-visual-stack__item" key={item.title}>
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
                  <figcaption>{item.subtitle}</figcaption>
                </figure>
              ) : null
            )}
          </aside>
        </div>
      </Section>

      <Section title="Operating values">
        <div className="card-grid card-grid--3">
          {content.about.values.map((value) => (
            <Card
              description={value.description}
              key={value.title}
              title={value.title}
            />
          ))}
        </div>
      </Section>

      <Section title="Leadership">
        <div className="team-grid">
          {content.about.team.map((member) => (
            <Card
              description={member.bio}
              key={member.name}
              meta={member.role}
              title={member.name}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
