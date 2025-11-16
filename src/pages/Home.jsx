import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Trophy, Users, Clock, Pizza } from 'lucide-react'

const Badge = ({icon:Icon, label}) => (
  <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 shadow-[0_0_24px_rgba(0,212,255,0.15)]">
    <Icon size={16} className="text-[var(--neon-blue)]"/>
    <span className="text-sm">{label}</span>
  </motion.div>
)

export default function Home(){
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0"> 
          <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70 pointer-events-none"/>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-bold leading-tight" style={{fontFamily:'Space Grotesk'}}>
            ECLIPTZ TECHSTORM HACKATHON 2025
          </motion.h1>
          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="mt-3 text-lg md:text-2xl text-white/80">
            "Build. Innovate. Compete. A 24-Hour Battle of Brains."
          </motion.p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Badge icon={Users} label="100 Teams"/>
            <Badge icon={Clock} label="24 Hours"/>
            <Badge icon={Trophy} label="Prize Pool"/>
            <Badge icon={Pizza} label="Food + Fun Activities"/>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/registration" className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-purple)] shadow-[0_0_32px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition">Register Now</Link>
            <Link to="/schedule" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">View Schedule</Link>
            <Link to="/timeline" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">View Timeline</Link>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-white/70">Join students, professionals, and makers for a 24-hour sprint hosted by Ecliptz Labs. Build innovative prototypes, network with mentors, and compete for glory.</p>

          <div className="mt-8 flex gap-3 flex-wrap justify-center text-sm">
            <Link to="/rounds" className="underline text-[var(--neon-blue)]">Rounds Overview</Link>
            <a href="#prizes" className="underline text-[var(--neon-blue)]">Prizes</a>
            <a href="#faq" className="underline text-[var(--neon-blue)]">FAQ</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 mt-16 grid gap-6">
        <div className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold" style={{fontFamily:'Space Grotesk'}}>About the Hackathon</h2>
          <p className="mt-2 text-white/80">Open to students, professionals, and makers. The purpose is innovation, rapid prototyping, and networking. Organized by Ecliptz Labs.</p>
        </div>
      </section>

      {/* Prizes */}
      <section id="prizes" className="mx-auto max-w-7xl px-4 mt-12">
        <h3 className="text-xl font-semibold mb-4" style={{fontFamily:'Space Grotesk'}}>Prizes</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["1st Prize","2nd Prize","3rd Prize","Best UI/UX","Best Innovation","Best Social Impact Idea"].map((p,idx)=> (
            <div key={idx} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[var(--neon-blue)] transition shadow-[0_0_24px_rgba(155,92,255,0.2)]">
              <p className="text-lg font-medium">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Judging */}
      <section className="mx-auto max-w-7xl px-4 mt-12">
        <h3 className="text-xl font-semibold mb-4" style={{fontFamily:'Space Grotesk'}}>Judging Criteria</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {t:'Innovation',d:'Originality and novelty of the idea.'},
            {t:'Technical Implementation',d:'Engineering depth and architecture.'},
            {t:'UI/UX',d:'Design quality and usability.'},
            {t:'Impact & Presentation',d:'Real-world value and communication.'},
          ].map((c, i)=> (
            <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[var(--cyan)] transition">
              <p className="font-semibold">{c.t}</p>
              <p className="text-white/70 text-sm mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 mt-12">
        <h3 className="text-xl font-semibold mb-4" style={{fontFamily:'Space Grotesk'}}>FAQ</h3>
        <div className="space-y-3">
          {[
            ['Who can participate?','Students, professionals, and makers are welcome.'],
            ['Team size?','Solo or up to 4 members.'],
            ['Fee?','₹500 per team.'],
            ['Refund policy?','Non-refundable after confirmation.'],
            ['Equipment?','Bring your own laptops and chargers.'],
            ['Internet?','Wi‑Fi provided on-site.'],
            ['Mentors?','Available during development hours.'],
            ['Submission rules?','Submit code repo and demo at the end.'],
            ['IP ownership?','Teams retain IP.'],
            ['Need help?','Reach us via contact page.'],
          ].map(([q,a],i)=> (
            <details key={i} className="group bg-white/5 border border-white/10 rounded-xl">
              <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
                <span className="font-medium">{q}</span>
                <span className="ml-4 text-[var(--neon-blue)] group-open:rotate-180 transition">⌄</span>
              </summary>
              <div className="px-4 pb-4 text-white/75">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Registration CTA */}
      <section className="mx-auto max-w-7xl px-4 mt-12">
        <div className="rounded-2xl p-6 bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Register Now</h3>
              <p className="text-white/80 mt-1">Team fee: ₹500. Accepted methods: UPI, QR, Card. Only registered teams may participate.</p>
              <div className="mt-4 flex gap-3">
                <Link to="/registration" className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-purple)]">Go to Registration</Link>
              </div>
            </div>
            <div className="justify-self-center md:justify-self-end w-32 h-32 rounded-xl bg-white/10 border border-white/20 grid place-content-center text-white/60 text-xs">
              QR Code
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
