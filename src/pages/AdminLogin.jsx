import { useState } from 'react'

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [msg, setMsg] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMsg('Admin logged in (frontend only).')
  }

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" value={form.username} onChange={handleChange} placeholder="admin" />
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


