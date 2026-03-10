import { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function PageLayout() {
  const { brandSystem, key, primaryCta, theme } = useContext(DemoConfigContext)
  const location = useLocation()

  useEffect(() => {
    document.body.dataset.demoBrand = brandSystem
    document.body.dataset.demoTheme = theme

    return () => {
      delete document.body.dataset.demoBrand
      delete document.body.dataset.demoTheme
    }
  }, [brandSystem, theme])

  return (
    <div className={`app-shell app-shell--${key}`}>
      <SiteNav key={location.pathname} />
      <main className="page-main">
        <Outlet />
      </main>
      <SiteFooter />
      <div className="mobile-primary-cta">
        <ButtonLink fullWidth size="lg" to={primaryCta.path}>
          {primaryCta.label}
        </ButtonLink>
      </div>
    </div>
  )
}
