import { useState } from 'react'

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [blog, setBlog] = useState({ title: '', body: '' })
  const stars = [1, 2, 3, 4, 5]

  return (
    <div>
      <h2>Feedback</h2>
      <div className="stars" aria-label="Star rating">
        {stars.map(s => (
          <span
            key={s}
            className={s <= rating ? 'star active' : 'star'}
            role="button"
            onClick={() => setRating(s)}
            aria-label={`${s} star`}
          >★</span>
        ))}
      </div>
      <form onSubmit={(e) => { e.preventDefault() }} style={{ marginTop: 12 }}>
        <label htmlFor="fb">Your comments</label>
        <textarea id="fb" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Share your thoughts..." />
        <button className="btn-primary" type="submit">Submit</button>
      </form>

      <h3 style={{ marginTop: 24 }}>Blog (Optional)</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title</label>
        <input id="title" value={blog.title} onChange={(e) => setBlog(prev => ({ ...prev, title: e.target.value }))} placeholder="Post title" />
        <label htmlFor="body">Body</label>
        <textarea id="body" value={blog.body} onChange={(e) => setBlog(prev => ({ ...prev, body: e.target.value }))} placeholder="Write something..." />
        <button className="btn-primary" type="submit">Create Post</button>
      </form>
    </div>
  )
}


