import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import LatestNews from './pages/LatestNews.jsx'
import Feedback from './pages/Feedback.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import Calendar from './pages/Calendar.jsx'
import Services from './pages/Services.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AdminLogin from './pages/AdminLogin.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


