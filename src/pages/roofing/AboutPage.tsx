import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

export function AboutPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const visual = content.gallery.collections[2]

  return (
    <>
      <PageHero
        actions={<ButtonLink to={routes.reservations}>Request inspection</ButtonLink>}
        className="roofing-hero"
        description={content.about.intro}
        eyebrow="About"
        media={visual?.image}
        revealVariant="firm"
        signals={[
          'Inspection-led scope review',
          'Property protection and cleanup standards',
          'Roofing, roof-edge, and drainage work',
        ]}
        title="A roofing contractor built around clearer scope and tighter site standards"
      />

      <Section
        className="roofing-section roofing-section--values"
        description="These are the operating standards the company is meant to be known for."
        eyebrow="Operating standards"
        revealVariant="firm"
        title="What Blackridge is trying to do well"
      >
        <div className="card-grid card-grid--3 roofing-card-grid">
          {content.about.values.map((value) => (
            <Card description={value.description} key={value.title} title={value.title} />
          ))}
        </div>
      </Section>

      <Section
        className="roofing-section roofing-section--team"
        description="Clear roles keep the inspection, scheduling, and site handoff from becoming a mess."
        eyebrow="Team"
        revealVariant="firm"
        title="Inspection, coordination, and site operations"
      >
        <div className="card-grid card-grid--3 roofing-card-grid">
          {content.about.team.map((member) => (
            <Card description={member.bio} key={member.name} meta={member.role} title={member.name} />
          ))}
        </div>
      </Section>
    </>
  )
}
