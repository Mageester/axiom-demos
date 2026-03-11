import { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { DemoConfigContext } from '../../config/demoConfig'
import { ButtonLink } from '../ui/Button'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function PageLayout() {
  const { brandSystem, content, key, primaryCta, theme } = useContext(DemoConfigContext)
  const location = useLocation()

  useEffect(() => {
    document.body.dataset.demoBrand = brandSystem
    document.body.dataset.demoTheme = theme

    return () => {
      delete document.body.dataset.demoBrand
      delete document.body.dataset.demoTheme
    }
  }, [brandSystem, theme])

  useEffect(() => {
    const title = content.brand.browserTitle ?? `${content.brand.name} | ${content.brand.city}`
    document.title = title

    const descriptionText = content.brand.metaDescription ?? content.brand.tagline
    let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', descriptionText)

    const faviconHref = content.brand.favicon ?? '/favicon.svg'
    let faviconTag = document.querySelector<HTMLLinkElement>("link[rel='icon']")
    if (!faviconTag) {
      faviconTag = document.createElement('link')
      faviconTag.rel = 'icon'
      document.head.appendChild(faviconTag)
    }
    faviconTag.setAttribute('href', faviconHref)
    faviconTag.setAttribute('type', 'image/svg+xml')
  }, [content.brand])

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
