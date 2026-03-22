import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { BeforeAfterCompare } from '../../components/ui/BeforeAfterCompare'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const featuredProject = content.home.extras?.projectGallery?.[0] ?? content.gallery.collections[0]
  const projectGrid = content.home.extras?.projectGallery?.slice(1, 3) ?? content.gallery.collections.slice(1, 3)
  const quoteChannels = content.reservations.channels.slice(0, 2)
  const heroImage = content.home.hero.image ?? featuredProject?.image
  const beforeAfter = content.home.extras?.beforeAfter

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

        {featuredProject ? (
        <Reveal as="section" className="landscape-band landscape-band--gallery" variant="organic">
          <header className="landscape-band__header">
            <p className="landscape-band__eyebrow">Project gallery</p>
            <h2 className="landscape-band__title">Patios, planting, and lighting shown with the finished property in mind.</h2>
            <p className="landscape-band__description">
              A quick look at the kind of residential work Northline is hired to improve.
            </p>
          </header>

          <div className="landscape-project-gallery">
            <Reveal as="article" className="landscape-project-gallery__lead" variant="organic">
              <figure className="landscape-project-gallery__lead-media">
                <img
                  alt={featuredProject.image.alt}
                  loading="lazy"
                  src={featuredProject.image.src}
                  style={featuredProject.image.position ? { objectPosition: featuredProject.image.position } : undefined}
                />
              </figure>
              <div className="landscape-project-gallery__lead-body">
                <p className="landscape-gallery-showcase__eyebrow">{featuredProject.subtitle}</p>
                <h2>{featuredProject.title}</h2>
                <p>{featuredProject.description}</p>
                {featuredProject.facts?.length ? (
                  <ul className="plain-list landscape-project-gallery__facts">
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

            <div className="landscape-project-gallery__grid">
              {projectGrid.map((project, index) => (
                <Reveal
                  as="article"
                  className="landscape-project-gallery__card"
                  delay={110 + index * 60}
                  key={project.title}
                  variant="organic"
                >
                  <figure className="landscape-project-gallery__card-media">
                    <img
                      alt={project.image.alt}
                      loading="lazy"
                      src={project.image.src}
                      style={project.image.position ? { objectPosition: project.image.position } : undefined}
                    />
                  </figure>
                  <div className="landscape-project-gallery__card-body">
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

      {beforeAfter ? (
        <Reveal as="section" className="landscape-band" variant="organic">
          <div className="landscape-transformation">
            <div className="landscape-transformation__intro">
              <p className="landscape-band__eyebrow">Before / after</p>
              <h2 className="landscape-band__title">{beforeAfter.title}</h2>
              <p className="landscape-band__description">
                {beforeAfter.summary}
              </p>
              <ul className="plain-list landscape-project-gallery__facts">
                {beforeAfter.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <BeforeAfterCompare
              after={beforeAfter.after}
              before={beforeAfter.before}
              className="landscape-transformation__compare"
            />
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="landscape-band landscape-band--services" variant="organic">
        <div className="landscape-band__intro">
          <p className="landscape-band__eyebrow">Services</p>
          <h2 className="landscape-band__title">Patios, planting, lighting, and front-entry work.</h2>
          <p className="landscape-band__description">
            Northline is for homeowners who want the property to look cleaner, work better, and feel more complete.
          </p>
          <ButtonLink to={routes.menu} variant="quiet">
            Review all services
          </ButtonLink>
        </div>

        <div className="landscape-service-strip">
          {content.menu.sections.slice(0, 3).map((section, index) => (
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

      <Reveal as="section" className="land-quote-band" variant="organic">
        <div>
          <p className="landscape-band__eyebrow">Request a quote</p>
          <h2>Send the address, current photos, and the part of the yard you want priced.</h2>
          <p>We will confirm scope first and point you to the right next step.</p>
        </div>
        <div className="land-section-actions">
          {quoteChannels.map((channel) => (
            <ButtonAnchor href={channel.href} key={channel.label} variant="secondary">
              {channel.label}
            </ButtonAnchor>
          ))}
          <ButtonLink to={routes.reservations}>{content.home.hero.primaryCta}</ButtonLink>
        </div>
        <p className="land-quote-band__meta">Serving Toronto, Etobicoke, Mississauga, and Oakville</p>
      </Reveal>
    </>
  )
}
