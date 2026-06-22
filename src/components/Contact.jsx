import React from 'react'
import useReveal from '../hooks/useReveal'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { profile } from '../siteConfig'
import CareerObjective from './CareerObjective'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <CareerObjective />

        <div className="contact-panel glass glow-border reveal" data-reveal>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>07 — Get In Touch</p>
          <h2 className="section-title contact-heading">Let's Connect</h2>
          <p className="contact-message">
            I'm open to internships, collaborations, freelance opportunities, and exciting
            projects in Data Science, Data Analytics, Machine Learning, and Software Development.
          </p>

          <div className="contact-icons">
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-icon-btn" data-tooltip="GitHub">
              <GitHubIcon width={26} height={26} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-icon-btn" data-tooltip="LinkedIn">
              <LinkedInIcon width={26} height={26} />
            </a>
            <a href={profile.email} className="contact-icon-btn" data-tooltip="Email">
              <MailIcon width={26} height={26} />
            </a>
          </div>

          <a href={profile.email} className="btn btn-primary contact-cta">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}
