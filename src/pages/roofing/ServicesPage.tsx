import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

export function ServicesPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const repairScope = content.menu.sections[0]
  const replacementScope = content.menu.sections[1]
  const supportScope = content.menu.sections[2]
  const decisionCards = [
    {
      eyebrow: 'Repair-led',
      title: repairScope?.title ?? 'Repair-led work',
      description:
        'Best when the failure point is isolated and the rest of the roof still has usable life.',
    },
    {
      eyebrow: 'Replacement-led',
      title: replacementScope?.title ?? 'Replacement-led work',
      description:
        'Best when wear is broad, the system is nearing the end of service life, or patching would only delay the real scope.',
    },
    {
      eyebrow: 'Support work',
      title: supportScope?.title ?? 'Support work',
      description:
        'Best when siding, soffit, fascia, or drainage details need to be handled alongside the roofline.',
    },
  ]

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonLink to={routes.gallery} variant="secondary">
              View projects
            </ButtonLink>
          </>
        }
        className="roofing-hero"
        description={content.menu.intro}
        eyebrow="Services"
        media={replacementScope?.image}
        revealVariant="firm"
        signals={[
          'Inspections first',
          'Repairs, replacements, and roof-edge work',
          'Toronto & Durham Region',
        ]}
        title="Roofing services that are easier to sort out"
      />

      <Section
        className="roofing-section roofing-section--services"
        description="The first pass is meant to make the next step obvious, not to overload the homeowner with jargon."
        eyebrow="Scope"
        revealVariant="firm"
        title="What the work usually turns into after the inspection"
      >
        <div className="card-grid card-grid--3 roofing-card-grid">
          {content.menu.sections.map((section) => (
            <Card
              description={section.items[0]?.description}
              image={section.image}
              key={section.title}
              meta={section.note}
              title={section.title}
            >
              {section.highlights?.length ? (
                <ul className="plain-list roofing-card-list">
                  {section.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="roofing-section roofing-section--decision"
        description="When the roof is still serviceable, the job is usually a repair. When the wear is broad, the right answer is a replacement. Support scopes handle the edges that keep water moving off the home."
        eyebrow="Decision guide"
        revealVariant="firm"
        title="What homeowners are usually deciding between"
      >
        <div className="roofing-decision-grid">
          {decisionCards.map((card) => (
            <Card
              description={card.description}
              key={card.title}
              meta={card.eyebrow}
              title={card.title}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
