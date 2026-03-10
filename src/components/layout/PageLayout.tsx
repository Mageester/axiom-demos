import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function PageLayout() {
  const { primaryCta } = useContext(DemoConfigContext)

  return (
    <div className="app-shell">
      <SiteNav />
      <main className="page-main">
        <Outlet />
      </main>
      <SiteFooter />
      <div className="mobile-reserve-bar">
        <ButtonLink fullWidth size="lg" to={primaryCta.path}>
          {primaryCta.label}
        </ButtonLink>
      </div>
    </div>
  )
}
