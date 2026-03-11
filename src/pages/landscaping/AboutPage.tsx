import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

export function AboutPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const standardsVisual = content.gallery.collections[2]
  const secondaryVisuals = content.gallery.collections.slice(3, 5)

  return (
    <>
      <PageHero
        actions={<ButtonLink to={routes.reservations}>Request estimate</ButtonLink>}
        className="land-page-hero"
        description={content.about.intro}
        eyebrow="About"
        media={standardsVisual?.image}
        signals={['Premium residential scope', 'Design-build planning', 'Clean site standards']}
        title="A landscaping studio built around planning, finish quality, and homeowner trust"
      />

      <Section eyebrow="Approach" title="How Northline runs a project">
        <div className="story-layout">
          <div className="story-grid">
            {content.about.story.map((paragraph) => (
              <p className="story-grid__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="about-visual-stack">
            {secondaryVisuals.map((item) => (
              <figure className="about-visual-stack__item" key={item.title}>
                <img
                  alt={item.image.alt}
                  loading="lazy"
                  src={item.image.src}
                  style={item.image.position ? { objectPosition: item.image.position } : undefined}
                />
                <figcaption>{item.subtitle}</figcaption>
              </figure>
            ))}
          </aside>
        </div>
      </Section>

      <Section
        description="These are the standards Northline is built to protect, regardless of project size."
        eyebrow="Standards"
        title="What the business is known for"
      >
        <div className="land-fit-grid">
          {content.about.values.map((value) => (
            <article className="land-fit-panel" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="A small leadership team overseeing scope planning, design direction, and project coordination from first call to handoff."
        eyebrow="Team"
        title="Leadership"
      >
        <div className="land-team-grid">
          {content.about.team.map((member) => (
            <article className="land-team-panel" key={member.name}>
              <p className="land-team-panel__role">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
