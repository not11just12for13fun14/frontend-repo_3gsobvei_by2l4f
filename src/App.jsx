import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import Timeline from './pages/Timeline'
import Schedule from './pages/Schedule'
import Rounds from './pages/Rounds'
import Contact from './pages/Contact'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white font-sans">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/rounds" element={<Rounds />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
