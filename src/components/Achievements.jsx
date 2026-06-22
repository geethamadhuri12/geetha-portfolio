import React from 'react'
import useReveal from '../hooks/useReveal'

const ACHIEVEMENTS = [
  {
    title: 'Inter-College Tech Project',
    year: '2024',
    desc: 'Developed a Phishing URL Detection System using machine learning techniques to identify malicious and legitimate URLs accurately.',
  },
  {
    title: 'Smart India Hackathon',
    year: '2024',
    desc: 'Proposed a hassle-free tourism platform aimed at improving travel experiences and qualified at the inter-college level.',
  },
]

export default function Achievements() {
  const ref = useReveal()
  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">05 — Recognition</p>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a.title}
              className="achievement-card glass glow-border reveal"
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="achievement-year">{a.year}</span>
              <h3 className="achievement-title">{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
