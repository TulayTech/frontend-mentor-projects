import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LocationPage } from './pages/LocationPage'

export function AppRoutes() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}

export default App
