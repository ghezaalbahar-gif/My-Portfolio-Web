import { asset } from './asset.js'

const aboutSection = {
  label: 'About',
  title: 'Hi, I am Ghezaal Bahar',
  photo: { src: asset('/images/about/portrait.jpg'), alt: 'Ghezaal Bahar Faqiri' },
  bio: 'I am a front-end developer and aspiring UI/UX designer from Kabul. I am learning to build clean, accessible websites with HTML, CSS, JavaScript, and React.js and every project I finish teaches me something new.',
  chips: [
    { value: 'Front-End Trainee', label: 'NetLinks training' },
    { value: 'Kabul, Afghanistan', label: 'Where I am based' },
  ],
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

export default aboutSection
