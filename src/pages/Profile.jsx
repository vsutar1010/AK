import { useEffect, useState } from 'react'
import SectionLoader from '../components/SectionLoader.jsx'

// local storage keys
const USER_KEY = 'ak_user'
const FEEDBACK_KEY = 'ak_feedbacks'

// helpers
function loadUser() {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

function saveUser(user) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  } catch (e) {
    console.error('saveUser', e)
  }
}

function saveFeedback(item) {
  try {
    const raw = localStorage.getItem(FEEDBACK_KEY)
    const arr = raw ? JSON.parse(raw) : []
    arr.unshift(item)
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(arr))
  } catch (e) {
    console.error('saveFeedback', e)
  }
}

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true)

  const initialUser = loadUser() ?? {
    name: 'Akshay Amale',
    email: 'aktourstravels3693@gmail.com',
    phone: '+91 9730825092',
    company: 'AK Tours & Travels',
    city: 'Mysuru'
  }

  const [user, setUser] = useState(initialUser)
  const [saveMsg, setSaveMsg] = useState('')
  const [feedback, setFeedback] = useState({ rating: 5, message: '', tags: '' })
  const [fbMsg, setFbMsg] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 380)
    return () => clearTimeout(t)
  }, [])

  function handleUserChange(e) {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  function handleSaveProfile() {
    saveUser(user)
    setSaveMsg('Profile saved')
    setTimeout(() => setSaveMsg(''), 1600)
  }

  function handleFbChange(e) {
    const { name, value } = e.target
    setFeedback(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmitFeedback(e) {
    e.preventDefault()
    if (!feedback.message.trim()) {
      setFbMsg('Please enter feedback message')
      setTimeout(() => setFbMsg(''), 1600)
      return
    }

    const item = {
      id: `p-${Date.now()}`,
      name: user.name || 'Anonymous',
      date: new Date().toISOString(),
      rating: Number(feedback.rating) || 0,
      message: feedback.message.trim(),
      tags: (feedback.tags || '').split(',').map(t => t.trim()).filter(Boolean)
    }

    saveFeedback(item)
    setFeedback({ rating: 5, message: '', tags: '' })
    setFbMsg('Feedback submitted')
    setTimeout(() => setFbMsg(''), 1600)
  }

  return (
    <SectionLoader isLoading={isLoading} height="420px">
      <div className="profile-page container" style={{ paddingTop: 18, paddingBottom: 48 }}>
        <div className="profile-wrapper">
          {/* Profile card (centered, wider) */}
          <aside className="profile-card card" aria-label="profile-card">
            <div className="profile-card-top">
              <div className="profile-avatar">
                <div className="avatar large">
                  {user.name?.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
              </div>
              <div className="profile-head">
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-company muted">{user.company}</p>
              </div>
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="profile-form">
              <div className="form-grid">
                <label>
                  Full name
                  <input name="name" value={user.name} onChange={handleUserChange} />
                </label>

                <label>
                  Email
                  <input name="email" type="email" value={user.email} onChange={handleUserChange} />
                </label>

                <label>
                  Phone
                  <input name="phone" value={user.phone} onChange={handleUserChange} />
                </label>

                <label>
                  Company
                  <input name="company" value={user.company} onChange={handleUserChange} />
                </label>

                <label>
                  City
                  <input name="city" value={user.city} onChange={handleUserChange} />
                </label>
              </div>

              <div className="card-actions">
                <button type="button" className="btn-primary btn-lg" onClick={handleSaveProfile}>Save Profile</button>
                {saveMsg && <div className="muted small-msg">{saveMsg}</div>}
              </div>
            </form>
          </aside>

          {/* Feedback form centered below profile, wider */}
          <main className="profile-feedback card" aria-label="profile-feedback">
            <div className="feedback-head">
              <div>
                <h2 className="feedback-title">Send Feedback</h2>
                <p className="muted">Posting as <strong>{user.name}</strong></p>
              </div>
              <div className="feedback-badge">Verified User</div>
            </div>

            <form onSubmit={handleSubmitFeedback} className="feedback-form">
              <div className="feedback-row">
                <label className="compact">
                  Rating
                  <select name="rating" value={feedback.rating} onChange={handleFbChange}>
                    <option value={5}>5 — Excellent</option>
                    <option value={4}>4 — Good</option>
                    <option value={3}>3 — Average</option>
                    <option value={2}>2 — Below average</option>
                    <option value={1}>1 — Poor</option>
                  </select>
                </label>

                <label className="expanded">
                  Tags (comma separated)
                  <input name="tags" value={feedback.tags} onChange={handleFbChange} placeholder="verified, top-review" />
                </label>
              </div>

              <label>
                Message
                <textarea name="message" value={feedback.message} onChange={handleFbChange} rows={6} placeholder="Share your experience..." />
              </label>

              <div className="card-actions" style={{ justifyContent: 'flex-start' }}>
                <button className="btn-primary btn-lg" type="submit">Send Feedback</button>
                <button type="button" className="btn-link reset-btn" onClick={() => setFeedback({ rating: 5, message: '', tags: '' })}>Reset</button>
                {fbMsg && <div className="muted small-msg" style={{ marginLeft: 12 }}>{fbMsg}</div>}
              </div>
            </form>
          </main>
        </div>
      </div>
    </SectionLoader>
  )
}
