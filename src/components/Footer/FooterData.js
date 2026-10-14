import { profile } from '../../data/navbarData.js'

const footer = {
  contact: [
    { label: 'GitHub', value: 'ghezaalbahar-gif', href: profile.socials[0].href },
    { label: 'Based in', value: profile.location, href: null },
    { label: 'Available for', value: 'Junior Front-End Developer', href: null },
  ],
  pagesTitle: 'Pages',
  pages: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about-me' },
    { label: 'Work', to: '/projects' },
  ],
  socialsTitle: 'Socials',
  socials: profile.socials,
  copyright: `© ${new Date().getFullYear()} ${profile.brand}. All rights reserved`,
  credit: 'Designed & built by Ghezaal Bahar Faqiri',
}

export default footer
