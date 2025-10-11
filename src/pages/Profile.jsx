import { useState } from 'react'

export default function Profile() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [message, setMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('Profile updated (client-side only).')
  }

  const bookings = [
    { id: 1, date: '2025-08-12', service: 'Consultation', status: 'Completed' },
    { id: 2, date: '2025-09-02', service: 'Maintenance', status: 'Cancelled' },
    { id: 3, date: '2025-09-25', service: 'Installation', status: 'Upcoming' }
  ]

  return (
    <div>
      <h2>Update Profile</h2>
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
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 555 5555" />
        </div>
        <button className="btn-primary" type="submit">Submit</button>
        {message && <span className="muted"> {message}</span>}
      </form>

      <h2 style={{ marginTop: 24 }}>Booking History</h2>
      <div className="cards">
        {bookings.map(b => (
          <div key={b.id} className="card">
            <h3>{b.service}</h3>
            <p className="muted">Date: {b.date}</p>
            <p className="muted">Status: {b.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


