import React from 'react'

const items = [
  {
    t:'Round 1: Ideation & Prototype Basics',
    d:'Judging: innovation, clarity, feasibility'
  },
  {
    t:'Round 2: Development & Features',
    d:'Judging: functionality, UI/UX, technical depth'
  },
  {
    t:'Round 3: Final Polish & Submission',
    d:'Judging: completeness, stability'
  },
  {
    t:'Final Round: Presentations',
    d:'Pitching, impact, validation'
  },
]

export default function Rounds(){
  return (
    <div className="mx-auto max-w-5xl px-4 mt-10">
      <h1 className="text-3xl font-bold" style={{fontFamily:'Space Grotesk'}}>Rounds Overview</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {items.map((it, i)=> (
          <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[var(--neon-blue)] transition">
            <p className="font-semibold">{it.t}</p>
            <ul className="mt-2 text-white/80 text-sm list-disc list-inside">
              {it.d.split(',').map((x,idx)=> <li key={idx}>{idx===0? 'What judges look for:':''} {x.trim()}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
