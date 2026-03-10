import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function PageLayout() {
  const { key, primaryCta, theme } = useContext(DemoConfigContext)

  useEffect(() => {
    document.body.dataset.demoTheme = theme

    return () => {
      delete document.body.dataset.demoTheme
    }
  }, [theme])

  return (
    <div className={`app-shell app-shell--${key}`}>
      <SiteNav />
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
