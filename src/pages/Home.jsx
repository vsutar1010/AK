import { useState, useEffect } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=500&fit=crop'
  ]

  const infoCards = [
    {
      id: 1,
      title: 'Professional Services',
      description: 'Expert solutions tailored to your needs with the highest quality standards.',
      icon: '⚡'
    },
    {
      id: 2,
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need help or have questions.',
      icon: '🛠️'
    },
    {
      id: 3,
      title: 'Premium Quality',
      description: 'Top-notch services delivered with attention to detail and excellence.',
      icon: '⭐'
    }
  ]

  const newsItems = [
    {
      id: 1,
      title: 'New Service Launch',
      description: 'We are excited to announce our latest premium service package.',
      icon: '📢'
    },
    {
      id: 2,
      title: 'Company Expansion',
      description: 'Opening new branches in three major cities this quarter.',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Award Recognition',
      description: 'Proud to receive the Best Service Provider award for 2024.',
      icon: '🏆'
    }
  ]

  const sliderImages = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    icon: ['🎨', '📱', '💻', '🎯', '🚀', '🔧', '📊', '🎪', '🌟', '💡'][i]
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* Hero Slider */}
      <div className="hero-slider">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-content">
          <h1>Welcome to AK</h1>
          <p>Your premier destination for professional services and innovative solutions. We deliver excellence with every project.</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="services-header">
          <h2>Our Services</h2>
        </div>
        <div className="info-cards">
          {infoCards.map((card) => (
            <div key={card.id} className="info-card">
              <div className="info-card-image">
                {card.icon}
              </div>
              <div className="info-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services-view-more">
          <a href="/services" className="btn-secondary">View More</a>
        </div>
      </div>

      {/* Latest News */}
      <div className="news-section">
        <div className="news-header">
          <h2>Latest News</h2>
        </div>
        <div className="news-cards">
          {newsItems.map((news) => (
            <div key={news.id} className="news-card">
              <div className="news-image">
                {news.icon}
              </div>
              <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="news-view-more">
          <a href="/latest-news" className="btn-secondary">View All</a>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="gallery-header">
          <h2>Gallery</h2>
        </div>
        <div className="image-slider-container">
          <div className="image-slider">
            {[...sliderImages, ...sliderImages].map((image, index) => (
              <div key={index} className="slider-image">
                {image.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


