import { useContext } from 'react'
import { routes } from '../config/routes'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function HomePage() {
  const { content } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.menu} variant="secondary">
              {content.home.hero.secondaryCta}
            </ButtonLink>
          </>
        }
        description={content.home.hero.description}
        eyebrow={content.home.hero.eyebrow}
        title={content.home.hero.title}
      />

      <Section
        description="Built as reusable feature cards for premium hospitality demos."
        title="Signature experience"
      >
        <div className="card-grid card-grid--3">
          {content.home.highlights.map((item) => (
            <Card
              description={item.description}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </Section>

      <Section
        description={content.menu.intro}
        title="Seasonal menu preview"
      >
        <div className="menu-preview-grid">
          {content.menu.sections.map((section) => (
            <Card key={section.title} title={section.title}>
              <p className="menu-preview-note">{section.note}</p>
              <ul className="plain-list menu-preview-list">
                {section.items.slice(0, 2).map((item) => (
                  <li className="menu-preview-list__item" key={item.name}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        description={content.home.experience.description}
        title={content.home.experience.title}
      >
        <div className="experience-panel">
          <ul className="check-list">
            {content.home.experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="experience-panel__actions">
            <ButtonLink to={routes.reservations}>Start reservation</ButtonLink>
            <ButtonLink to={routes.about} variant="quiet">
              Learn our story
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
