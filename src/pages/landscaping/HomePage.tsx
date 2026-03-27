import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { landscapingDemoContent } from '../../content/landscapingDemoContent'
import { BeforeAfterCompare } from '../../components/ui/BeforeAfterCompare'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const { hero, quoteBand, serviceLens, signatureProject, stories, transformation } =
    landscapingDemoContent.home

  return (
    <>
      <Reveal as="section" className="land-page-hero" variant="organic">
        <div className="land-page-hero__copy">
          <p className="land-page-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="land-page-hero__description">{hero.description}</p>
          <div className="land-page-hero__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.gallery} variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
          <ul className="plain-list land-page-hero__notes">
            {hero.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <figure className="land-page-hero__media">
          <img
            alt={hero.image.alt}
            loading="eager"
            src={hero.image.src}
            style={hero.image.position ? { objectPosition: hero.image.position } : undefined}
          />
        </figure>

        <div className="land-page-hero__trust">
          <p className="land-page-hero__trust-label">Why homeowners short-list Northline</p>
          <ul className="plain-list">
            {hero.trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
            Call quote desk
          </ButtonAnchor>
        </div>
      </Reveal>

      <Reveal as="section" className="land-block land-block--signature" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">{signatureProject.label}</p>
          <h2>{signatureProject.title}</h2>
          <p>{signatureProject.description}</p>
        </div>

        <div className="land-signature-project">
          <figure className="land-signature-project__media">
            <img
              alt={signatureProject.image.alt}
              loading="lazy"
              src={signatureProject.image.src}
              style={
                signatureProject.image.position
                  ? { objectPosition: signatureProject.image.position }
                  : undefined
              }
            />
          </figure>

          <div className="land-signature-project__body">
            <ul className="plain-list land-signature-project__meta">
              {signatureProject.projectMeta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="plain-list land-signature-project__outcomes">
              {signatureProject.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <div className="land-block__actions">
              <ButtonLink to={routes.gallery}>Browse project stories</ButtonLink>
              <ButtonLink to={routes.reservations} variant="secondary">
                Request pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="land-block land-block--compare" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Transformation proof</p>
          <h2>{transformation.title}</h2>
          <p>{transformation.summary}</p>
        </div>

        <div className="land-compare-layout">
          <BeforeAfterCompare
            after={transformation.after}
            before={transformation.before}
            className="land-compare-layout__widget"
          />

          <div className="land-compare-layout__summary">
            <p className="land-compare-layout__label">What changed</p>
            <ul className="plain-list">
              {transformation.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="land-block land-block--stories" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Project lens</p>
          <h2>Northline should feel more like a portfolio with a quote path than a generic service list.</h2>
        </div>

        <div className="land-story-stack">
          {stories.map((story, index) => (
            <article
              className={`land-story-card ${index % 2 === 1 ? 'land-story-card--reverse' : ''}`}
              key={story.title}
            >
              <figure className="land-story-card__media">
                <img
                  alt={story.image.alt}
                  loading="lazy"
                  src={story.image.src}
                  style={story.image.position ? { objectPosition: story.image.position } : undefined}
                />
              </figure>
              <div className="land-story-card__body">
                <p className="land-story-card__label">{story.label}</p>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <ul className="plain-list land-story-card__details">
                  {story.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="land-block land-block--services" variant="organic">
        <div className="land-block__header">
          <p className="land-block__eyebrow">Service fit</p>
          <h2>Services are framed by the property outcome, not just the task.</h2>
        </div>

        <div className="land-service-lens">
          {serviceLens.map((item) => (
            <article className="land-service-lens__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="land-block__actions">
          <ButtonLink to={routes.menu}>Review services</ButtonLink>
          <ButtonLink to={routes.contact} variant="secondary">
            Contact office
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal as="section" className="land-quote-band" variant="organic">
        <div>
          <p className="land-quote-band__eyebrow">Quote path</p>
          <h2>{quoteBand.title}</h2>
          <p>{quoteBand.description}</p>
        </div>
        <div className="land-quote-band__actions">
          <ButtonLink size="lg" to={routes.reservations}>
            Request a quote
          </ButtonLink>
          <ButtonAnchor size="lg" href={content.brand.phoneHref} variant="secondary">
            Call {content.brand.phone}
          </ButtonAnchor>
        </div>
      </Reveal>
    </>
  )
}
