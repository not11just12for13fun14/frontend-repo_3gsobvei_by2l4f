import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Calendar, Home, CreditCard, ListChecks, Info, Phone, Timer } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => { setOpen(false) }, [location.pathname])

  const navItem = (to, label, Icon) => (
    <NavLink
      to={to}
      className={({isActive}) => `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:text-[var(--neon-blue)] hover:bg-white/5 ${isActive ? 'text-[var(--neon-blue)]' : 'text-white/80'}`}
    >
      <Icon size={18} /> {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--electric-purple)] shadow-[0_0_24px_rgba(0,212,255,0.6)]"/>
            <span className="font-semibold tracking-tight" style={{fontFamily:'Space Grotesk'}}>Ecliptz Labs</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home', Home)}
            {navItem('/registration', 'Registration', ListChecks)}
            {navItem('/payment', 'Payment', CreditCard)}
            {navItem('/confirmation', 'Confirmation', Info)}
            {navItem('/timeline', 'Hackathon Timeline', Timer)}
            {navItem('/schedule', 'Detailed Schedule', Calendar)}
            {navItem('/rounds', 'Rounds Overview', Info)}
            {navItem('/contact', 'Contact', Phone)}
          </nav>

          <button aria-label="Open Menu" onClick={() => setOpen(v=>!v)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-1">
            {navItem('/', 'Home', Home)}
            {navItem('/registration', 'Registration', ListChecks)}
            {navItem('/payment', 'Payment', CreditCard)}
            {navItem('/confirmation', 'Confirmation', Info)}
            {navItem('/timeline', 'Hackathon Timeline', Timer)}
            {navItem('/schedule', 'Detailed Schedule', Calendar)}
            {navItem('/rounds', 'Rounds Overview', Info)}
            {navItem('/contact', 'Contact', Phone)}
          </div>
        )}
      </div>
    </header>
  )
}
