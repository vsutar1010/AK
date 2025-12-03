import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionLoader from '../components/SectionLoader.jsx'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })
  const [msg, setMsg] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: send to API/create user
    setMsg('Account created (frontend only).')
  }

  return (
    <SectionLoader isLoading={isLoading} height="420px">
      <div className="auth-modal-overlay">
        <div className="auth-modal">
          <header className="auth-header">
            <h2>Create Account</h2>
            <button className="btn-link" onClick={() => navigate(-1)} aria-label="Close">✕</button>
          </header>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>

            <label>
              Email
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            </label>

            <label>
              Phone
              <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9XXXXXXXXX" />
            </label>

            <label>
              Password
              <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" required />
            </label>

            <div className="btn-row" style={{ marginTop: 8 }}>
              <button className="btn-primary" type="submit">Create account</button>
              <button
                type="button"
                className="btn-link"
                onClick={() => navigate('/login')}
                style={{ alignSelf: 'center', marginLeft: 8 }}
              >
                Already have an account?
              </button>
            </div>

            {msg && <div className="muted" style={{ marginTop: 10 }}>{msg}</div>}
          </form>

          <div className="auth-footer muted">
            We will never share your details publicly. This demo stores nothing server-side.
          </div>
        </div>
      </div>
    </SectionLoader>
  )
}
