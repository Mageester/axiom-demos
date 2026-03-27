import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { roofingDemoContent } from '../../content/roofingDemoContent'
import { ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function ProjectsPage() {
  const { routes } = useContext(DemoConfigContext)
  const { files, hero } = roofingDemoContent.projects

  return (
    <>
      <Reveal as="section" className="roof-route-hero" variant="firm">
        <div className="roof-route-hero__copy">
          <p className="roof-route-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </Reveal>

      <Reveal as="section" className="roof-block" variant="firm">
        <div className="roof-block__header">
          <p className="roof-block__eyebrow">Case references</p>
          <h2 className="roof-block__title">Each reference is framed by the problem that had to be solved.</h2>
        </div>

        <div className="roof-reference-grid">
          {files.map((file) => (
            <article className="roof-reference-grid__card" key={file.title}>
              {file.image ? (
                <figure className="roof-reference-grid__media">
                  <img
                    alt={file.image.alt}
                    loading="lazy"
                    src={file.image.src}
                    style={file.image.position ? { objectPosition: file.image.position } : undefined}
                  />
                </figure>
              ) : null}
              <div className="roof-reference-grid__body">
                <p className="roof-reference-grid__label">{file.label}</p>
                <h3>{file.title}</h3>
                <p>{file.description}</p>
                <ul className="plain-list roof-reference-grid__list">
                  {file.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="roof-command-deck__actions">
          <ButtonLink to={routes.reservations}>Discuss similar scope</ButtonLink>
          <ButtonLink to={routes.contact} variant="secondary">
            Contact office
          </ButtonLink>
        </div>
      </Reveal>
    </>
  )
}
