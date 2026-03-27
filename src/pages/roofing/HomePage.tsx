import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { BeforeAfterCompare } from '../../components/ui/BeforeAfterCompare'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const serviceScopes = content.menu.sections
  const inspectionSteps = [
    {
      label: '01',
      title: 'Inspect',
      description: content.home.experience.points[0],
    },
    {
      label: '02',
      title: 'Set scope',
      description: content.home.experience.points[1],
    },
    {
      label: '03',
      title: 'Close out',
      description: content.home.experience.points[2],
    },
  ]
  const beforeAfter = content.home.extras?.beforeAfter

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonAnchor size="lg" href={content.brand.phoneHref} variant="secondary">
              Call office
            </ButtonAnchor>
          </>
        }
        className="roofing-hero"
        description={content.home.hero.description}
        eyebrow={content.home.hero.eyebrow}
        media={content.home.hero.image}
        revealVariant="firm"
        signals={content.home.hero.signals}
        title={content.home.hero.title}
      />

      <Section
        className="roofing-section roofing-section--services"
        description="Use the first visit to confirm whether the issue is a repair, a replacement, or roof-edge support."
        eyebrow="Services"
        revealVariant="firm"
        title="Roofing work organized by urgency and condition"
      >
        <div className="card-grid card-grid--3 roofing-card-grid">
          {serviceScopes.map((scope) => (
            <Card
              description={scope.items[0]?.description}
              image={scope.image}
              key={scope.title}
              meta={scope.note}
              title={scope.title}
            >
              {scope.highlights?.length ? (
                <ul className="plain-list roofing-card-list">
                  {scope.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="roofing-section roofing-section--process"
        description="The job stays tight when the first review, the scope, and the handoff all line up."
        eyebrow="Process"
        revealVariant="firm"
        title="What happens from inspection to closeout"
      >
        <div className="roofing-step-grid">
          {inspectionSteps.map((step) => (
            <Reveal as="article" className="roofing-step-card" key={step.label} variant="firm">
              <p className="roofing-step-card__label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {beforeAfter ? (
        <Section
          className="roofing-section roofing-section--comparison"
          description={beforeAfter.summary}
          eyebrow="Before / after"
          revealVariant="firm"
          title={beforeAfter.title}
        >
          <div className="roofing-comparison">
            <BeforeAfterCompare
              after={beforeAfter.after}
              before={beforeAfter.before}
              className="roofing-comparison__compare"
            />

            <div className="roofing-comparison__aside">
              <p className="roofing-comparison__eyebrow">What changed</p>
              <ul className="plain-list roofing-comparison__list">
                {beforeAfter.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="roofing-comparison__actions">
                <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
                <ButtonLink to={routes.gallery} variant="secondary">
                  View more work
                </ButtonLink>
              </div>
            </div>
          </div>
        </Section>
      ) : null}

      <Reveal as="section" className="roofing-cta-band" variant="firm">
        <div className="roofing-cta-band__copy">
          <p className="roofing-cta-band__eyebrow">Inspection request</p>
          <h2>Send the address, the issue, and a few photos.</h2>
          <p>We will confirm the next step after the first review.</p>
        </div>

        <div className="roofing-cta-band__actions">
          <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
          <ButtonAnchor href={content.brand.emailHref} variant="secondary">
            Email photos
          </ButtonAnchor>
        </div>

        <p className="roofing-cta-band__meta">Serving Toronto, Scarborough, Pickering, Ajax, and Whitby</p>
      </Reveal>
    </>
  )
}
