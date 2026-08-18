import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { CrewPage } from './pages/CrewPage'
import { DestinationPage } from './pages/DestinationPage'
import { HomePage } from './pages/HomePage'
import { TechnologyPage } from './pages/TechnologyPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination/:slug" element={<DestinationPage />} />
      <Route path="/crew/:slug" element={<CrewPage />} />
      <Route path="/technology/:slug" element={<TechnologyPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export function TestApp({ initialEntry = '/' }: { initialEntry?: string }) {
  return <MemoryRouter initialEntries={[initialEntry]}><AppRoutes /></MemoryRouter>
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}
