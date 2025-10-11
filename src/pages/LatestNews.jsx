const offers = [
  { id: 1, title: 'Summer Sale', description: 'Up to 30% off select services', img: '' },
  { id: 2, title: 'Refer & Save', description: 'Refer a friend and both get 10% off', img: '' },
  { id: 3, title: 'Bundle Deal', description: 'Bundle two services and save 15%', img: '' }
]

const updates = [
  { id: 1, title: 'New Branch Opened', content: 'We are excited to open a new location downtown.' },
  { id: 2, title: 'Holiday Hours', content: 'We will be closed on national holidays.' },
  { id: 3, title: 'Service Upgrade', content: 'Improved appointment scheduling experience.' }
]

export default function LatestNews() {
  return (
    <div className="two-col">
      <section>
        <h2>Offers</h2>
        <div className="cards">
          {offers.map(o => (
            <div className="card" key={o.id}>
              <h3>{o.title}</h3>
              <p className="muted">{o.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Company Updates</h2>
        <div className="cards">
          {updates.map(u => (
            <div className="card" key={u.id}>
              <h3>{u.title}</h3>
              <p className="muted">{u.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


