import React from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './components/Navbar.css'
import './components/Hero.css'
import './components/About.css'
import './components/Skills.css'
import './components/Projects.css'
import './components/Education.css'
import './components/Achievements.css'
import './components/Certifications.css'
import './components/CareerObjective.css'
import './components/Contact.css'
import './components/Footer.css'

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
