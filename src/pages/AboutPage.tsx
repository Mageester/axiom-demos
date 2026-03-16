import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function AboutPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const chef = content.about.team[0]
  const diningExperience = content.home.extras?.diningExperience ?? []

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations}>Reserve a table</ButtonLink>
        }
        description={content.about.intro}
        eyebrow="About"
        media={content.gallery.collections[0]?.image}
        title="The room, the kitchen, and the pace of the night"
      />

      <Section title="The dining room">
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

      {chef ? (
        <Section title="Executive chef">
          <div className="restaurant-story-layout">
            <div className="restaurant-story-layout__copy">
              <p className="restaurant-home-section__eyebrow">{chef.role}</p>
              <h2 className="restaurant-home-section__title">{chef.name}</h2>
              <p>{chef.bio}</p>
              <p>
                The kitchen is built around shorter seasonal cycles, quieter
                plates, and enough restraint that the room still feels like a
                place to spend the evening rather than just move through
                courses.
              </p>
            </div>

            {content.gallery.collections[4] ? (
              <figure className="restaurant-story-layout__media">
                <img
                  alt={content.gallery.collections[4].image.alt}
                  loading="lazy"
                  src={content.gallery.collections[4].image.src}
                  style={
                    content.gallery.collections[4].image.position
                      ? { objectPosition: content.gallery.collections[4].image.position }
                      : undefined
                  }
                />
              </figure>
            ) : null}
          </div>
        </Section>
      ) : null}

      {diningExperience.length ? (
        <Section title="Dining experience">
          <div className="restaurant-values-grid">
            {diningExperience.map((item) => (
              <article className="restaurant-value-panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      <Section title="What regulars come back for">
        <div className="restaurant-values-grid">
          {content.about.values.map((value) => (
            <article className="restaurant-value-panel" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="The people behind the room">
        <div className="restaurant-team-grid">
          {content.about.team.map((member) => (
            <article className="restaurant-team-panel" key={member.name}>
              <p className="restaurant-team-panel__role">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
