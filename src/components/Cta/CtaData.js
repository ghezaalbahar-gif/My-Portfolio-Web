import { profile } from '../../data/navbarData.js'

const cta = {
  badge: 'Front-End developer & UI/UX Designer · Available for projects',
  title: "Have a project in mind? Let's make it real.",
  subtitle:
    "I'm currently available for new projects starting March 2025. Whether you need a full brand identity, or webs.",
  primaryCta: {
    label: 'Email me',
    href: `mailto:${profile.email}`,
  },
  secondaryCta: {
    label: 'See my work',
    to: '/projects',
  },
}

export default cta
