import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Navbar from './components/Navbar/Navbar.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
)
