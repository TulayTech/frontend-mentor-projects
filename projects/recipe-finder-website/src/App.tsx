import { useEffect } from 'react'
import { BrowserRouter, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { RecipePage } from './pages/RecipePage'
import { RecipesPage } from './pages/RecipesPage'
export function AppRoutes() { return <Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/recipes" element={<RecipesPage />} /><Route path="/recipes/:slug" element={<RecipePage />} /><Route path="*" element={<HomePage />} /></Routes> }
export function TestApp({ initialEntry = '/' }: { initialEntry?: string }) { return <MemoryRouter initialEntries={[initialEntry]}><AppRoutes /></MemoryRouter> }
function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname]); return null }
export default function App() { return <BrowserRouter><ScrollToTop /><AppRoutes /></BrowserRouter> }
