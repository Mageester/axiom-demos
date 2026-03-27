import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonAnchor, ButtonLink } from '../ui/Button'

export function RoofingFooter() {
  const { content, navItems, primaryCta } = useContext(DemoConfigContext)

  return (
    <footer className="roof-shell-footer">
      <div className="roof-shell-footer__top">
        <div>
          <p className="roof-shell-footer__eyebrow">Blackridge Roofing & Exteriors</p>
          <h2>Inspection-first roofing for homeowners who need a clear next step.</h2>
          <p>
            Leak repair, replacement planning, storm response, and roofline support work for Toronto and Durham homes.
          </p>
        </div>
        <div className="roof-shell-footer__cta">
          <ButtonAnchor size="lg" href={content.brand.phoneHref} variant="secondary">
            Call {content.brand.phone}
          </ButtonAnchor>
          <ButtonLink size="lg" to={primaryCta.path}>
            {primaryCta.label}
          </ButtonLink>
        </div>
      </div>

      <div className="roof-shell-footer__grid">
        <div className="roof-shell-footer__panel">
          <p className="roof-shell-footer__eyebrow">Dispatch</p>
          <a href={content.brand.phoneHref}>{content.brand.phone}</a>
          <a href={content.brand.emailHref}>{content.brand.email}</a>
        </div>

        <div className="roof-shell-footer__panel">
          <p className="roof-shell-footer__eyebrow">Coverage</p>
          <h3>{content.brand.city}</h3>
          <p>{content.brand.address}</p>
        </div>

        <div className="roof-shell-footer__panel">
          <p className="roof-shell-footer__eyebrow">Best use</p>
          <ul className="plain-list">
            <li>Active leak calls</li>
            <li>Aging roof inspections</li>
            <li>Storm response and roof-edge support</li>
          </ul>
        </div>

        <div className="roof-shell-footer__panel">
          <p className="roof-shell-footer__eyebrow">Quick links</p>
          <div className="roof-shell-footer__links">
            {navItems.map((item) => (
              <ButtonLink key={item.path} to={item.path} variant="quiet">
                {item.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <div className="roof-shell-footer__panel">
          <p className="roof-shell-footer__eyebrow">Office hours</p>
          <ul className="plain-list">
            {content.brand.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="roof-shell-footer__legal">
        {new Date().getFullYear()} {content.brand.legalLine}
      </p>
    </footer>
  )
}
