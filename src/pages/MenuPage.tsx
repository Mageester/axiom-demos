import { useContext } from 'react'
import { routes } from '../config/routes'
import { DemoConfigContext } from '../config/demoConfig'
import { ButtonLink } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'

export function MenuPage() {
  const { content } = useContext(DemoConfigContext)

  return (
    <>
      <PageHero
        actions={
          <ButtonLink to={routes.reservations} variant="secondary">
            Reserve for dinner
          </ButtonLink>
        }
        description={content.menu.intro}
        eyebrow="Menu"
        title="Current offerings"
      />

      <div className="menu-sections">
        {content.menu.sections.map((section) => (
          <section className="menu-section" key={section.title}>
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
