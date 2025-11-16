import React from 'react'
import { useNavigate } from 'react-router-dom'

const initial = () => ({
  mode: 'team',
  teamName: '',
  participants: [''],
  email: '',
  phone: '',
  org: '',
  category: 'AI',
  title: '',
  abstract: '',
})

export default function Registration(){
  const nav = useNavigate()
  const [data, setData] = React.useState(()=>{
    const saved = localStorage.getItem('ecliptz_reg')
    return saved ? JSON.parse(saved) : initial()
  })
  const [errors, setErrors] = React.useState({})

  React.useEffect(()=>{
    localStorage.setItem('ecliptz_reg', JSON.stringify(data))
  }, [data])

  const setField = (k, v) => setData(d=> ({...d, [k]: v}))

  const validate = () => {
    const e = {}
    if(!data.teamName) e.teamName = 'Required'
    if(!data.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) e.email='Invalid email'
    if(!data.phone || !/^\+?\d{7,15}$/.test(data.phone)) e.phone='Invalid phone'
    if(!data.title) e.title='Required'
    if(!data.abstract) e.abstract='Required'
    setErrors(e)
    return Object.keys(e).length===0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!validate()) return
    sessionStorage.setItem('ecliptz_payment_due', 'true')
    nav('/payment')
  }

  const addParticipant = () => setData(d=> ({...d, participants:[...d.participants, '']}))
  const setParticipant = (i, v) => setData(d=> ({...d, participants: d.participants.map((p,idx)=> idx===i? v : p)}))

  const abstractCount = data.abstract.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="mx-auto max-w-4xl px-4 mt-10">
      <h1 className="text-3xl font-bold" style={{fontFamily:'Space Grotesk'}}>Registration</h1>
      <p className="text-white/80 mt-2">Team fee: ₹500 per team. After submitting, you'll be redirected to a dummy payment page.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">Team / Individual</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2"><input type="radio" name="mode" checked={data.mode==='team'} onChange={()=>setField('mode','team')} /> Team</label>
              <label className="flex items-center gap-2"><input type="radio" name="mode" checked={data.mode==='solo'} onChange={()=>setField('mode','solo')} /> Individual</label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Team Name</label>
            <input value={data.teamName} onChange={e=>setField('teamName', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]" required />
            {errors.teamName && <p className="text-red-400 text-sm mt-1">{errors.teamName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Participant Name(s)</label>
          {data.participants.map((p, i)=> (
            <input key={i} value={p} onChange={e=>setParticipant(i, e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--neon-blue)] mb-2" />
          ))}
          <button type="button" onClick={addParticipant} className="text-[var(--neon-blue)] underline">Add Participant</button>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" value={data.email} onChange={e=>setField('email', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--neon-blue)]" required />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input value={data.phone} onChange={e=>setField('phone', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--neon-blue)]" placeholder="+91 1234567890" required />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">College / Organization</label>
            <input value={data.org} onChange={e=>setField('org', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--neon-blue)]" />
          </div>
          <div>
            <label className="block text-sm mb-1">Category</label>
            <select value={data.category} onChange={e=>setField('category', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              {['AI','Web','Mobile','Hardware','Open Innovation'].map(o=> <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">Project Idea Title</label>
            <input value={data.title} onChange={e=>setField('title', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--neon-blue)]" required />
            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Abstract (max 200 words)</label>
            <textarea value={data.abstract} onChange={e=> setField('abstract', e.target.value.slice(0, 2000))} className="w-full h-28 px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-[var(--neon-blue)]" />
            <p className="text-xs text-white/60 mt-1">{abstractCount} / 200 words</p>
            {errors.abstract && <p className="text-red-400 text-sm mt-1">{errors.abstract}</p>}
          </div>
        </div>

        <div className="rounded-xl p-4 bg-white/5 border border-white/10">
          <p className="text-sm text-white/80">Team fee: ₹500 per team. Payment methods accepted: UPI / QR / Card.</p>
          <p className="text-xs text-white/60">Only registered teams may participate.</p>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-purple)]">Submit & Proceed to Payment</button>
        </div>
      </form>
    </div>
  )
}
