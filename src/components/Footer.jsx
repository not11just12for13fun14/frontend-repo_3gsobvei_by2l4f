import React from 'react'
import { Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--electric-purple)] shadow-[0_0_24px_rgba(155,92,255,0.5)]"/>
          <div>
            <p className="font-semibold" style={{fontFamily:'Space Grotesk'}}>Ecliptz Labs</p>
            <p className="text-sm text-white/70">Premium hackathon experiences</p>
          </div>
        </div>
        <div className="text-sm text-white/70">
          <p>Contact: support@ecliptzlabs.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
        <div className="flex gap-4 justify-start md:justify-end">
          <a aria-label="Instagram" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"><Instagram /></a>
          <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"><Linkedin /></a>
          <a aria-label="YouTube" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"><Youtube /></a>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-white/60">© 2025 Ecliptz Labs • Terms & Conditions</div>
    </footer>
  )
}
