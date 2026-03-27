import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../ui/Button'

export function LandscapingFooter() {
  const { content, navItems, primaryCta } = useContext(DemoConfigContext)

  return (
    <footer className="land-shell-footer">
      <div className="land-shell-footer__intro">
        <div>
          <p className="land-shell-footer__eyebrow">Northline Landscaping</p>
          <h2>Built for homeowners who want the outdoor space to feel finished.</h2>
          <p>
            Patios, planting, front-entry work, and lighting for residential properties in Toronto and the west end.
          </p>
        </div>
        <div className="land-shell-footer__cta">
          <ButtonLink size="lg" to={primaryCta.path}>
            {primaryCta.label}
          </ButtonLink>
          <ButtonAnchor href={content.brand.phoneHref} size="lg" variant="secondary">
            Call {content.brand.phone}
          </ButtonAnchor>
        </div>
      </div>

      <div className="land-shell-footer__grid">
        <div className="land-shell-footer__panel">
          <p className="land-shell-footer__eyebrow">Service area</p>
          <h3>{content.brand.city}</h3>
          <p>{content.brand.address}</p>
        </div>

        <div className="land-shell-footer__panel">
          <p className="land-shell-footer__eyebrow">Project fit</p>
          <ul className="plain-list">
            <li>Outdoor-living upgrades</li>
            <li>Front-entry and curb-appeal work</li>
            <li>Planting, lighting, and finish-focused rebuilds</li>
          </ul>
        </div>

        <div className="land-shell-footer__panel">
          <p className="land-shell-footer__eyebrow">Quick links</p>
          <div className="land-shell-footer__links">
            {navItems.map((item) => (
              <ButtonLink key={item.path} to={item.path} variant="quiet">
                {item.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <div className="land-shell-footer__panel">
          <p className="land-shell-footer__eyebrow">Quote desk</p>
          <a href={content.brand.phoneHref}>{content.brand.phone}</a>
          <a href={content.brand.emailHref}>{content.brand.email}</a>
          <ul className="plain-list">
            {content.brand.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="land-shell-footer__legal">
        {new Date().getFullYear()} {content.brand.legalLine}
      </p>
    </footer>
  )
}
