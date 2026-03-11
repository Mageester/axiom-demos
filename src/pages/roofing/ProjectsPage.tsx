import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'

export function ProjectsPage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredProject = content.gallery.collections[0]
  const remainingProjects = content.gallery.collections.slice(1)

  return (
    <>
      <PageHero
        actions={
          <>
            <ButtonLink to={routes.reservations}>Request inspection</ButtonLink>
            <ButtonLink to={routes.menu} variant="secondary">
              View services
            </ButtonLink>
          </>
        }
        className="roof-page-hero"
        description={content.gallery.intro}
        eyebrow="Projects"
        media={featuredProject?.image}
        signals={['Repair and replacement', 'Roofline detail work', 'Exterior envelope support']}
        title="Project references for repair, replacement, and full exterior scopes"
      />

      {featuredProject ? (
        <Section
          description="A representative Blackridge scope showing how roofing and exterior work is framed, documented, and delivered."
          eyebrow="Featured reference"
          title={featuredProject.title}
        >
          <article className="roof-project-spotlight">
            <figure className="roof-project-spotlight__media">
              <img
                alt={featuredProject.image.alt}
                loading="lazy"
                src={featuredProject.image.src}
                style={featuredProject.image.position ? { objectPosition: featuredProject.image.position } : undefined}
              />
            </figure>
            <div className="roof-project-spotlight__body">
              <p className="roof-section-eyebrow">{featuredProject.subtitle}</p>
              <p>{featuredProject.description}</p>
              {featuredProject.facts?.length ? (
                <ul className="plain-list roof-inline-facts">
                  {featuredProject.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              ) : null}
              <div className="roof-section-actions">
                <ButtonLink to={routes.reservations}>Discuss similar scope</ButtonLink>
                <ButtonLink to={routes.contact} variant="secondary">
                  Contact office
                </ButtonLink>
              </div>
            </div>
          </article>
        </Section>
      ) : null}

      <Section
        description="Additional roofing and exterior references organized for homeowners comparing issue type, scope level, and finish quality."
        eyebrow="Gallery"
        title="Additional project references"
      >
        <div className="roof-project-grid">
          {remainingProjects.map((project, index) => (
            <article className={`roof-project-card ${index === 0 ? 'roof-project-card--wide' : ''}`} key={project.title}>
              <figure className="roof-project-card__media">
                <img
                  alt={project.image.alt}
                  loading="lazy"
                  src={project.image.src}
                  style={project.image.position ? { objectPosition: project.image.position } : undefined}
                />
              </figure>
              <div className="roof-project-card__body">
                <p className="roof-section-eyebrow">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.facts?.length ? (
                  <ul className="plain-list roof-inline-facts roof-inline-facts--compact">
                    {project.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
