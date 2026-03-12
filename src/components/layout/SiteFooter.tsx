import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'

export function SiteFooter() {
  const { brandSystem, content } = useContext(DemoConfigContext)
  const isHospitality = brandSystem === 'hospitality'
  const isRoofing = brandSystem === 'roofing'
  const visitHeading = isHospitality ? 'Visit The Dining Room' : 'Service Area'
  const hoursHeading = isHospitality ? 'Dinner Service' : isRoofing ? 'Office Hours' : 'Consultation Hours'
  const contactHeading = isHospitality ? 'Reservations' : isRoofing ? 'Inspection Desk' : 'Quote Desk'
  const brandTagline = isHospitality
    ? `${content.brand.tagline}. Dinner reservations recommended.`
    : isRoofing
      ? `${content.brand.tagline}. Inspection visits are scheduled after issue and service-area fit are confirmed.`
      : `${content.brand.tagline}. Site visits are scheduled after scope fit is confirmed.`

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
