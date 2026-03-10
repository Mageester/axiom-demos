import { useContext } from 'react'
import { DemoConfigContext } from '../../config/demoConfig'

export function SiteFooter() {
  const { content } = useContext(DemoConfigContext)

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <h2 className="site-footer__brand">{content.brand.name}</h2>
          <p className="site-footer__tagline">{content.brand.tagline}</p>
        </div>

        <div>
          <h3 className="site-footer__heading">Visit</h3>
          <p>{content.brand.address}</p>
        </div>

        <div>
          <h3 className="site-footer__heading">Hours</h3>
          <ul className="plain-list">
            {content.brand.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Contact</h3>
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
