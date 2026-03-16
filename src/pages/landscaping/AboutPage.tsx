import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { LandscapingPageHeader } from '../../components/landscaping/LandscapingPageHeader'
import { ButtonLink } from '../../components/ui/Button'
import { Section } from '../../components/ui/Section'

export function AboutPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const standardsVisual = content.gallery.collections[2]
  const secondaryVisuals = content.gallery.collections.slice(3, 5)

  return (
    <>
      <LandscapingPageHeader
        actions={<ButtonLink to={routes.reservations}>Request a quote</ButtonLink>}
        description={content.about.intro}
        eyebrow="About"
        media={standardsVisual?.image}
        title="A local landscaping company built around finished work and straightforward communication"
        utilityItems={['Residential landscaping only', 'Clear communication and scheduling', 'Clean site standards from first visit to handoff']}
        utilityLabel="Company fit"
        utilityMeta={['Built for homeowners improving the front yard, backyard, or overall outdoor living setup.']}
        utilityTitle="What kind of company Northline is"
      />

      <Section eyebrow="How we work" title="What matters on Northline jobs">
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
        description="These are the standards Northline is built to protect, whether the job is a front-yard refresh or a full backyard upgrade."
        eyebrow="Standards"
        title="What homeowners bring us in for"
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
        description="A small team overseeing planning, layout direction, and project coordination from first call to handoff."
        eyebrow="Team"
        title="Who you deal with"
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
