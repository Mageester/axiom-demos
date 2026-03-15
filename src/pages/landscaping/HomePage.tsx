import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const serviceCards = content.menu.sections.slice(0, 3)
  const featuredProject = content.gallery.collections[0]
  const projectGrid = content.gallery.collections.slice(1, 5)
  const companyStory = content.about.story.slice(0, 2)
  const standards = content.about.values
  const quoteChannels = content.reservations.channels.slice(0, 2)
  const processPoints = content.home.experience.points
  const heroImage = content.home.hero.image ?? featuredProject?.image

  return (
    <>
      <Reveal as="section" className="landscape-home-hero" variant="organic">
        {heroImage ? (
          <figure className="landscape-home-hero__media">
            <img
              alt={heroImage.alt}
              loading="eager"
              src={heroImage.src}
              style={heroImage.position ? { objectPosition: heroImage.position } : undefined}
            />
          </figure>
        ) : null}
        <div className="landscape-home-hero__overlay" />

        <div className="landscape-home-hero__content">
          <p className="landscape-home-hero__eyebrow">{content.home.hero.eyebrow}</p>
          <h1 className="landscape-home-hero__title">{content.home.hero.title}</h1>
          <p className="landscape-home-hero__description">{content.home.hero.description}</p>
          <div className="landscape-home-hero__actions">
            <ButtonLink size="lg" to={routes.reservations}>
              {content.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink size="lg" to={routes.gallery} variant="secondary">
              {content.home.hero.secondaryCta}
            </ButtonLink>
          </div>
          <ul className="plain-list landscape-home-hero__signals">
            {content.home.hero.signals?.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <div className="landscape-home-hero__cards">
          {content.home.highlights.map((highlight, index) => (
            <Reveal
              as="article"
              className="landscape-home-hero__card"
              delay={100 + index * 70}
              key={highlight.title}
              variant="organic"
            >
              <p className="landscape-home-hero__card-index">Project focus 0{index + 1}</p>
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="landscape-band landscape-band--services" variant="organic">
        <div className="landscape-band__intro">
          <p className="landscape-band__eyebrow">Services</p>
          <h2 className="landscape-band__title">Patios, planting, lighting, and front-entry work priced like a real landscaping company.</h2>
          <p className="landscape-band__description">
            Northline is built for residential landscaping projects where the finish matters, the property needs to read better,
            and homeowners want a crew that can handle the whole scope properly.
          </p>
          <ButtonLink to={routes.menu} variant="quiet">
            Review all services
          </ButtonLink>
        </div>

        <div className="landscape-service-strip">
          {serviceCards.map((section, index) => (
            <Reveal
              as="article"
              className={`landscape-service-strip__card ${index === 0 ? 'landscape-service-strip__card--lead' : ''}`}
              delay={120 + index * 60}
              key={section.title}
              variant="organic"
            >
              {section.image ? (
                <figure className="landscape-service-strip__media">
                  <img
                    alt={section.image.alt}
                    loading="lazy"
                    src={section.image.src}
                    style={section.image.position ? { objectPosition: section.image.position } : undefined}
                  />
                </figure>
              ) : null}
              <div className="landscape-service-strip__body">
                <p className="landscape-service-strip__eyebrow">{section.note}</p>
                <h3>{section.title}</h3>
                {section.highlights?.length ? (
                  <ul className="plain-list landscape-service-strip__list">
                    {section.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {featuredProject ? (
        <Reveal as="section" className="landscape-band landscape-band--gallery" variant="organic">
          <header className="landscape-band__header">
            <p className="landscape-band__eyebrow">Project gallery</p>
            <h2 className="landscape-band__title">Recent residential work across patios, front approaches, planting, and outdoor living.</h2>
            <p className="landscape-band__description">
              The quickest way to judge the fit is to look at the kind of properties, material level, and finish detail Northline is usually hired to handle.
            </p>
          </header>

          <div className="landscape-gallery-showcase">
            <Reveal as="article" className="landscape-gallery-showcase__feature" variant="organic">
              <figure className="landscape-gallery-showcase__feature-media">
                <img
                  alt={featuredProject.image.alt}
                  loading="lazy"
                  src={featuredProject.image.src}
                  style={featuredProject.image.position ? { objectPosition: featuredProject.image.position } : undefined}
                />
              </figure>
              <div className="landscape-gallery-showcase__feature-body">
                <p className="landscape-gallery-showcase__eyebrow">{featuredProject.subtitle}</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                {featuredProject.facts?.length ? (
                  <ul className="plain-list landscape-gallery-showcase__facts">
                    {featuredProject.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="landscape-home-hero__actions">
                  <ButtonLink to={routes.gallery}>View projects</ButtonLink>
                  <ButtonLink to={routes.reservations} variant="secondary">
                    Request pricing
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <div className="landscape-gallery-showcase__grid">
              {projectGrid.map((project, index) => (
                <Reveal
                  as="article"
                  className="landscape-gallery-showcase__card"
                  delay={120 + index * 60}
                  key={project.title}
                  variant="organic"
                >
                  <figure className="landscape-gallery-showcase__card-media">
                    <img
                      alt={project.image.alt}
                      loading="lazy"
                      src={project.image.src}
                      style={project.image.position ? { objectPosition: project.image.position } : undefined}
                    />
                  </figure>
                  <div className="landscape-gallery-showcase__card-body">
                    <p className="landscape-gallery-showcase__eyebrow">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="landscape-split-band" variant="organic">
        <article className="landscape-split-band__story">
          <p className="landscape-band__eyebrow">About Northline</p>
          <h2>Outdoor-living work planned around the property, not rushed through it.</h2>
          <div className="landscape-split-band__story-copy">
            {companyStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ButtonLink to={routes.about} variant="quiet">
            Learn about the company
          </ButtonLink>
        </article>

        <aside className="landscape-split-band__quote">
          <p className="landscape-band__eyebrow">Request a quote</p>
          <h2>Send the address, current photos, and the part of the yard you want priced.</h2>
          <ul className="plain-list landscape-split-band__quote-list">
            {processPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="landscape-split-band__quote-actions">
            {quoteChannels.map((channel) => (
              <ButtonAnchor href={channel.href} key={channel.label} variant="secondary">
                {channel.label}
              </ButtonAnchor>
            ))}
            <ButtonLink to={routes.reservations}>{content.home.hero.primaryCta}</ButtonLink>
          </div>
        </aside>
      </Reveal>

      <Reveal as="section" className="landscape-band landscape-band--standards" variant="organic">
        <header className="landscape-band__header">
          <p className="landscape-band__eyebrow">Why homeowners hire Northline</p>
          <h2 className="landscape-band__title">The site handling, finish level, and quote process matter as much as the install itself.</h2>
        </header>

        <div className="landscape-standards-grid">
          {standards.map((value, index) => (
            <Reveal
              as="article"
              className="landscape-standards-grid__card"
              delay={110 + index * 70}
              key={value.title}
              variant="organic"
            >
              <p className="landscape-standards-grid__index">0{index + 1}</p>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </>
  )
}
