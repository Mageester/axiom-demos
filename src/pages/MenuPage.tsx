import { useContext } from 'react'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'

export function MenuPage() {
  const { content, routes } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations}>
            Reserve a table
          </ButtonLink>
        }
        description={content.menu.intro}
        eyebrow="Dinner"
        media={content.menu.sections[0]?.image}
        title="Tonight's dinner menu"
      />

      <div className="menu-sections">
        {content.menu.sections.map((section) => (
          <section className="menu-section" key={section.title}>
            {section.image ? (
              <figure className="menu-section__media">
                <img
                  alt={section.image.alt}
                  loading="lazy"
                  src={section.image.src}
                  style={
                    section.image.position
                      ? { objectPosition: section.image.position }
                      : undefined
                  }
                />
              </figure>
            ) : null}
            <header className="menu-section__header">
              <h2>{section.title}</h2>
              <p>{section.note}</p>
            </header>
            <ul className="plain-list">
              {section.items.map((item) => (
                <li className="menu-item" key={item.name}>
                  <div className="menu-item__heading">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <p className="menu-item__description">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
