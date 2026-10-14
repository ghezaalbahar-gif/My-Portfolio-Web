import { asset } from './asset.js'

const rawProjects = [
  {
    slug: 'nexor',
    title: 'Nexor landing page',
    category: 'Web design',
    description:
      'A modern, responsive website inspired by Nexor, featuring a clean design, smooth scrolling animations, and elegant layouts. Built with React and Tailwind CSS to deliver a seamless and engaging user experience.',
    cover: "/images/nexor/cover.png",
    liveUrl: '',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Landing page' },
      { label: 'Role', value: 'Design & development' },
      { label: 'Stack', value: 'React.js,Tailwind css, JavaScript, HTML5, CSS3' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'Nexor is a modern website project I recreated using React and Tailwind CSS, inspired by a sleek Framer design. The website features a clean layout, elegant typography, smooth scrolling effects, and responsive sections.',
      'I built it using reusable React components to keep the code organized, maintainable, and easy to update across different screen sizes.',
    ],
    challenge: {
      paragraphs: [
        'During the development of this project, I faced several challenges that helped me improve my front-end development skills.',
      ],
      bullets: [
        'Responsive Design: Making the website look good on desktop, tablet, and mobile screens.',
        'Smooth Scrolling: Creating smooth scrolling effects and animations for a better user experience.',
        "Pixel-Perfect Layout: Matching the original design's spacing, typography, colors, and section layouts.",
        'Reusable Components: Dividing the website into reusable React components to keep the code clean and organized.',
        'Tailwind CSS: Using Tailwind utility classes to style elements efficiently and maintain consistent design.',
      ],
    },
    approach: {
      paragraphs: [
        'I approached this project by studying the original Nexor website and recreating its design using React and Tailwind CSS. I focused on building reusable components, maintaining consistent styling, and creating a smooth, responsive experience across different screen sizes.',
      ],
      points: [
        {
          title: 'Component-Based Development',
          text: 'Built reusable React components to keep the code clean, organized, and easy to maintain.',
        },
        {
          title: 'Responsive Styling',
          text: 'Used Tailwind CSS to create flexible layouts that adapt to desktop, tablet, and mobile screens.',
        },
        {
          title: 'Smooth User Experience',
          text: 'Focused on smooth scrolling, interactive hover effects, and consistent visual styling to match the original design.',
        },
      ],
    },
    learned: [
      'I improved my React and Tailwind CSS skills, learned to build reusable components, and gained experience in responsive design, smooth animations, and recreating modern website layouts.',
    ],
    images: [
      '/images/nexor/1.png',
      '/images/nexor/2.png',
      '/images/nexor/3.png',
    ],
  },
  {
    slug: 'eapro-solar-energy',
    title: 'EAPRO Solar Energy',
    category: 'Team project',
    description:
      'EAPRO Solar Energy is a modern, responsive website showcasing solar energy solutions, including solar panels, inverters, and sustainable power systems. The project highlights clean energy, innovative technology, and eco-friendly solutions for homes and businesses.',
    cover: '/images/eapro-solar-energy/cover.png',
    liveUrl: 'https://ghezaalbahar-gif.github.io/Eapro-Solar-Energy/',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Team project' },
      { label: 'Team', value: 'NetLinks training teammates' },
      { label: 'Role', value: 'HTML, CSS, JAVASCRIPT' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'EAPRO Solar Energy is a multi-page website for a solar energy company, built as a team project during my NetLinks training. Instead of working alone, we split the pages and features between teammates and combined them into one product.',
      'The site presents the company, its solar products and services, and contact information in a professional layout.',
    ],
    challenge: {
      paragraphs: [
        'Working as a team was the real challenge — and the biggest lesson. Our code had to match in naming, styling, and structure, or the pages would feel like different websites stitched together.',
      ],
      bullets: [
        'Agreeing on one design system before anyone started coding',
        'Coordinating our work with Git so we did not overwrite each other',
        'Keeping the visual language consistent across pages built by different people',
      ],
    },
    approach: {
      paragraphs: [
        'We planned the site together first: a shared style guide, a clear file structure, and an agreement on who owns which page.',
      ],
      points: [
        {
          title: 'Shared style decisions',
          text: 'We defined colors, fonts, and spacing together at the start, so every page felt like part of the same brand.',
        },
        {
          title: 'Git-based workflow',
          text: 'We practiced branching and reviewing each other’s code, which made the project my first real taste of team development.',
        },
        {
          title: 'Regular check-ins',
          text: 'Short syncs kept us aligned on progress and helped us solve blockers as a group instead of alone.',
        },
      ],
    },
    learned: [
      'This project taught me how real products get built: through communication, compromise, and shared standards. My technical skills grew, but my collaboration skills grew even more.',
    ],
    images: [
      '/images/eapro-solar-energy/1.png',
      '/images/eapro-solar-energy/2.png',
      '/images/eapro-solar-energy/3.png',
      
    ],
  },
  {
    slug: 'zohco-eco-friendly',
    title: 'Zohco Eco-Friendly',
    category: 'Learning practice',
    description:
      'A website recreated for learning and frontend practice — rebuilding an existing design to sharpen my CSS and layout skills.',
    cover: '/images/zohco-eco-friendly/cover.png',
    liveUrl: 'https://ghezaalbahar-gif.github.io/Zohco-Eco-Friendly/',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Learning project' },
      { label: 'Role', value: 'Front-end development' },
      { label: 'Stack', value: 'HTML, CSS, JavaScript' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'Zohco Eco-Friendly is a practice project: I recreated an existing eco-friendly website design to train my eye and my hands. Copying a real design is one of the best exercises for learning how professional websites are structured.',
      'The site presents an eco-friendly brand with product sections and a calm, natural visual style.',
    ],
    challenge: {
      paragraphs: [
        'Recreating someone else’s design sounds easier than designing from scratch, but it demands precision: every section has to match the original’s spacing, typography, and rhythm — "close enough" is not enough.',
      ],
      bullets: [
        'Matching complex sections like heroes and product grids section by section',
        'Understanding why the original design made the choices it made',
        'Resisting the urge to improvise and instead reading the design carefully',
      ],
    },
    approach: {
      paragraphs: [
        'I treated the original design as my specification and compared my version against it constantly while building.',
      ],
      points: [
        {
          title: 'Section-by-section rebuild',
          text: 'I rebuilt the page one section at a time, comparing each result with the original before moving on.',
        },
        {
          title: 'Studying the original',
          text: 'For every layout, I asked why it worked — this turned a copying exercise into a design lesson.',
        },
        {
          title: 'Polish pass',
          text: 'At the end I fixed small mismatches in spacing and alignment, which is where most of the quality lives.',
        },
      ],
    },
    learned: [
      'This recreation sharpened my attention to detail more than any tutorial could. I learned to read designs like a developer and to spot the small decisions that make a layout feel professional.',
    ],
    images: [
      '/images/zohco-eco-friendly/1.png',
      '/images/zohco-eco-friendly/2.png',
      '/images/zohco-eco-friendly/3.png',
      
    ],
  },
  {
    slug: 'netlinks-landing-page',
    title: 'NETLINKS Landing page',
    category: 'Team project',
    description:
      'A responsive website project built with React.js, focusing on a clean user interface and reusable components.',
    cover: '/images/netlinks-landing-page/cover.png',
    liveUrl: 'https://ghezaalbahar-gif.github.io/Netlinks-React.js-project/',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Web Development' },
      { label: 'Role', value: 'Design & development' },
      { label: 'Stack', value: 'React.js,Tailwind css, JavaScript, HTML5, CSS3' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'Netlinks is a React.js website project developed to create a responsive and user-friendly web experience. ',
      'The project focuses on modern UI design, reusable React components, and organized frontend development.',
    ],
    challenge: {
      paragraphs: [
        "The main challenges of this project were creating a responsive layout for different screen sizes, organizing the application with reusable React components, and maintaining consistent styling and smooth navigation. Overcoming these challenges helped improve the website's usability, structure, and overall user experience.",
      ],
      bullets: [
        'Creating a responsive layout that works smoothly across different screen sizes.',
        'Building reusable React components to keep the code organized and maintainable.',
        'Ensuring consistent styling, a user-friendly interface, and smooth navigation throughout the website.',
      ],
    },
    approach: {
      paragraphs: [
        'The approach for the Netlinks project focused on building a responsive, well-structured website using React.js. By breaking the interface into reusable components and applying consistent styling, the development process aimed to create a clean design, improve maintainability, and deliver a smooth user experience.',
      ],
      points: [
        {
          title: 'Component-Based Development',
          text: 'The website was organized into reusable React components to keep the code clean, structured, and easy to maintain.',
        },
        {
          title: 'Responsive Design',
          text: 'Flexible layouts and styling techniques were used to help the website adapt to different screen sizes and devices.',
        },
        {
          title: 'User Experience',
          text: 'The interface was designed with a focus on visual consistency, clear navigation, and an intuitive browsing experience.',
        },
      ],
    },
    learned: [
      'Working on the Netlinks project helped me strengthen my React.js and frontend development skills. I gained practical experience in building responsive layouts, organizing code into reusable components, and improving the overall user experience.',
    ],
    images: [
      '/images/netlinks-landing-page/1.png',
      '/images/netlinks-landing-page/2.png',
      '/images/netlinks-landing-page/3.png',
      
    ],
  },
  {
    slug: 'designer-up',
    title: 'Designer Up',
    category: 'Web practice',
    description:
      'Designer Up is a modern, responsive website focused on creative design, clean layouts, and a smooth user experience across devices.',
    cover: "/images/designer-up/cover.png",
    liveUrl: 'https://ghezaalbahar-gif.github.io/Designer-Up/',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Cards Page' },
      { label: 'Role', value: 'HTML CSS practice' },
      { label: 'Stack', value: 'HTML5, CSS3' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'The main challenge was creating a visually appealing and responsive interface while maintaining consistent styling, clear content structure, and smooth navigation across different screen sizes.',
    ],
    challenge: {
      paragraphs: [
        'During the development of this project, I faced several challenges that helped me improve my front-end development skills.',
      ],
      bullets: [
        'Developed a clean and visually engaging website layout.',
        'Implemented responsive styling for different screen sizes.',
        'Focused on intuitive navigation and a consistent user experience.',
      ],
    },
    approach: {
      paragraphs: [
        'I focused on creating a clean, modern, and responsive interface with consistent styling and intuitive navigation to deliver a smooth browsing experience across different devices.',
      ],
      points: [
        {
          title: 'Clean Design',
          text: 'Created a simple and visually appealing layout.',
        },
        {
          title: 'Responsive Layout',
          text: 'Adapted the design for different screen sizes.',
        },
        {
          title: 'User Experience',
          text: 'Focused on clear navigation and accessible content.',
        },
      ],
    },
    learned: [
      'This project helped me improve my frontend development skills and understand how to build a clean, responsive, and user-friendly website.',
    ],
    images: [
      '/images/designer-up/1.png',
      '/images/designer-up/2.png',
      '/images/designer-up/3.png',
      
    ],
  },
  {
    slug: 'netlinks-pricing',
    title: 'NETLINKS Pricing',
    category: 'Team Project',
    description:
      'Netlinks Pricing is a clean, responsive website that presents service plans and pricing options in an organized layout, making it easy for users to compare features and choose the right plan.',
    cover: "/images/netlinks-pricing/cover.png",
    liveUrl: 'https://ghezaalbahar-gif.github.io/Netlinks-Pricing/',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Pricing Page' },
      { label: 'Role', value: 'HTML CSS group practice' },
      { label: 'Stack', value: 'HTML5, CSS3' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'A modern pricing website designed to present service plans clearly, helping users compare features and choose the option that best fits their needs.',
    ],
    challenge: {
      paragraphs: [
        'The main challenge was creating a clean, structured pricing layout that makes plan comparisons easy while maintaining visual consistency and responsiveness across different screen sizes.',
      ],
      bullets: [
        'Pricing Layout: Organized plans and features for easy comparison.',
        'Responsive Design: Adapted the layout for desktop and mobile screens.',
        'User Experience: Focused on clear information hierarchy and intuitive navigation.',
      ],
    },
    approach: {
      paragraphs: [
        'I focused on building a clean and responsive pricing page with a clear layout, organized plan details, and consistent styling to help users compare options easily.',
      ],
      points: [
        {
          title: 'Clear Pricing Layout',
          text: ' Organized pricing plans and features for quick comparison.',
        },
        {
          title: 'Responsive Design',
          text: 'Adapted the layout for different screen sizes.',
        },
        {
          title: 'Visual Consistency',
          text: 'Used consistent spacing, typography, and styling throughout the page.',
        },
      ],
    },
    learned: [
      'This project helped me improve my frontend development skills and understand how to present pricing information clearly and effectively.',
    ],
    images: [
      '/images/netlinks-pricing/1.png',
      '/images/netlinks-pricing/2.png',
      '/images/netlinks-pricing/3.png',
      
    ],
  },
 {
    slug: 'dream-house',
    title: 'Dream House',
    category: 'HTML CSS practice',
    description:
      'Build Your Dream House is a web development project showcasing a clean, structured interface built to present content in an accessible and user-friendly way.',
    cover: "/images/dream-house/cover.png",
    liveUrl: 'https://ghezaalbahar-gif.github.io/Bootcamp-2/',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Landing Page' },
      { label: 'Role', value: 'HTML CSS practice' },
      { label: 'Stack', value: 'HTML5, CSS3' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'The main challenge was presenting property information, pricing, and listing details in a clear and consistent layout while maintaining a responsive design and smooth browsing experience.',
    ],
    challenge: {
      paragraphs: [
        'I focused on creating a modern real estate interface with structured property cards, clear navigation, and well-organized sections to help users explore available properties.',
      ],
      bullets: [
        'Ensuring property listings display correctly across different screen sizes.',
        'Organizing property images, prices, and details in a clear, structured layout.',
        'Maintaining consistent spacing, typography, and styling throughout the website.',
      ],
    },
    approach: {
      paragraphs: [
        'I focused on creating a modern real estate interface with structured property cards, clear navigation, and well-organized sections to help users explore available properties.',
      ],
      points: [
        {
          title: 'Property Listings',
          text: 'Organized property cards with images, details, and pricing.',
        },
        {
          title: 'Responsive Layout',
          text: 'Designed sections to adapt to different screen sizes.',
        },
        {
          title: 'Visual Hierarchy',
          text: 'Used consistent spacing and typography to improve readability.',
        },
      ],
    },
    learned: [
      'This project helped me strengthen my frontend development skills and understand how to organize information-heavy websites effectively.',
    ],
    images: [
      '/images/dream-house/1.png',
      '/images/dream-house/2.png',
      '/images/dream-house/3.png',
    
      
    ],
  },
  {
    slug: 'co-and-glow',
    title: 'Co & Glow',
    category: 'HTML practice',
    description:
      'Co & Glow is a modern, visually engaging website focused on showcasing products through clean layouts, attractive imagery, and a user-friendly browsing experience.',
    cover: "/images/co-and-glow/cover.png",
    liveUrl: 'https://ghezaalbahar-gif.github.io/Built-to-Buy/',
    liveLabel: 'View live site',
    meta: [
      { label: 'Type', value: 'Landing Page' },
      { label: 'Role', value: 'HTML practice' },
      { label: 'Stack', value: 'HTML5, CSS3' },
      { label: 'Status', value: 'Live on GitHub Pages' },
    ],
    overview: [
      'Co & Glow is a website project designed with a focus on visual presentation, organized content, and a clean interface that helps create an engaging online experience.',
    ],
    challenge: {
      paragraphs: [
        'The main challenge was creating a visually consistent design while ensuring that the layout remained organized, responsive, and easy to navigate.',
      ],
      bullets: [
        'Maintaining consistent spacing, typography, and visual styling.',
        'Adapting the layout to different screen sizes.',
        'Organizing content and images for a clear browsing experience.',
      ],
    },
    approach: {
      paragraphs: [
        'I focused on creating a clean and modern interface with consistent styling, structured sections, and responsive layouts.',
      ],
      points: [
        {
          title: 'Visual Design',
          text: 'Used clear layouts and attractive visual elements.',
        },
        {
          title: 'Responsive Layout',
          text: 'Adapted page sections for different screen sizes.',
        },
        {
          title: 'Content Structure',
          text: 'Organized content to improve readability and navigation.',
        },
      ],
    },
    learned: [
      'This project helped me improve my frontend development skills and understand the importance of visual consistency and responsive design.',
    ],
    images: [
      '/images/co-and-glow/1.png',
      '/images/co-and-glow/2.png',
      '/images/co-and-glow/3.png',
      
    ],
  },
]

const projects = rawProjects.map((project) => ({
  ...project,
  cover: asset(project.cover),
  images: project.images.map(asset),
}))

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export default projects
