export interface DemoRoutes {
  home: string
  menu: string
  about: string
  gallery: string
  contact: string
  reservations: string
}

export type RouteKey = keyof DemoRoutes
export type RoutePath = string

export interface NavItem {
  label: string
  path: RoutePath
}

export const restaurantRoutes: DemoRoutes = {
  home: '/',
  menu: '/menu',
  about: '/about',
  gallery: '/gallery',
  contact: '/contact',
  reservations: '/reservations',
}

export const landscapingRoutes: DemoRoutes = {
  home: '/',
  menu: '/services',
  about: '/about',
  gallery: '/projects',
  contact: '/contact',
  reservations: '/quote',
}

export const restaurantNavItems: NavItem[] = [
  { label: 'Home', path: restaurantRoutes.home },
  { label: 'Menu', path: restaurantRoutes.menu },
  { label: 'About', path: restaurantRoutes.about },
  { label: 'Gallery', path: restaurantRoutes.gallery },
  { label: 'Contact', path: restaurantRoutes.contact },
  { label: 'Reservations', path: restaurantRoutes.reservations },
]

export const landscapingNavItems: NavItem[] = [
  { label: 'Home', path: landscapingRoutes.home },
  { label: 'Services', path: landscapingRoutes.menu },
  { label: 'Projects', path: landscapingRoutes.gallery },
  { label: 'About', path: landscapingRoutes.about },
  { label: 'Contact', path: landscapingRoutes.contact },
  { label: 'Request Quote', path: landscapingRoutes.reservations },
]
