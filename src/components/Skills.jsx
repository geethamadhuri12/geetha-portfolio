import React from 'react'
import useReveal from '../hooks/useReveal'

const CATEGORIES = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', level: 88 },
      { name: 'C', level: 70 },
      { name: 'Java (Basics)', level: 55 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    title: 'Web Technologies',
    items: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
      { name: 'JavaScript', level: 65 },
      { name: 'React (Basics)', level: 55 },
    ],
  },
  {
    title: 'Data Analysis Tools',
    items: [
      { name: 'Microsoft Excel', level: 85 },
      { name: 'Power BI', level: 72 },
      { name: 'Tableau', level: 68 },
    ],
  },
  {
    title: 'Coursework',
    items: [
      { name: 'Machine Learning', level: 75 },
      { name: 'DBMS', level: 78 },
      { name: 'Operating Systems', level: 70 },
      { name: 'Computer Networks', level: 65 },
      { name: 'Statistics Fundamentals', level: 80 },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Problem Solving', level: 88 },
      { name: 'Communication Skills', level: 82 },
      { name: 'Time Management', level: 80 },
      { name: 'Teamwork', level: 85 },
      { name: 'Quick Learning', level: 90 },
    ],
  },
]

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">02 — Toolkit</p>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.title}
              className="skill-card glass glow-border reveal"
              data-reveal
              style={{ transitionDelay: `${ci * 0.07}s` }}
            >
              <h3 className="skill-card-title">{cat.title}</h3>
              <div className="skill-list">
                {cat.items.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <div className="skill-item-head">
                      <span>{item.name}</span>
                      <span className="skill-percent">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ '--level': `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
