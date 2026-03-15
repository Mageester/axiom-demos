import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { brandSystem, content, homePath, navItems, primaryCta } = useContext(DemoConfigContext)
  const isHospitality = brandSystem === 'hospitality'
  const isService = brandSystem === 'service'
  const isRoofing = brandSystem === 'roofing'
  const visibleNavItems = isService ? navItems : navItems.filter((item) => item.path !== primaryCta.path)
  const serviceBarHours = isService ? content.brand.hours[0] : ''

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

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <header className="site-nav-wrap">
      {isService ? (
        <div className="site-nav__service-bar">
          <div className="site-nav__service-bar-inner">
            <p className="site-nav__service-bar-copy">{content.brand.tagline}</p>
            <div className="site-nav__service-bar-links">
              <span>{content.brand.address}</span>
              {serviceBarHours ? <span>{serviceBarHours}</span> : null}
              <a href={content.brand.phoneHref}>{content.brand.phone}</a>
            </div>
          </div>
        </div>
      ) : null}

      {isRoofing ? (
        <div className="site-nav__roofing-bar">
          <div className="site-nav__roofing-bar-inner">
            <p className="site-nav__roofing-bar-copy">Active leak or storm concern? Call the office first for triage.</p>
            <div className="site-nav__roofing-bar-links">
              <span>{content.brand.city}</span>
              <a href={content.brand.phoneHref}>{content.brand.phone}</a>
            </div>
          </div>
        </div>
      ) : null}

      <div className={`site-nav ${isHospitality ? 'site-nav--hospitality' : ''} ${isService ? 'site-nav--service' : ''} ${isRoofing ? 'site-nav--roofing' : ''}`}>
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
        ) : isRoofing ? (
          <div className={`site-nav__roofing-shell ${isOpen ? 'site-nav__roofing-shell--open' : ''}`}>
            <div className="site-nav__roofing-utility">
              <div>
                <p className="site-nav__roofing-label">Service area</p>
                <p className="site-nav__roofing-meta">{content.brand.city}</p>
              </div>
              <div>
                <p className="site-nav__roofing-label">Inspection desk</p>
                <a className="site-nav__roofing-phone" href={content.brand.phoneHref}>
                  {content.brand.phone}
                </a>
              </div>
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
