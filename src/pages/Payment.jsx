import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Payment(){
  const nav = useNavigate()
  const reg = JSON.parse(localStorage.getItem('ecliptz_reg') || 'null')
  const [paid, setPaid] = React.useState(()=> sessionStorage.getItem('ecliptz_paid')==='true')
  const [processing, setProcessing] = React.useState(false)

  if(!reg){
    return (
      <div className="mx-auto max-w-3xl px-4 mt-10">
        <p className="text-white/80">No registration found. Please register first.</p>
      </div>
    )
  }

  const simulate = async () => {
    setProcessing(true)
    await new Promise(r=> setTimeout(r, 1300))
    setPaid(true)
    sessionStorage.setItem('ecliptz_paid','true')
  }

  return (
    <div className="mx-auto max-w-4xl px-4 mt-10 grid gap-6">
      <h1 className="text-3xl font-bold" style={{fontFamily:'Space Grotesk'}}>Payment</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
          <p className="font-semibold">Order Summary</p>
          <div className="mt-3 text-sm text-white/80 space-y-1">
            <p>Team: {reg.teamName}</p>
            <p>Category: {reg.category}</p>
            <p>Contact: {reg.email} • {reg.phone}</p>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="flex items-center justify-between"><span>Registration Fee</span><span>₹500</span></p>
          </div>
        </div>
        <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
          <p className="font-semibold">Payment Methods</p>
          <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
            {['UPI','QR','Card'].map((m,i)=> <div key={i} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-center">{m}</div>)}
          </div>
          <div className="mt-4 w-40 h-40 rounded-xl bg-white/10 border border-white/20 grid place-content-center text-white/60 text-xs">QR Code</div>
          {!paid ? (
            <button disabled={processing} onClick={simulate} className="mt-4 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-purple)] disabled:opacity-60">
              {processing ? 'Processing…' : 'Pay Now (Dummy)'}
            </button>
          ) : (
            <button onClick={()=> nav('/confirmation')} className="mt-4 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--neon-blue)]">Payment Success → Continue</button>
          )}
        </div>
      </div>
    </div>
  )
}
