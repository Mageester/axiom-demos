import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { RoofingPageHeader } from '../../components/roofing/RoofingPageHeader'
import { ButtonLink } from '../../components/ui/Button'

export function ProjectsPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredProject = content.gallery.collections[0]
  const remainingProjects = content.gallery.collections.slice(1)

  return (
    <>
      <RoofingPageHeader
        actions={
          <>
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonLink to={routes.menu} variant="secondary">
              View services
            </ButtonLink>
          </>
        }
        description={content.gallery.intro}
        eyebrow="Projects"
        media={featuredProject?.image}
        meta={['Repair, replacement, roofline support, and drainage references', 'Homes across east Toronto and Durham']}
        summaryItems={[
          'Representative scopes only, organized by issue type and finish level',
          'Useful for comparing repair jobs against full replacement work',
          'Best read as examples of condition, scope, and closeout quality',
        ]}
        summaryLabel="How to read these references"
        title="Project references for homeowners comparing issue type, scope, and finish standard"
      />

      {featuredProject ? (
        <section className="roof-block">
          <header className="roof-block__header">
            <p className="roof-block__eyebrow">Featured reference</p>
            <h2 className="roof-block__title">{featuredProject.title}</h2>
            <p className="roof-block__description">
              A representative scope showing the kind of roof condition, roof-edge detail, and closeout standard Blackridge is usually hired to handle.
            </p>
          </header>

          <article className="roof-casefile">
            <figure className="roof-casefile__media">
              <img
                alt={featuredProject.image.alt}
                loading="lazy"
                src={featuredProject.image.src}
                style={featuredProject.image.position ? { objectPosition: featuredProject.image.position } : undefined}
              />
            </figure>
            <div className="roof-casefile__body">
              <div className="roof-casefile__intro">
                <p className="roof-block__eyebrow">{featuredProject.subtitle}</p>
                <p>{featuredProject.description}</p>
              </div>
              {featuredProject.facts?.length ? (
                <ul className="plain-list roof-chip-list">
                  {featuredProject.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              ) : null}
              <div className="roof-command-deck__actions">
                <ButtonLink to={routes.reservations}>Discuss similar scope</ButtonLink>
                <ButtonLink to={routes.contact} variant="secondary">
                  Contact office
                </ButtonLink>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <section className="roof-block">
        <header className="roof-block__header">
          <p className="roof-block__eyebrow">Project register</p>
          <h2 className="roof-block__title">Additional references by issue type</h2>
        </header>

        <div className="roof-case-grid">
          {remainingProjects.map((project) => (
            <article className="roof-case-card" key={project.title}>
              <figure className="roof-case-card__media">
                <img
                  alt={project.image.alt}
                  loading="lazy"
                  src={project.image.src}
                  style={project.image.position ? { objectPosition: project.image.position } : undefined}
                />
              </figure>
              <div className="roof-case-card__body">
                <p className="roof-block__eyebrow">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.facts?.length ? (
                  <ul className="plain-list roof-chip-list roof-chip-list--tight">
                    {project.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
