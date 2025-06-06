import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('editor')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
