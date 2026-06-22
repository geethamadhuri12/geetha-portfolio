import React from 'react'
import useReveal from '../hooks/useReveal'

const TIMELINE = [
  {
    school: 'Malla Reddy Engineering College',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering (Data Science)',
    period: '2023 – Present',
    detail: 'CGPA: 8.07',
  },
  {
    school: 'SR Junior College',
    degree: 'Intermediate Education',
    field: '',
    period: '2020 – 2022',
    detail: 'Percentage: 82%',
  },
  {
    school: 'Maharshi Vidyalaya',
    degree: 'Secondary School Certificate (SSC)',
    field: '',
    period: '2019 – 2020',
    detail: 'CGPA: 10.0',
  },
]

export default function Education() {
  const ref = useReveal()
  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">04 — Academic Path</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <div className="timeline-row reveal" data-reveal key={t.school} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {i !== TIMELINE.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-card glass glow-border">
                <div className="timeline-period">{t.period}</div>
                <h3 className="timeline-school">{t.school}</h3>
                <p className="timeline-degree">{t.degree}{t.field ? ` — ${t.field}` : ''}</p>
                <p className="timeline-detail">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
