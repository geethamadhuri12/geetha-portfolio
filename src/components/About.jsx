import React from 'react'
import useReveal from '../hooks/useReveal'

const HIGHLIGHTS = [
  'B.Tech CSE (Data Science)',
  'CGPA: 8.07',
  'Graduation Year: 2027',
  'Quick Learner',
  'Problem Solver',
  'Team Player',
  'Self-Motivated',
  'Continuous Learner',
]

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">01 — Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal" data-reveal>
            <p>
              Hi, I'm Geetha Madhuri, a passionate Computer Science and Data Science student
              currently pursuing my B.Tech at Malla Reddy Engineering College.
            </p>
            <p>
              I have a strong interest in Data Science, Data Analytics, Machine Learning, and Web
              Development. I enjoy exploring data, uncovering patterns, and developing practical
              solutions that solve real-world problems.
            </p>
            <p>
              My goal is to leverage technology and data-driven insights to create meaningful
              impact. I continuously improve my technical and analytical skills through projects,
              certifications, and hands-on learning.
            </p>
            <p>
              I am eager to contribute to innovative projects while growing into a skilled Data
              Science and Analytics professional.
            </p>
          </div>

          <div className="about-highlights">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h}
                className="highlight-card glass glow-border reveal"
                data-reveal
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
