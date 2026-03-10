import { createContext, type ComponentType } from 'react'
import { restaurantContent } from '../content/restaurantContent'
import type { DemoContent } from '../content/types'
import { AboutPage as LandscapingAboutPage } from '../pages/landscaping/AboutPage'
import { ContactPage as LandscapingContactPage } from '../pages/landscaping/ContactPage'
import { HomePage as LandscapingHomePage } from '../pages/landscaping/HomePage'
import { ProjectsPage as LandscapingProjectsPage } from '../pages/landscaping/ProjectsPage'
import { QuotePage as LandscapingQuotePage } from '../pages/landscaping/QuotePage'
import { ServicesPage as LandscapingServicesPage } from '../pages/landscaping/ServicesPage'
import { AboutPage as RestaurantAboutPage } from '../pages/AboutPage'
import { ContactPage as RestaurantContactPage } from '../pages/ContactPage'
import { GalleryPage as RestaurantGalleryPage } from '../pages/GalleryPage'
import { HomePage as RestaurantHomePage } from '../pages/HomePage'
import { MenuPage as RestaurantMenuPage } from '../pages/MenuPage'
import { ReservationsPage as RestaurantReservationsPage } from '../pages/ReservationsPage'
import { landscapingContent } from '../content/landscapingContent'
import {
  landscapingNavItems,
  landscapingRoutes,
  restaurantNavItems,
  restaurantRoutes,
  type DemoRoutes,
  type NavItem,
  type RoutePath,
} from './routes'

export type DemoKey = 'restaurant' | 'landscaping'

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

export const demoConfigs: Record<DemoKey, DemoConfig> = {
  restaurant: {
    key: 'restaurant',
    theme: 'restaurant',
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
    content: landscapingContent,
    routes: landscapingRoutes,
    navItems: landscapingNavItems,
    homePath: landscapingRoutes.home,
    primaryCta: {
      label: 'Request a quote',
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
}

function isDemoKey(value: string): value is DemoKey {
  return value === 'restaurant' || value === 'landscaping'
}

const requestedDemoKey = (import.meta.env.VITE_ACTIVE_DEMO ?? '').toLowerCase()
const selectedDemoKey: DemoKey = isDemoKey(requestedDemoKey)
  ? requestedDemoKey
  : 'landscaping'

export const activeDemoConfig = demoConfigs[selectedDemoKey]

export const DemoConfigContext = createContext<DemoConfig>(activeDemoConfig)
