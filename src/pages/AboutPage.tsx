import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function AboutPage() {
  const { content, routes } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations}>Reserve a table</ButtonLink>
        }
        description={content.about.intro}
        eyebrow="About"
        media={content.gallery.collections[0]?.image}
        title="Our kitchen and dining room"
      />

      <Section title="Our story">
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

      <Section title="What guides service">
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

      <Section title="Kitchen and floor team">
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
