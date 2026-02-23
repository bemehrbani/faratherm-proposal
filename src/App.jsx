import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Landing from './pages/Landing'
import Architecture from './pages/Architecture'
import Hardware from './pages/Hardware'
import Software from './pages/Software'
import Features from './pages/Features'
import UserStories from './pages/UserStories'
import Prototype from './pages/Prototype'
import Scope from './pages/Scope'
import Timeline from './pages/Timeline'
import Market from './pages/Market'
import Partnership from './pages/Partnership'
import { useState } from 'react'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-layout">
      <div className="mobile-header">
        <button className="hamburger" onClick={() => setSidebarOpen(true)}>☰</button>
        <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>فراترم</span>
      </div>
      <div className={`mobile-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tech/architecture" element={<Architecture />} />
          <Route path="/tech/hardware" element={<Hardware />} />
          <Route path="/tech/software" element={<Software />} />
          <Route path="/product/features" element={<Features />} />
          <Route path="/product/user-stories" element={<UserStories />} />
          <Route path="/prototype" element={<Prototype />} />
          <Route path="/business/scope" element={<Scope />} />
          <Route path="/business/timeline" element={<Timeline />} />
          <Route path="/market" element={<Market />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}
