import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { landscapingDemoContent } from '../../content/landscapingDemoContent'
import { ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function AboutPage() {
  const { routes } = useContext(DemoConfigContext)
  const { hero, principles, process, team } = landscapingDemoContent.about

  return (
    <>
      <Reveal as="section" className="land-route-hero" variant="organic">
        <div className="land-route-hero__copy">
          <p className="land-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="land-block__actions">
            <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
            <ButtonLink to={routes.gallery} variant="secondary">
              View projects
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Standards</p>
          <h2>Northline is positioned around finish quality, controlled scope, and site behavior.</h2>
        </div>

        <div className="land-principle-grid">
          {principles.map((principle) => (
            <article className="land-principle-grid__card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="land-process-band" variant="organic">
        <div>
          <p className="land-process-band__eyebrow">How projects move</p>
          <h2>The process stays small and clear on purpose.</h2>
        </div>
        <div className="land-process-band__steps">
          {process.map((step, index) => (
            <article className="land-process-band__step" key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Team</p>
          <h2>The homeowner should know who is handling design intent, site work, and communication.</h2>
        </div>

        <div className="land-team-grid">
          {team.map((member) => (
            <article className="land-team-grid__card" key={member.name}>
              <p className="land-team-grid__role">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </>
  )
}
