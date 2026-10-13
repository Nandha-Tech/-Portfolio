const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;
export const me = {
  name: 'Nandha Kumar',
  roles: ['Full Stack Developer', 'React Developer', 'UI/UX Enthusiast'],
  intro: "I build seamless digital experiences that combine functionality with aesthetic appeal. Computer Science graduate, React-first, comfortable across the whole stack.",
  photo: './assets/Nandhakumar.T.jpeg',
  cv: './assets/Nandha_Kumar_MERN_Stack_Developer_Resume.pdf',
  email: 'nandhakumar.tirupathi@gmail.com',
  phone: '+91 80728 59310',
  socials: [
    { n: 'GitHub', u: 'https://github.com/nandha-tech' },
    { n: 'LinkedIn', u: 'https://www.linkedin.com/in/nandhakumaroffl' },
    { n: 'Instagram', u: 'https://www.instagram.com/nandhakumaroffl' },
  ],
  stats: [['14', 'Projects built'], ['2', 'Internships']],
};
export const nav = [
  { id: 'home', l: 'Home' }, { id: 'experience', l: 'Experience' }, { id: 'projects', l: 'Projects' },
  { id: 'skills', l: 'Skills' }, { id: 'services', l: 'Services' }, { id: 'contact', l: 'Contact' },
];
export const exp = [
  {
    role: 'Software Engineer',
    org: 'QuikOne',
    type: 'Full-time',
    when: 'Jan 2026 – Present',
    len: '1 yr',
    where: 'Chennai, Tamil Nadu, India · On-site',
    text: 'Building responsive and scalable web applications using React.js, JavaScript, HTML, and CSS. Creating dynamic user interfaces and integrating RESTful APIs.',
    tags: ['React.js', 'Angular','Next.js', 'JavaScript', 'HTML', 'CSS', 'REST APIs','MongoDB','Postgresql'],
  },
  {
    role: 'React Developer',
    org: 'SMACK Technologies Inc.',
    type: 'Internship',
    when: 'Apr 2025 – Oct 2025',
    len: '6 mos',
    where: 'Tirunelveli, Tamil Nadu · Hybrid',
    text: 'Built and maintained responsive web apps with HTML, CSS, JavaScript, React and Python (Django). Designed PostgreSQL databases and integrated REST APIs. Worked with cross-functional teams on eCommerce platforms, student management systems and chatbot applications.',
    tags: ['React.js', 'HTML', 'Material-UI', 'Redux', 'Vue.js', 'TypeScript'],
  },
];
export const edu = [
  ['P.E.T Engineering College', 'B.E, Computer Science Engineering', '2021 – 2025 · CGPA 8.5'],
  ['National Matric Hr Sec School', '12th, Computer Science', '2021 · 76%'],
  ['National Matric Hr Sec School', '10th', '2019 · 70%'],
];
export const projects = [
  // ── Catalogue websites ──
  {
    t: 'Restaurant Website', c: 'catalogue',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=75&auto=format&fit=crop',
    d: 'Elegant restaurant site with menu showcase, reservations and a vibrant UI — deployed on Cloudflare Workers.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://restaurant-website.nandhakumar77c.workers.dev', src: 'https://github.com/Nandha-Tech/Restaurant-Website',
  },
  {
    t: 'Real Estate Website', c: 'catalogue',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=75&auto=format&fit=crop',
    d: 'Property listing site with search filters, property details and inquiry forms — deployed on Cloudflare Workers.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://realestate.nandhakumar77c.workers.dev/', src: 'https://github.com/Nandha-Tech/realestate',
  },
  {
    t: 'Clinic Website', c: 'catalogue',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=75&auto=format&fit=crop',
    d: 'Medical clinic landing page with services, doctor profiles and appointment booking UI.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://clinic-webiste.nandhakumar77c.workers.dev', src: 'https://github.com/Nandha-Tech/Clinic-webiste',
  },
  {
    t: 'Craftfolio', c: 'catalogue',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=75&auto=format&fit=crop',
    d: 'Creative portfolio / agency website showcasing design and development work with smooth animations.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://craftfolio-website.nandhakumar77c.workers.dev', src: 'https://github.com/Nandha-Tech/Craftfolio-website',
  },
  {
    t: 'Gym & Fitness Website', c: 'catalogue',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&q=75&auto=format&fit=crop',
    d: 'Fitness centre landing page with class schedules, trainer bios, pricing and a bold high-energy design.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    live: 'https://gym-fitness-website.nandhakumar77c.workers.dev', src: 'https://github.com/Nandha-Tech/gym-fitness-website',
  },
  // ── React / Frontend projects ──
  {
    t: 'Email Customizer', c: 'react',
    img: './assets/projects/email-customizer.png',
    d: 'Drag & drop email template builder with live preview and export to HTML or MJML.',
    tags: ['React', 'JavaScript', 'Material UI'],
    live: 'https://email-customizer-9m8u.vercel.app/', src: 'https://github.com/Nandha-Tech/Email-Customizer-.git',
  },
  {
    t: 'Human Card', c: 'react',
    img: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=900&q=75&auto=format&fit=crop',
    d: 'Digital identity card: store, preview and share personal data with themes, PDF export and cloud sync.',
    tags: ['React', 'JavaScript', 'Material UI', 'FastAPI'],
    live: 'https://human-card-1.onrender.com/', src: 'https://github.com/Nandha-Tech/Human-Card',
  },
  {
    t: 'Resume Builder', c: 'react',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=75&auto=format&fit=crop',
    d: 'Create professional resumes from templates and export them as PDF.',
    tags: ['TypeScript', 'React', 'HTML', 'CSS'],
    live: 'https://resume-builder-584w.vercel.app/', src: 'https://github.com/Nandha-Tech/Resume-Builder',
  },
  {
    t: 'Portfolio Website', c: 'react',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=75&auto=format&fit=crop',
    d: 'This portfolio — responsive, animated, with AI chatbot and dark/light mode.',
    tags: ['JavaScript', 'CSS', 'React', 'Vite'],
    live: 'https://nandha-tech.github.io/-Portfolio/', src: 'https://github.com/Nandha-Tech/-Portfolio',
  },
  // ── Full Stack projects ──
  {
    t: 'E-Commerce Website', c: 'full',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=75&auto=format&fit=crop',
    d: 'Product listings, cart, authentication and payment integration.',
    tags: ['JavaScript', 'CSS', 'React', 'Node.js'],
    live: 'https://shop-sea-gold.vercel.app/', src: 'https://github.com/Nandha-Tech/Shop-sea',
  },
  {
    t: 'MERN Food Order App', c: 'full',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=75&auto=format&fit=crop',
    d: 'Auth, menu management, cart, order history, admin panel and real-time order status via WebSockets.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: 'https://github.com/Nandha-Tech', src: 'https://github.com/Nandha-Tech',
  },
  {
    t: 'Student Management System', c: 'full',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=75&auto=format&fit=crop',
    d: 'Student records with full CRUD, built on a REST API with Axios.',
    tags: ['React', 'REST API', 'Axios', 'Material UI'],
    live: 'https://student-mangement-system-crud.vercel.app/', src: 'https://github.com/Nandha-Tech/Student-Mangement-System-CRUD',
  },
  {
    t: 'Chatbot AI', c: 'full',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=75&auto=format&fit=crop',
    d: 'Context-aware conversational assistant with multi-turn chat and file upload for knowledge ingestion.',
    tags: ['React', 'FastAPI', 'OpenAI', 'Material UI'],
    live: 'https://github.com/Nandha-Tech', src: 'https://github.com/Nandha-Tech',
  },
  {
    t: 'AI Career Finder', c: 'full',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=75&auto=format&fit=crop',
    d: 'Analyzes skills and interests to recommend personalized career paths.',
    tags: ['React', 'Flask', 'ML', 'OpenAI API'],
    live: 'https://ai-career-path-finder-f0tz8b0y9-nandhakumars-projects-9d088f9f.vercel.app/', src: 'https://github.com/Nandha-Tech/Ai-career-path-finder',
  },
];

export const filters = [['all', 'All'], ['catalogue', 'Catalogue'], ['react', 'Frontend'], ['full', 'Full Stack']];

const dv = (n, f) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${f || n + '-original'}.svg`;
export const stack = [['html5'], ['css3'], ['javascript'], ['react'], ['typescript'], ['vuejs'], ['redux'], ['tailwindcss'], ['materialui'], ['nodejs'], ['express', 'express-original'], ['mongodb'], ['python'], ['figma']].map(([n, f]) => [n, dv(n, f)]);
const dv2 = (n, f) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${f || n + '-original'}.svg`;
const si = (slug) => `https://img.shields.io/badge/-${slug}-555?style=flat&logo=${slug}&logoColor=white`;
export const skillStack = [
  {
    cat: 'FRONTEND',
    items: [
      { name: 'HTML5', icon: dv2('html5') },
      { name: 'CSS3', icon: dv2('css3') },
      { name: 'JavaScript', icon: dv2('javascript') },
      { name: 'React', icon: dv2('react') },
      { name: 'Redux', icon: dv2('redux') },
      { name: 'Angular', icon: dv2('angular') },
      { name: 'TypeScript', icon: dv2('typescript') },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Material UI', icon: dv2('materialui') },

    ],
  },
  {
    cat: 'BACKEND',
    items: [
      { name: 'Node.js', icon: dv2('nodejs') },
      { name: 'Express', icon: dv2('express', 'express-original') },
      { name: 'Python', icon: dv2('python') },
      { name: 'Django', icon: dv2('django', 'django-plain') },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'REST API', icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png' },
    ],
  },
  {
    cat: 'DATABASE',
    items: [
      { name: 'MongoDB', icon: dv2('mongodb') },
      { name: 'PostgreSQL', icon: dv2('postgresql') },
    ],
  },
  {
    cat: 'TOOLS & DEVOPS',
    items: [
      { name: 'Git', icon: dv2('git') },
      { name: 'GitHub', icon: dv2('github', 'github-original') },
      { name: 'VS Code', icon: dv2('vscode', 'vscode-original') },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      // { name: 'Figma', icon: dv2('figma') },
      // { name: 'Linux', icon: dv2('linux') },
    ],
  },
];
export const skills = [
  ['Frontend', ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Material UI', 'Bootstrap', 'Tailwind CSS', 'Responsive Design']],
  ['Backend', ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs']],
  ['Database & Tools', ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Postman']],
  ['UI/UX Design', ['Figma', 'Adobe Photoshop', 'Wireframing', 'Prototyping', 'User Research']],
];
export const services = [
  ['Web Development', 'Fast, responsive websites and web apps built with React, HTML, CSS and JavaScript.'],
  ['Full Stack Apps', 'End to end MERN or React + Django/FastAPI apps with auth, databases and deployment.'],
  ['UI/UX Design', 'Figma wireframes and prototypes turned into clean, accessible interfaces.'],
  ['API Integration', 'REST API design and integration, payments, PDF export and cloud sync.'],
  ['Chatbots & AI Features', 'Chat assistants and AI-powered features using FastAPI and OpenAI-style backends.'],
  ['Dashboards & Tools', 'Admin panels, builders and management systems with CRUD and live previews.'],
];
