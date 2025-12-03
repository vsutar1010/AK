import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import SectionLoader from '../components/SectionLoader.jsx'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
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
    // TODO: wire up API/auth
    setMsg('Logged in (frontend only).')
  }

  return (
    <SectionLoader isLoading={isLoading} height="360px">
      {/* overlay/modal style container */}
      <div className="auth-modal-overlay">
        <div className="auth-modal">
          <header className="auth-header">
            <h2>Sign In</h2>
            <button className="btn-link" onClick={() => navigate(-1)} aria-label="Close">✕</button>
          </header>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Password
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </label>

            <div className="btn-row" style={{ marginTop: 8 }}>
              <button className="btn-primary" type="submit">Sign In</button>
              <button
                type="button"
                className="btn-link"
                onClick={() => navigate('/signup')}
                style={{ alignSelf: 'center', marginLeft: 8 }}
              >
                Create account
              </button>
            </div>

            {msg && <div className="muted" style={{ marginTop: 10 }}>{msg}</div>}
          </form>

          <div className="auth-footer muted">
            By signing in you accept our terms. For demo this is client-side only.
          </div>
        </div>
      </div>
    </SectionLoader>
  )
}
