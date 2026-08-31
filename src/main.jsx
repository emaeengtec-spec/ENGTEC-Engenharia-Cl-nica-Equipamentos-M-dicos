import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './styles/sections.css'
import App from './App.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Admin from './pages/Admin.jsx'
import ScrollManager from './components/ScrollManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
