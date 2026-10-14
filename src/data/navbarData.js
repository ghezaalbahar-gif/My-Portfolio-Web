import { asset } from './asset.js'

export const profile = {
  name: 'Ghezaal Bahar Faqiri',
  brand: 'G.Bahar',
  role: 'Front-End Development Trainee',
  roleExtra: 'aspiring UI/UX Designer',
  location: 'Kabul, Afghanistan',
  locationShort: 'Based in Kabul · AFG',
  avatar: asset('/images/about/portrait.jpg'),
  email: 'ghezaal.bahar@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ghezaalbahar-gif' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ghezaal-bahar-faqiri-b17723417/',
    },
    {
      label: 'Email',
      href: 'mailto:ghezaal.bahar@gmail.com',
    },
  ],
}

const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'About me', to: '/about-me' },
]

export default navLinks
