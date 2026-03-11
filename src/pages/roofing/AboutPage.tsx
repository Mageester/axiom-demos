import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

export function AboutPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const visualOne = content.gallery.collections[2]
  const visualTwo = content.gallery.collections[4]

  return (
    <>
      <PageHero
        actions={<ButtonLink to={routes.reservations}>Request inspection</ButtonLink>}
        className="roof-page-hero"
        description={content.about.intro}
        eyebrow="About"
        media={visualOne?.image}
        signals={['Inspection-led recommendations', 'Clear scope communication', 'Clean site standards']}
        title="A roofing and exterior contractor built around clarity, protection, and site discipline"
      />

      <Section eyebrow="Approach" title="How Blackridge runs the work">
        <div className="roof-story-layout">
          <div className="roof-story-layout__copy">
            {content.about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="roof-story-layout__visuals">
            {[visualOne, visualTwo].map((item) =>
              item ? (
                <figure className="roof-story-layout__item" key={item.title}>
                  <img
                    alt={item.image.alt}
                    loading="lazy"
                    src={item.image.src}
                    style={item.image.position ? { objectPosition: item.image.position } : undefined}
                  />
                  <figcaption>{item.subtitle}</figcaption>
                </figure>
              ) : null,
            )}
          </div>
        </div>
      </Section>

      <Section
        description="These are the operating standards Blackridge is meant to protect on every project."
        eyebrow="Standards"
        title="What the business is known for"
      >
        <div className="roof-fit-grid">
          {content.about.values.map((value) => (
            <article className="roof-fit-panel" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="A small leadership team handling inspections, project coordination, and on-site execution standards."
        eyebrow="Team"
        title="Leadership"
      >
        <div className="roof-team-grid">
          {content.about.team.map((member) => (
            <article className="roof-team-panel" key={member.name}>
              <p className="roof-team-panel__role">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
