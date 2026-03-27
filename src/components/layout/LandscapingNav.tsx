import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../ui/Button'

export function LandscapingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { content, homePath, navItems, primaryCta } = useContext(DemoConfigContext)
  const visibleNavItems = navItems.filter((item) => item.path !== primaryCta.path)

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
    <header className="land-shell-nav">
      <div className="land-shell-nav__notice">
        <p>{content.brand.tagline}</p>
        <div className="land-shell-nav__notice-links">
          <span>{content.brand.city}</span>
          <a href={content.brand.phoneHref}>{content.brand.phone}</a>
        </div>
      </div>

      <div className="land-shell-nav__bar">
        <NavLink className="land-shell-nav__brand" to={homePath}>
          {content.brand.logo ? (
            <span className="land-shell-nav__mark" aria-hidden="true">
              <img alt="" src={content.brand.logo.src} />
            </span>
          ) : null}
          <span>
            <strong>{content.brand.name}</strong>
            <span>{content.brand.city}</span>
          </span>
        </NavLink>

        <button
          aria-controls="landscape-primary-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="mobile-menu-toggle land-shell-nav__toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          Menu
        </button>

        <div className={`land-shell-nav__panel ${isOpen ? 'land-shell-nav__panel--open' : ''}`}>
          <nav className="land-shell-nav__links" id="landscape-primary-nav">
            {visibleNavItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  ['land-shell-nav__link', isActive ? 'land-shell-nav__link--active' : '']
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
          </nav>

          <div className="land-shell-nav__actions">
            <ButtonAnchor href={content.brand.phoneHref} variant="secondary">
              Call quote desk
            </ButtonAnchor>
            <ButtonLink onClick={() => setIsOpen(false)} to={primaryCta.path}>
              {primaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}
