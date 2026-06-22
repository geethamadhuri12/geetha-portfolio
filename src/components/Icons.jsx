import React from 'react'

const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const GitHubIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.34-1.08.62-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.69-4.58 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.57.69.48A10 10 0 0 0 12 2Z"/>
  </svg>
)

export const LinkedInIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <path d="M7.5 10v7M7.5 7.2v.01M11.5 17v-4.2c0-1.4.9-2.3 2.1-2.3 1.2 0 2 .9 2 2.3V17M11.5 10v7"/>
  </svg>
)

export const MailIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5"/>
    <path d="M4 7l7.2 5.4a1.4 1.4 0 0 0 1.6 0L20 7"/>
  </svg>
)

export const DownloadIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5"/>
    <path d="M4.5 17.5V19a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1.5"/>
  </svg>
)

export const MenuIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
)

export const CloseIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M6 6l12 12M18 6 6 18"/>
  </svg>
)

export const ArrowIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
)
