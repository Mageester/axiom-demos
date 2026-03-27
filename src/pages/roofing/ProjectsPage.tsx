import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageHero } from '../../components/ui/PageHero'
import { Section } from '../../components/ui/Section'
import { Reveal } from '../../components/ui/Reveal'

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
        className="roofing-hero"
        description={content.gallery.intro}
        eyebrow="Projects"
        media={featuredProject?.image}
        revealVariant="firm"
        signals={[
          'Representative scopes only',
          'Repair and replacement references',
          'Finished for homes in east Toronto and Durham',
        ]}
        title="Selected references for homeowners comparing scope and finish"
      />

      {featuredProject ? (
        <Section
          className="roofing-section roofing-section--featured"
          description="A clearer read on the kind of roof condition, roof-edge detail, and closeout standard the homeowner was working toward."
          eyebrow="Featured reference"
          revealVariant="firm"
          title={featuredProject.title}
        >
          <Reveal as="article" className="roofing-case-showcase" variant="firm">
            <figure className="roofing-case-showcase__media">
              <img
                alt={featuredProject.image.alt}
                loading="lazy"
                src={featuredProject.image.src}
                style={featuredProject.image.position ? { objectPosition: featuredProject.image.position } : undefined}
              />
            </figure>

            <div className="roofing-case-showcase__body">
              <p className="roofing-case-showcase__eyebrow">{featuredProject.subtitle}</p>
              <p className="roofing-case-showcase__description">{featuredProject.description}</p>

              {featuredProject.facts?.length ? (
                <ul className="plain-list roofing-case-facts">
                  {featuredProject.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              ) : null}

              <div className="roofing-case-showcase__actions">
                <ButtonLink to={routes.reservations}>Discuss similar scope</ButtonLink>
                <ButtonLink to={routes.contact} variant="secondary">
                  Contact office
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Section>
      ) : null}

      <Section
        className="roofing-section roofing-section--references"
        description="A smaller set of references grouped by issue type so the page stays selective instead of looking like a gallery wall."
        eyebrow="More references"
        revealVariant="firm"
        title="Additional projects by issue type"
      >
        <div className="card-grid card-grid--3 roofing-card-grid">
          {remainingProjects.map((project) => (
            <Card
              description={project.description}
              image={project.image}
              key={project.title}
              meta={project.subtitle}
              title={project.title}
            >
              {project.facts?.length ? (
                <ul className="plain-list roofing-card-list roofing-card-list--tight">
                  {project.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
