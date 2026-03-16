import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'

export function SiteFooter() {
  const { brandSystem, content, navItems, primaryCta } = useContext(DemoConfigContext)
  const isHospitality = brandSystem === 'hospitality'
  const isService = brandSystem === 'service'
  const isRoofing = brandSystem === 'roofing'
  const visitHeading = isHospitality ? 'Find The Dining Room' : 'Service Area'
  const hoursHeading = isHospitality ? 'Dinner Hours' : isRoofing ? 'Office Hours' : 'Consultation Hours'
  const contactHeading = isHospitality ? 'Dining Room' : isRoofing ? 'Inspection Desk' : 'Quote Desk'
  const brandTagline = isHospitality
    ? `${content.brand.tagline}. Dinner reservations recommended.`
    : isRoofing
      ? `${content.brand.tagline}. Inspection visits are scheduled after issue and service-area fit are confirmed.`
      : `${content.brand.tagline}. Site visits are scheduled after scope fit is confirmed.`

  if (isRoofing) {
    return (
      <footer className="site-footer site-footer--roofing">
        <div className="site-footer__roofing-top">
          <div>
            <h2 className="site-footer__brand">{content.brand.name}</h2>
            <p className="site-footer__tagline">{brandTagline}</p>
          </div>
          <ButtonLink className="site-footer__roofing-cta" size="md" to={primaryCta.path}>
            {primaryCta.label}
          </ButtonLink>
        </div>

        <div className="site-footer__roofing-grid">
          <div>
            <h3 className="site-footer__heading">Inspection Desk</h3>
            <ul className="plain-list">
              <li>
                <a href={content.brand.phoneHref}>{content.brand.phone}</a>
              </li>
              <li>
                <a href={content.brand.emailHref}>{content.brand.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="site-footer__heading">Service Area</h3>
            <p>{content.brand.city}</p>
            <p>{content.brand.address}</p>
          </div>

          <div>
            <h3 className="site-footer__heading">Office Hours</h3>
            <ul className="plain-list">
              {content.brand.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer__heading">Best Use</h3>
            <p>Active leak calls, aging roof inspections, storm response, roof replacements, and roofline exterior support work.</p>
          </div>
        </div>
        <p className="site-footer__legal">
          {new Date().getFullYear()} {content.brand.legalLine}
        </p>
      </footer>
    )
  }

  if (isService) {
    return (
      <footer className="site-footer site-footer--service">
        <div className="site-footer__service-top">
          <div>
            <h2 className="site-footer__brand">{content.brand.name}</h2>
            <p className="site-footer__tagline">{brandTagline}</p>
          </div>
          <ButtonLink className="site-footer__service-cta" size="md" to={primaryCta.path}>
            {primaryCta.label}
          </ButtonLink>
        </div>

        <div className="site-footer__service-grid">
          <div>
            <h3 className="site-footer__heading">Company</h3>
            <p>{content.brand.address}</p>
            <p>{content.brand.city}</p>
          </div>

          <div>
            <h3 className="site-footer__heading">Navigation</h3>
            <ul className="plain-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <ButtonLink size="md" to={item.path} variant="quiet">
                    {item.label}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer__heading">Services</h3>
            <ul className="plain-list">
              {content.menu.sections.map((section) => (
                <li key={section.title}>{section.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer__heading">Quote Desk</h3>
            <ul className="plain-list">
              <li>
                <a href={content.brand.phoneHref}>{content.brand.phone}</a>
              </li>
              <li>
                <a href={content.brand.emailHref}>{content.brand.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="site-footer__heading">Hours</h3>
            <ul className="plain-list">
              {content.brand.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="site-footer__legal">
          {new Date().getFullYear()} {content.brand.legalLine}
        </p>
      </footer>
    )
  }

  return (
    <footer className={`site-footer ${isHospitality ? 'site-footer--hospitality' : ''}`}>
      <div className="site-footer__grid">
        <div>
          <h2 className="site-footer__brand">{content.brand.name}</h2>
          <p className="site-footer__tagline">{brandTagline}</p>
        </div>

        <div>
          <h3 className="site-footer__heading">{visitHeading}</h3>
          <p>{content.brand.address}</p>
        </div>

        <div>
          <h3 className="site-footer__heading">{hoursHeading}</h3>
          <ul className="plain-list">
            {content.brand.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">{contactHeading}</h3>
          <ul className="plain-list">
            <li>
              <a href={content.brand.phoneHref}>{content.brand.phone}</a>
            </li>
            <li>
              <a href={content.brand.emailHref}>
                {content.brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="site-footer__legal">
        {new Date().getFullYear()} {content.brand.legalLine}
      </p>
    </footer>
  )
}
