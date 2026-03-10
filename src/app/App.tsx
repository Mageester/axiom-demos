import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { DemoConfigContext } from '../config/demoConfig'

export default function App() {
  const { pages, routes } = useContext(DemoConfigContext)
  const {
    AboutPage,
    ContactPage,
    GalleryPage,
    HomePage,
    MenuPage,
    ReservationsPage,
  } = pages

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route element={<HomePage />} path={routes.home} />
          <Route element={<MenuPage />} path={routes.menu} />
          <Route element={<AboutPage />} path={routes.about} />
          <Route element={<GalleryPage />} path={routes.gallery} />
          <Route element={<ContactPage />} path={routes.contact} />
          <Route element={<ReservationsPage />} path={routes.reservations} />
          <Route element={<Navigate replace to={routes.home} />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
