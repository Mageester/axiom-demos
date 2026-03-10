import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { content, homePath, navItems, primaryCta } = useContext(DemoConfigContext)

  return (
    <header className="site-nav-wrap">
      <div className="site-nav">
        <NavLink className="site-brand" to={homePath}>
          <span className="site-brand__name">{content.brand.name}</span>
          <span className="site-brand__city">{content.brand.city}</span>
        </NavLink>

        <button
          aria-controls="primary-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="mobile-menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          Menu
        </button>

        <nav
          className={`primary-nav ${isOpen ? 'primary-nav--open' : ''}`}
          id="primary-nav"
        >
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                ['primary-nav__link', isActive ? 'primary-nav__link--active' : '']
                  .filter(Boolean)
                  .join(' ')
              }
              key={item.path}
              onClick={() => setIsOpen(false)}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
          <ButtonLink className="primary-nav__cta" size="md" to={primaryCta.path}>
            {primaryCta.label}
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
