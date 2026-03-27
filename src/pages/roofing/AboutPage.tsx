import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { roofingDemoContent } from '../../content/roofingDemoContent'
import { ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function AboutPage() {
  const { routes } = useContext(DemoConfigContext)
  const { hero, operations, pillars, team } = roofingDemoContent.about

  return (
    <>
      <Reveal as="section" className="roof-route-hero" variant="firm">
        <div className="roof-route-hero__copy">
          <p className="roof-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="roof-command-deck__actions">
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonLink to={routes.contact} variant="secondary">
              Contact office
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">Pillars</p>
          <h2 className="roof-block__title">The trust story is operational, not decorative.</h2>
        </div>

        <div className="roof-standard-grid">
          {pillars.map((pillar) => (
            <article className="roof-standard-grid__card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="roof-operations-band" variant="firm">
        <div>
          <p className="roof-operations-band__eyebrow">How the work moves</p>
          <h2>Blackridge should feel controlled from triage through closeout.</h2>
        </div>
        <div className="roof-operations-band__steps">
          {operations.map((step, index) => (
            <article className="roof-operations-band__step" key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">Team</p>
          <h2 className="roof-block__title">Clear roles make the inspection and execution feel credible.</h2>
        </div>

        <div className="roof-team-grid">
          {team.map((member) => (
            <article className="roof-team-grid__card" key={member.name}>
              <p className="roof-team-grid__role">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </>
  )
}
