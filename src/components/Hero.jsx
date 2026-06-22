import React, { useEffect, useState } from 'react'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon, ArrowIcon } from './Icons'
import { profile } from '../siteConfig'

const TITLES = [
  'Data Science Student',
  'Aspiring Data Analyst',
  'Python Developer',
  'Problem Solver',
  'Machine Learning Enthusiast',
]

function useTypewriter(words, speed = 55, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(TITLES)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy hero-fade-in">
          <p className="eyebrow">Portfolio / Data &amp; Machine Learning</p>
          <h1 className="hero-name">
            KANNEBOINA<br />GEETHA MADHURI
          </h1>
          <p className="hero-subtitle">Data Science Student &amp; Aspiring Data Analyst</p>
          <div className="hero-typed">
            <span className="typed-prompt">&gt;</span>
            <span className="typed-text">{typed}</span>
            <span className="typed-cursor">|</span>
          </div>
          <p className="hero-tagline">Transforming Data into Insights Through Technology.</p>
          <p className="hero-desc">
            Passionate Data Science student focused on solving real-world problems through data
            analysis, machine learning, and software development. Dedicated to continuous learning
            and building impactful technology solutions.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects <ArrowIcon width={16} height={16} />
            </button>
            <a className="btn btn-outline" href={profile.resumePath} download>
              Download Resume <DownloadIcon width={16} height={16} />
            </a>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub" title="GitHub">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn" title="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={profile.email} className="social-icon" aria-label="Email" title="Email">
              <MailIcon />
            </a>
            <a href={profile.resumePath} download className="social-icon" aria-label="Download Resume" title="Resume">
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap hero-fade-in" style={{ animationDelay: '0.15s' }}>
          <div className="hero-photo-frame glass float">
            <div className="hero-photo-ring">
              <img src={profile.photoPath} alt="Kanneboina Geetha Madhuri" className="hero-photo" />
            </div>
            <span className="ring-deco ring-deco-1" />
            <span className="ring-deco ring-deco-2" />
          </div>
        </div>
      </div>

      <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <span className="scroll-cue-line" />
      </button>
    </section>
  )
}
