import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Confirmation(){
  const nav = useNavigate()
  const reg = JSON.parse(localStorage.getItem('ecliptz_reg') || 'null')
  const paid = sessionStorage.getItem('ecliptz_paid')==='true'

  if(!reg){
    return (
      <div className="mx-auto max-w-3xl px-4 mt-10">
        <p className="text-white/80">No registration found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 mt-10">
      <h1 className="text-3xl font-bold" style={{fontFamily:'Space Grotesk'}}>Registration Successful</h1>
      {!paid && <p className="text-red-400 mt-2">Pending payment. Please complete payment to confirm.</p>}

      <div className="mt-6 rounded-2xl p-6 bg-white/5 border border-white/10">
        <p className="font-semibold">Submission Summary</p>
        <div className="mt-3 text-sm text-white/80 space-y-1">
          <p><span className="text-white/60">Team / Individual:</span> {reg.mode}</p>
          <p><span className="text-white/60">Team Name:</span> {reg.teamName}</p>
          <p><span className="text-white/60">Participants:</span> {reg.participants.filter(Boolean).join(', ')}</p>
          <p><span className="text-white/60">Email:</span> {reg.email}</p>
          <p><span className="text-white/60">Phone:</span> {reg.phone}</p>
          <p><span className="text-white/60">College / Organization:</span> {reg.org}</p>
          <p><span className="text-white/60">Category:</span> {reg.category}</p>
          <p><span className="text-white/60">Project Idea Title:</span> {reg.title}</p>
          <p><span className="text-white/60">Abstract:</span> {reg.abstract}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#" className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-purple)]">Join WhatsApp Group</a>
        <Link to="/" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10">Back to Home</Link>
      </div>
    </div>
  )
}
