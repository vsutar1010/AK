import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: '+91 9730825092',
      action: 'Call Now',
      link: 'tel:+919730825092'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Pune, Maharashtra',
      action: 'View on Map',
      link: 'https://maps.app.goo.gl/K6QtsAfxD9mYKHdK8'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: 'Quick Response',
      action: 'Chat Now',
      link: 'https://wa.me/919730825092'
    },
    {
      icon: '⏰',
      title: 'Operating Hours',
      details: '24/7 Service',
      action: 'Always Available',
      link: '#'
    }
  ]

  const services = [
    'Pune-Mumbai Daily Service',
    'Airport Transfers',
    'Corporate Travel',
    'Group Bookings',
    'Luxury Vehicles',
    'Emergency Service'
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Ready to book your next journey? Contact us for reliable and comfortable travel between Pune and Mumbai.</p>
      </div>

      <div className="contact-layout">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <p>{info.details}</p>
                  <a href={info.link} className="contact-action" target="_blank" rel="noopener noreferrer">
                    {info.action}
                  </a>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="pune-mumbai">Pune-Mumbai Service</option>
                <option value="airport">Airport Transfer</option>
                <option value="corporate">Corporate Travel</option>
                <option value="group">Group Booking</option>
                <option value="luxury">Luxury Vehicle</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your travel requirements..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="quick-contact">
        <div className="quick-contact-content">
          <h3>Need Immediate Assistance?</h3>
          <p>Call us directly for instant booking and support</p>
          <div className="quick-actions">
            <a href="tel:+919730825092" className="btn-call">
              📞 Call Now: +91 9730825092
            </a>
            <a href="https://wa.me/919730825092" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


