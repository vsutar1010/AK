import { useState } from 'react'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [msg, setMsg] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMsg('Account created (frontend only).')
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
        </div>
        <button className="btn-primary" type="submit">Create account</button>
        {msg && <span className="muted"> {msg}</span>}
      </form>
    </div>
  )
}


