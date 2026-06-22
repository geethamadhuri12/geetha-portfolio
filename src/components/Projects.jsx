import React from 'react'
import useReveal from '../hooks/useReveal'

const PROJECTS = [
  {
    title: 'CareerDNA',
    subtitle: 'Intelligent Resume Analysis & Career Path Recommendation System',
    desc: 'A platform that helps students and job seekers improve their resumes and discover suitable career paths through ATS-based resume analysis, skill-gap identification, and personalized recommendations.',
    features: ['ATS Resume Analysis', 'Career Recommendations', 'Skill Gap Identification', 'Resume Improvement Suggestions', 'Interactive Dashboard'],
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Machine Learning'],
  },
  {
    title: 'Explainable Credit Risk Predictor',
    subtitle: 'ML-based loan default risk evaluation',
    desc: 'A machine learning system that evaluates the likelihood of loan default using customer financial information, integrating explainable AI techniques to improve transparency and trust in predictions.',
    features: ['Credit Risk Prediction', 'Data Preprocessing', 'Explainable AI', 'Risk Assessment', 'Data Visualization'],
    tech: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'SHAP'],
  },
  {
    title: 'Phishing URL Detection System',
    subtitle: 'Real-time malicious URL classification',
    desc: 'A machine learning system that classifies URLs as legitimate or malicious, helping users avoid phishing attacks and improve their online security.',
    features: ['URL Classification', 'Threat Detection', 'Security Analysis', 'Real-Time Prediction'],
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
  },
]

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal" data-reveal>
          <p className="eyebrow">03 — Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="project-card glass glow-border reveal"
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="project-card-top">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
              </div>
              <p className="project-desc">{p.desc}</p>

              <div className="project-features">
                {p.features.map((f) => (
                  <span className="feature-pill" key={f}>{f}</span>
                ))}
              </div>

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
