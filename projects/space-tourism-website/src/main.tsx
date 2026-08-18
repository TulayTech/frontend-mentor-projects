import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/barlow'
import '@fontsource/barlow-condensed'
import '@fontsource/bellefair'
import './styles/main.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
