import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/chivo'
import './styles/main.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
