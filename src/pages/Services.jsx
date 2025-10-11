export default function Services() {
  const services = [
    { id: 1, name: 'Consultation', description: 'Expert advice tailored to you.' },
    { id: 2, name: 'Maintenance', description: 'Keep things running smoothly.' },
    { id: 3, name: 'Installation', description: 'Professional setup and onboarding.' }
  ]

  return (
    <div>
      <h2>Services</h2>
      <div className="cards">
        {services.map(s => (
          <div key={s.id} className="card">
            <h3>{s.name}</h3>
            <p className="muted">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


