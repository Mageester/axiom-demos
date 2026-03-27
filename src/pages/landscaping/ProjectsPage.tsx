import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { landscapingDemoContent } from '../../content/landscapingDemoContent'
import { ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function ProjectsPage() {
  const { routes } = useContext(DemoConfigContext)
  const { cases, featuredCase, hero } = landscapingDemoContent.projects

  return (
    <>
      <Reveal as="section" className="land-route-hero land-route-hero--projects" variant="organic">
        <div className="land-route-hero__copy">
          <p className="land-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="land-block__actions">
            <ButtonLink to={routes.reservations}>Request pricing</ButtonLink>
            <ButtonLink to={routes.menu} variant="secondary">
              Review services
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">{featuredCase.label}</p>
          <h2>{featuredCase.title}</h2>
          <p>{featuredCase.description}</p>
        </div>

        <article className="land-case-study">
          <figure className="land-case-study__media">
            <img
              alt={featuredCase.image.alt}
              loading="lazy"
              src={featuredCase.image.src}
              style={featuredCase.image.position ? { objectPosition: featuredCase.image.position } : undefined}
            />
          </figure>
          <div className="land-case-study__body">
            <ul className="plain-list land-case-study__facts">
              {featuredCase.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <ul className="plain-list land-case-study__notes">
              {featuredCase.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      <Reveal as="section" className="land-block" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">More project stories</p>
          <h2>Selected references that show how Northline thinks about space, not just scope.</h2>
        </div>

        <div className="land-project-grid">
          {cases.map((story) => (
            <article className="land-project-grid__card" key={story.title}>
              <figure className="land-project-grid__media">
                <img
                  alt={story.image.alt}
                  loading="lazy"
                  src={story.image.src}
                  style={story.image.position ? { objectPosition: story.image.position } : undefined}
                />
              </figure>
              <div className="land-project-grid__body">
                <p className="land-project-grid__label">{story.label}</p>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <ul className="plain-list land-project-grid__details">
                  {story.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="land-block__actions">
          <ButtonLink to={routes.reservations}>Request a quote</ButtonLink>
          <ButtonLink to={routes.contact} variant="secondary">
            Contact office
          </ButtonLink>
        </div>
      </Reveal>
    </>
  )
}
