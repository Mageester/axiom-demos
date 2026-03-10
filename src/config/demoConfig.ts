import { createContext } from 'react'
import { restaurantContent } from '../content/restaurantContent'
import type { DemoContent } from '../content/types'
import { navItems, routes, type NavItem, type RoutePath } from './routes'

export interface DemoConfig {
  key: string
  content: DemoContent
  navItems: NavItem[]
  homePath: RoutePath
  primaryCta: {
    label: string
    path: RoutePath
  }
}

export const activeDemoConfig: DemoConfig = {
  key: 'restaurant',
  content: restaurantContent,
  navItems,
  homePath: routes.home,
  primaryCta: {
    label: 'Reserve a table',
    path: routes.reservations,
  },
}

export const DemoConfigContext = createContext<DemoConfig>(activeDemoConfig)
