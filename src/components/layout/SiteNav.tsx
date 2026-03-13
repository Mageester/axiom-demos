import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { brandSystem, content, homePath, navItems, primaryCta } = useContext(DemoConfigContext)
  const isHospitality = brandSystem === 'hospitality'
  const isService = brandSystem === 'service'
  const visibleNavItems = navItems.filter((item) => item.path !== primaryCta.path)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <header className="site-nav-wrap">
      {isService ? (
        <div className="site-nav__service-bar">
          <div className="site-nav__service-bar-inner">
            <p className="site-nav__service-bar-copy">{content.brand.tagline}</p>
            <div className="site-nav__service-bar-links">
              <span>{content.brand.city}</span>
              <a href={content.brand.phoneHref}>{content.brand.phone}</a>
            </div>
          </div>
        </div>
      ) : null}

      <div className={`site-nav ${isHospitality ? 'site-nav--hospitality' : ''} ${isService ? 'site-nav--service' : ''}`}>
        <NavLink className="site-brand" to={homePath}>
          {content.brand.logo ? (
            <span className="site-brand__mark" aria-hidden="true">
              <img alt="" src={content.brand.logo.src} />
            </span>
          ) : null}
          <span className="site-brand__meta">
            <span className="site-brand__name">{content.brand.name}</span>
            <span className="site-brand__city">{content.brand.city}</span>
          </span>
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

        {isService ? (
          <div className={`site-nav__service-shell ${isOpen ? 'site-nav__service-shell--open' : ''}`}>
            <div className="site-nav__service-utility">
              <div>
                <p className="site-nav__service-label">Serving</p>
                <p className="site-nav__service-meta">{content.brand.city}</p>
              </div>
              <a className="site-nav__service-phone" href={content.brand.phoneHref}>
                {content.brand.phone}
              </a>
            </div>

            <nav
              className={`primary-nav ${isOpen ? 'primary-nav--open' : ''}`}
              id="primary-nav"
            >
              {visibleNavItems.map((item) => (
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
              <ButtonLink className="primary-nav__cta" onClick={() => setIsOpen(false)} size="md" to={primaryCta.path}>
                {primaryCta.label}
              </ButtonLink>
            </nav>
          </div>
        ) : (
          <nav
            className={`primary-nav ${isOpen ? 'primary-nav--open' : ''}`}
            id="primary-nav"
          >
            {visibleNavItems.map((item) => (
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
            {isHospitality ? (
              <ButtonLink className="primary-nav__cta primary-nav__cta--hospitality" onClick={() => setIsOpen(false)} size="md" to={primaryCta.path} variant="secondary">
                {primaryCta.label}
              </ButtonLink>
            ) : (
              <ButtonLink className="primary-nav__cta" onClick={() => setIsOpen(false)} size="md" to={primaryCta.path}>
                {primaryCta.label}
              </ButtonLink>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
