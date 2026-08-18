import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/barlow'
import '@fontsource/barlow/700'
import '@fontsource/fraunces/700'
import './styles/main.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
