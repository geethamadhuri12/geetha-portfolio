import React from 'react'
import useReveal from '../hooks/useReveal'

const CERTS = [
  { title: 'Microsoft Certified: Azure Fundamentals', year: '2024' },
  { title: 'Data Science Course — Skill India', year: '2025' },
  { title: 'Responsive Web Design Certificate — freeCodeCamp', year: '2025' },
]

export default function Certifications() {
  const ref = useReveal()
  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">06 — Credentials</p>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <div
              key={c.title}
              className="cert-card glass glow-border reveal"
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="cert-badge">✓</div>
              <h3 className="cert-title">{c.title}</h3>
              <span className="cert-year">{c.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
