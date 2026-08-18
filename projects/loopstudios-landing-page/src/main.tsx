import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/alata/latin-400.css'
import '@fontsource/josefin-sans/latin-300.css'
import './styles/main.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
