import React, { useEffect, useState } from 'react'
import { MenuIcon, CloseIcon } from './Icons'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleClick('home') }}>
          <span className="logo-mark">KGM</span>
          <span className="logo-dot" />
        </a>

        <nav className="nav-links desktop-only">
          {LINKS.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              onClick={() => handleClick(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button className="nav-toggle mobile-only" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile-panel mobile-only">
          {LINKS.map((l) => (
            <button key={l.id} className={`nav-link ${active === l.id ? 'active' : ''}`} onClick={() => handleClick(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
