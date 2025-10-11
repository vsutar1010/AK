import { useState } from 'react'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [msg, setMsg] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMsg('Logged in (frontend only).')
  }

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
        </div>
        <button className="btn-primary" type="submit">Login</button>
        {msg && <span className="muted"> {msg}</span>}
      </form>
    </div>
  )
}


