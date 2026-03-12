import { createContext, type ComponentType } from 'react'
import { restaurantContent } from '../content/restaurantContent'
import type { DemoContent } from '../content/types'
import { AboutPage as LandscapingAboutPage } from '../pages/landscaping/AboutPage'
import { ContactPage as LandscapingContactPage } from '../pages/landscaping/ContactPage'
import { HomePage as LandscapingHomePage } from '../pages/landscaping/HomePage'
import { ProjectsPage as LandscapingProjectsPage } from '../pages/landscaping/ProjectsPage'
import { QuotePage as LandscapingQuotePage } from '../pages/landscaping/QuotePage'
import { ServicesPage as LandscapingServicesPage } from '../pages/landscaping/ServicesPage'
import { AboutPage as RoofingAboutPage } from '../pages/roofing/AboutPage'
import { ContactPage as RoofingContactPage } from '../pages/roofing/ContactPage'
import { HomePage as RoofingHomePage } from '../pages/roofing/HomePage'
import { InspectionPage as RoofingInspectionPage } from '../pages/roofing/InspectionPage'
import { ProjectsPage as RoofingProjectsPage } from '../pages/roofing/ProjectsPage'
import { ServicesPage as RoofingServicesPage } from '../pages/roofing/ServicesPage'
import { AboutPage as RestaurantAboutPage } from '../pages/AboutPage'
import { ContactPage as RestaurantContactPage } from '../pages/ContactPage'
import { GalleryPage as RestaurantGalleryPage } from '../pages/GalleryPage'
import { HomePage as RestaurantHomePage } from '../pages/HomePage'
import { MenuPage as RestaurantMenuPage } from '../pages/MenuPage'
import { ReservationsPage as RestaurantReservationsPage } from '../pages/ReservationsPage'
import { landscapingContent } from '../content/landscapingContent'
import { roofingContent } from '../content/roofingContent'
import {
  landscapingNavItems,
  landscapingRoutes,
  roofingNavItems,
  roofingRoutes,
  restaurantNavItems,
  restaurantRoutes,
  type DemoRoutes,
  type NavItem,
  type RoutePath,
} from './routes'

export type DemoKey = 'restaurant' | 'landscaping' | 'roofing'
export type DemoBrandSystem = 'hospitality' | 'service' | 'roofing'

export interface DemoPageSet {
  HomePage: ComponentType
  MenuPage: ComponentType
  AboutPage: ComponentType
  GalleryPage: ComponentType
  ContactPage: ComponentType
  ReservationsPage: ComponentType
}

export interface DemoConfig {
  key: DemoKey
  theme: DemoKey
  brandSystem: DemoBrandSystem
  content: DemoContent
  routes: DemoRoutes
  navItems: NavItem[]
  homePath: RoutePath
  primaryCta: {
    label: string
    path: RoutePath
  }
  pages: DemoPageSet
}

export const demoConfigsByKey: Record<DemoKey, DemoConfig> = {
  restaurant: {
    key: 'restaurant',
    theme: 'restaurant',
    brandSystem: 'hospitality',
    content: restaurantContent,
    routes: restaurantRoutes,
    navItems: restaurantNavItems,
    homePath: restaurantRoutes.home,
    primaryCta: {
      label: 'Reserve a table',
      path: restaurantRoutes.reservations,
    },
    pages: {
      HomePage: RestaurantHomePage,
      MenuPage: RestaurantMenuPage,
      AboutPage: RestaurantAboutPage,
      GalleryPage: RestaurantGalleryPage,
      ContactPage: RestaurantContactPage,
      ReservationsPage: RestaurantReservationsPage,
    },
  },
  landscaping: {
    key: 'landscaping',
    theme: 'landscaping',
    brandSystem: 'service',
    content: landscapingContent,
    routes: landscapingRoutes,
    navItems: landscapingNavItems,
    homePath: landscapingRoutes.home,
    primaryCta: {
      label: 'Request estimate',
      path: landscapingRoutes.reservations,
    },
    pages: {
      HomePage: LandscapingHomePage,
      MenuPage: LandscapingServicesPage,
      AboutPage: LandscapingAboutPage,
      GalleryPage: LandscapingProjectsPage,
      ContactPage: LandscapingContactPage,
      ReservationsPage: LandscapingQuotePage,
    },
  },
  roofing: {
    key: 'roofing',
    theme: 'roofing',
    brandSystem: 'roofing',
    content: roofingContent,
    routes: roofingRoutes,
    navItems: roofingNavItems,
    homePath: roofingRoutes.home,
    primaryCta: {
      label: 'Request inspection',
      path: roofingRoutes.reservations,
    },
    pages: {
      HomePage: RoofingHomePage,
      MenuPage: RoofingServicesPage,
      AboutPage: RoofingAboutPage,
      GalleryPage: RoofingProjectsPage,
      ContactPage: RoofingContactPage,
      ReservationsPage: RoofingInspectionPage,
    },
  },
}

function isDemoKey(value: string): value is DemoKey {
  return value === 'restaurant' || value === 'landscaping' || value === 'roofing'
}

export const defaultDemoKey: DemoKey = 'restaurant'
const rawDemoKey = (import.meta.env.VITE_DEMO_KEY ?? '').trim().toLowerCase()
const rawHostname =
  typeof window !== 'undefined' ? window.location.hostname.trim().toLowerCase() : ''

const demoKeyByHostname: Partial<Record<string, DemoKey>> = {
  'restaurant.getaxiom.ca': 'restaurant',
  'landscaping.getaxiom.ca': 'landscaping',
  'roofing.getaxiom.ca': 'roofing',
  'axiom-demos-restaurant.pages.dev': 'restaurant',
  'axiom-demos-landscaping.pages.dev': 'landscaping',
  'axiom-demos-roofing.pages.dev': 'roofing',
}

function resolveDemoKeyFromHostname(hostname: string): DemoKey | null {
  if (!hostname || hostname === 'localhost' || hostname === '127.0.0.1') {
    return null
  }

  const exactMatch = demoKeyByHostname[hostname]
  if (exactMatch) {
    return exactMatch
  }

  const firstLabel = hostname.split('.')[0]
  if (isDemoKey(firstLabel)) {
    return firstLabel
  }

  if (hostname.includes('landscaping')) {
    return 'landscaping'
  }

  if (hostname.includes('roofing')) {
    return 'roofing'
  }

  if (hostname.includes('restaurant')) {
    return 'restaurant'
  }

  return null
}

function resolveDemoKey(value: string, hostname: string): DemoKey {
  if (isDemoKey(value)) {
    return value
  }

  const resolvedFromHostname = resolveDemoKeyFromHostname(hostname)
  if (resolvedFromHostname) {
    if (!value) {
      console.info(
        `[demoConfig] VITE_DEMO_KEY missing. Using "${resolvedFromHostname}" resolved from hostname "${hostname}".`
      )
    } else {
      const allowedKeys = Object.keys(demoConfigsByKey).join(', ')
      console.error(
        `[demoConfig] Unknown VITE_DEMO_KEY "${value}". Using hostname "${hostname}" -> "${resolvedFromHostname}" instead. Allowed keys: ${allowedKeys}.`
      )
    }

    return resolvedFromHostname
  }

  if (value) {
    const allowedKeys = Object.keys(demoConfigsByKey).join(', ')
    console.error(
      `[demoConfig] Unknown VITE_DEMO_KEY "${value}". Falling back to "${defaultDemoKey}". Allowed keys: ${allowedKeys}.`
    )
  }

  return defaultDemoKey
}

export const selectedDemoKey = resolveDemoKey(rawDemoKey, rawHostname)

export const activeDemoConfig = demoConfigsByKey[selectedDemoKey]

export const DemoConfigContext = createContext<DemoConfig>(activeDemoConfig)
