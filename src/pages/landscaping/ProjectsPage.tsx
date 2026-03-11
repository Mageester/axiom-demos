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
            <ButtonLink to={routes.reservations}>Request estimate</ButtonLink>
            <ButtonLink to={routes.menu} variant="secondary">
              Review services
            </ButtonLink>
          </>
        }
        className="land-page-hero"
        description={content.gallery.intro}
        eyebrow="Projects"
        media={featuredProject?.image}
        signals={['Patios and front entries', 'Lighting and planting', 'Premium residential scope']}
        title="Projects shaped around curb appeal, outdoor living, and cleaner property use"
      />

      {featuredProject ? (
        <Section
          description="A representative Northline project showing the level of planning, finish quality, and property lift the studio is built for."
          eyebrow="Featured project"
          title={featuredProject.title}
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
              <p>{featuredProject.description}</p>
              {featuredProject.facts?.length ? (
                <ul className="plain-list land-inline-facts">
                  {featuredProject.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              ) : null}
              <div className="land-section-actions">
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
        description="Additional project references organized to show the range of exterior upgrades Northline can deliver."
        eyebrow="Gallery"
        title="Additional project references"
      >
        <div className="land-project-grid">
          {remainingProjects.map((project, index) => (
            <article
              className={`land-project-card ${index === 0 ? 'land-project-card--wide' : ''}`}
              key={project.title}
            >
              <figure className="land-project-card__media">
                <img
                  alt={project.image.alt}
                  loading="lazy"
                  src={project.image.src}
                  style={project.image.position ? { objectPosition: project.image.position } : undefined}
                />
              </figure>
              <div className="land-project-card__body">
                <p className="land-project-card__eyebrow">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.facts?.length ? (
                  <ul className="plain-list land-inline-facts land-inline-facts--compact">
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

      <Section
        description="If your property goals line up with this level of scope and finish, the next step is a quick fit review before we book an on-site consultation."
        eyebrow="Next step"
        title="Planning a similar project"
      >
        <div className="land-quote-band">
          <div>
            <p>
              Share the property address, the part of the yard you want to improve,
              and any timing constraints. We will point you to the right next step first.
            </p>
          </div>
          <div className="land-section-actions">
            <ButtonLink to={routes.reservations}>Request estimate</ButtonLink>
            <ButtonLink to={routes.menu} variant="secondary">
              Review services
            </ButtonLink>
          </div>
          <p className="land-quote-band__meta">Serving Toronto, Etobicoke, Mississauga, and Oakville</p>
        </div>
      </Section>
    </>
  )
}
