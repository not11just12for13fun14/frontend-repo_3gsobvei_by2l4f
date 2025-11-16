import React from 'react'

export default function Contact(){
  const [form, setForm] = React.useState({name:'', email:'', message:''})
  const [sent, setSent] = React.useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Contact message', form)
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 mt-10">
      <h1 className="text-3xl font-bold" style={{fontFamily:'Space Grotesk'}}>Contact</h1>
      <p className="mt-2 text-white/80">Email: support@ecliptzlabs.com</p>
      <p className="text-white/80">Phone: +91 98765 43210</p>
      <div className="flex gap-3 mt-2 text-sm">
        <a href="#" className="underline text-[var(--neon-blue)]">Instagram</a>
        <a href="#" className="underline text-[var(--neon-blue)]">LinkedIn</a>
        <a href="#" className="underline text-[var(--neon-blue)]">YouTube</a>
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-3">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input value={form.name} onChange={e=> setForm({...form, name:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" value={form.email} onChange={e=> setForm({...form, email:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea value={form.message} onChange={e=> setForm({...form, message:e.target.value})} className="w-full h-32 px-3 py-2 rounded-lg bg-white/5 border border-white/10" />
        </div>
        <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-purple)]">Send</button>
        {sent && <p className="text-green-400">Message captured locally. We will get back soon!</p>}
      </form>
    </div>
  )
}
