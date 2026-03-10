import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
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
          <ButtonLink to={routes.reservations} variant="secondary">
            Request a quote
          </ButtonLink>
        }
        description={content.gallery.intro}
        eyebrow="Projects"
        media={featuredProject?.image}
        title="Project gallery for premium outdoor transformations"
      />

      {featuredProject ? (
        <Section
          description="A closer look at one representative build before browsing the full project set."
          title="Featured transformation"
        >
          <article className="land-feature-project">
            <figure className="land-feature-project__media">
              <img
                alt={featuredProject.image.alt}
                loading="lazy"
                src={featuredProject.image.src}
                style={
                  featuredProject.image.position
                    ? { objectPosition: featuredProject.image.position }
                    : undefined
                }
              />
            </figure>
            <div className="land-feature-project__body">
              <p className="land-feature-project__meta">{featuredProject.subtitle}</p>
              <h2 className="land-feature-project__title">{featuredProject.title}</h2>
              <p>{featuredProject.description}</p>
              <div className="land-section-actions">
                <ButtonLink to={routes.reservations}>Discuss similar scope</ButtonLink>
                <ButtonLink to={routes.menu} variant="secondary">
                  View service lines
                </ButtonLink>
              </div>
            </div>
          </article>
        </Section>
      ) : null}

      <Section
        description="Additional project references organized for quick scan by problem type and finish style."
        title="Additional project references"
      >
        <div className="gallery-mosaic">
          {remainingProjects.map((project) => (
            <Card
              description={project.description}
              image={project.image}
              key={project.title}
              meta={project.subtitle}
              title={project.title}
            />
          ))}
        </div>
      </Section>
    </>
  )
}