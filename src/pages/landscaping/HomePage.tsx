import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../../components/ui/Button'
import { BeforeAfterCompare } from '../../components/ui/BeforeAfterCompare'
import { Reveal } from '../../components/ui/Reveal'

export function HomePage() {
  const { content, routes } = useContext(DemoConfigContext)
  const serviceCards = content.menu.sections.slice(0, 3)
  const featuredProject = content.home.extras?.projectGallery?.[0] ?? content.gallery.collections[0]
  const projectGrid = content.home.extras?.projectGallery?.slice(1, 4) ?? content.gallery.collections.slice(1, 4)
  const companyStory = content.about.story.slice(0, 2)
  const standards = content.about.values
  const quoteChannels = content.reservations.channels.slice(0, 2)
  const heroImage = content.home.hero.image ?? featuredProject?.image
  const beforeAfter = content.home.extras?.beforeAfter
  const materialHighlights = content.home.extras?.materialBrands ?? []
  const consultationSteps = content.home.extras?.consultationSteps ?? []
  const seasonalServices = content.home.extras?.seasonalServices ?? []

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
            <h2 className="landscape-band__title">Patios, walkways, front entries, and outdoor lighting shown the way homeowners actually judge the work.</h2>
            <p className="landscape-band__description">
              Landscaping trust comes from seeing what the finished property looks like. This gallery is there to show finish level, layout quality, and the kind of residential work Northline is hired to build.
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
              <p className="landscape-band__description">{beforeAfter.summary}</p>
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
          <h2 className="landscape-band__title">Patios, planting, lighting, and front-entry work planned around residential properties.</h2>
          <p className="landscape-band__description">
            Northline is built for homeowners who want the yard to look better, work better, and still feel appropriate to the house when the install is done.
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

      {(materialHighlights.length || consultationSteps.length) ? (
        <Reveal as="section" className="landscape-materials-process" variant="organic">
          <div className="landscape-materials-process__materials">
            <header className="landscape-band__header">
              <p className="landscape-band__eyebrow">Materials</p>
              <h2 className="landscape-band__title">Natural stone, pavers, soil, and lighting systems chosen to suit the property.</h2>
            </header>

            <div className="landscape-materials-grid">
              {materialHighlights.map((material, index) => (
                <Reveal
                  as="article"
                  className="landscape-material-card"
                  delay={100 + index * 45}
                  key={material.name}
                  variant="organic"
                >
                  <div className="landscape-material-card__icon" aria-hidden="true">
                    {material.name.slice(0, 1)}
                  </div>
                  <div className="landscape-material-card__body">
                    <h3>{material.name}</h3>
                    <p>{material.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="landscape-materials-process__process">
            <header className="landscape-band__header">
              <p className="landscape-band__eyebrow">Consultation process</p>
              <h2 className="landscape-band__title">A clear homeowner process from site walk to seasonal follow-through.</h2>
            </header>

            <div className="landscape-process-lane">
              {consultationSteps.map((step, index) => (
                <Reveal
                  as="article"
                  className="landscape-process-step"
                  delay={90 + index * 55}
                  key={step.title}
                  variant="organic"
                >
                  <p className="landscape-process-step__index">0{index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
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
            {quoteChannels.map((channel) => (
              <li key={channel.label}>{channel.value}</li>
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

      {seasonalServices.length ? (
        <Reveal as="section" className="landscape-band landscape-band--seasonal" variant="organic">
          <header className="landscape-band__header">
            <p className="landscape-band__eyebrow">Seasonal services</p>
            <h2 className="landscape-band__title">Support work that keeps the property sharp through spring, summer, fall, and winter planning.</h2>
            <p className="landscape-band__description">
              Landscaping is not just one install date. Seasonal care and follow-up work keep the property from slipping after the main project is done.
            </p>
          </header>

          <div className="landscape-season-grid">
            {seasonalServices.map((service, index) => (
              <Reveal
                as="article"
                className="landscape-season-card"
                delay={110 + index * 55}
                key={service.title}
                variant="organic"
              >
                <p className="landscape-season-card__label">{service.title}</p>
                <h3>{service.title} care</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      ) : null}

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
