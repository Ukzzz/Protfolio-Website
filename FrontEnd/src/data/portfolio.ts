import { PersonalInfo, Project, Skill, Experience, Education } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Uzair Kashif',
  title: 'Full Stack Developer (MERN) & AI/ML ',
  bio: 'I specialize in modern JavaScript frameworks like React and backend development with Node.js, forming a strong foundation in the MERN stack. I also have experience with Python, C++, and real-time technologies like Socket.IO. I am proficient with industry-standard tools such as Postman, Git, and GitHub to streamline development and ensure clean, collaborative code. I love tackling complex challenges and turning ideas into powerful, scalable applications with efficient and maintainable code.',
  avatar: '/photo1.jpg',
  resume: '/CV.pdf',
  contact: {
    email: 'uzairkashif180@gmail.com',
    phone: '+92-309-943-1613',
    location: 'Lahore, Pakistan',
    linkedin: 'https://www.linkedin.com/in/uzair-kashif-67402628a',
    github: 'https://github.com/Ukzzz',
    twitter: '',
    website: ''
  }
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Website Using Firebase',
    description: 'A modern, full-featured e-commerce platform built with React and Firebase.',
    longDescription: 'Developed a scalable and interactive e-commerce platform using Firebase as the backend service, integrating Firebase Realtime Database for live product updates and Firebase Authentication for secure user sign-up/sign-in workflows.',
    image: '/S1.png',
    images: [
      '/S1.png',
      '/S2.png',
      '/S3.png',
      '/S4.png',
      '/S5.png',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase Auth', 'Firestore'],
    category: 'fullstack',
    demoUrl: '',
    githubUrl: 'https://github.com/Ukzzz/E-Commerce-React-FireBase-',
    featured: true,
    completedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Full-Stack ToDo App (React + Node.js + Express)',
    description: 'A complete MERN-style task management system.',
    longDescription: 'A powerful task management tool that enables teams to collaborate effectively. Features include real-time updates using Socket.io, drag-and-drop task organization, project timelines, file attachments, comment systems, and comprehensive reporting dashboards.',
    image: '/F1.png',
    images: [
      '/F1.png'
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    category: 'fullstack',
    demoUrl: '',
    githubUrl: 'https://github.com/Ukzzz/Todo-App.git',
    featured: false,
    completedAt: '2023-11-20'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Weather Application Using OpenWeatherMap API',
    longDescription: 'Developed a responsive weather forecast application by consuming the OpenWeatherMap API. Enabled real-time fetching of weather data (temperature, humidity, condition, wind speed) based on user-entered location. Designed a clean and responsive UI with condition-based icons and background changes. Applied asynchronous programming concepts (async/await) and handled errors for bad API responses gracefully.',
    image: '/P1.png',
    images: [
      '/P1.png',
      '/P2.png',
      '/P3.png',
    ],
    technologies: ['OpenWeatherMap API', 'HTML', 'CSS', 'Node.js', 'Express'],
    category: 'backend',
    demoUrl: '',
    githubUrl: 'https://github.com/Ukzzz/Weather-Forcast-',
    featured: true,
    completedAt: '2023-09-10'
  },
  {
    id: '4',
    title: 'File System',
    description: 'File System CRUD Application (Node.js + Express)',
    longDescription: 'Built a backend project to demonstrate CRUD operations directly on the local file system using Node.js fs module. Implemented RESTful API endpoints for creating, reading, updating, and deleting text files from the server. Emphasized error handling, middleware setup, and clean separation of concerns between routes and controllers. Useful for demonstrating understanding of server-side logic and native Node.js capabilities.',
    image: '/Q1.png',
    images: [
      '/Q1.png',
      '/Q2.png'
    ],
    technologies: ['Node.js', 'Express.js', 'File System Module'],
    category: 'backend',
    demoUrl: '',
    githubUrl: 'https://github.com/Ukzzz/CURD-File-Operation',
    featured: true,
    completedAt: '2023-12-05'
  },
  {
    id: '5',
    title: 'Blogging Platform',
    description: 'Blogging Platform with Full Authentication & Authorization & CRUD',
    longDescription: 'Created a feature-rich blogging platform with user roles and permissions, integrating JWT for token-based authentication and bcrypt for password hashing. Implemented role-based access control (admin/user) for blog post management. Supported full CRUD operations on blog posts (create, edit, delete, view), with server-side validation and session management. Focused on secure coding practices, including input sanitization and secure session handling.',
    image: '/T1.png',
    images: [
      '/T1.png',
      '/T2.png',
      '/T3.png',
      '/T4.png',
      '/T5.png',
    ],
    technologies: ['Express.js', 'MongoDB', 'JWT', 'bcrypt', 'EJS'],
    category: 'backend',
    demoUrl: '',
    githubUrl: 'https://github.com/Ukzzz/Blog-Website-',
    featured: true,
    completedAt: '2023-08-15'
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', level: 90, category: 'frontend', icon: 'react' },
  { id: '2', name: 'JavaScript', level: 80, category: 'frontend', icon: 'javascript' },
  { id: '3', name: 'HTML', level: 90, category: 'frontend', icon: 'html' },
  { id: '4', name: 'CSS', level: 70, category: 'frontend', icon: 'css' },
  { id: '5', name: 'Bootstrap CSS', level: 70, category: 'frontend', icon: 'bootstrap' },
  { id: '6', name: 'Tailwind CSS', level: 70, category: 'frontend', icon: 'tailwindcss' },
  
  // Backend
  { id: '7', name: 'Node.js', level: 90, category: 'backend', icon: 'nodejs' },
  { id: '8', name: 'Express.js', level: 90, category: 'backend', icon: 'express' },
  { id: '9', name: 'Python', level: 80, category: 'backend', icon: 'python' },
  { id: '10', name: 'Django', level: 60, category: 'backend', icon: 'django' },
  
  // Database
  { id: '11', name: 'MongoDB', level: 85, category: 'database', icon: 'mongodb' },
  { id: '12', name: 'MySQL', level: 80, category: 'database', icon: 'mysql' },
  
  // Tools
  { id: '13', name: 'Git', level: 90, category: 'tools', icon: 'git' },
  { id: '14', name: 'GitHub', level: 90, category: 'tools', icon: 'github' },
  { id: '15', name: 'VSCode', level: 95, category: 'tools', icon: 'vscode' },
  { id: '16', name: 'Vercel', level: 80, category: 'tools', icon: 'vercel' },
  { id: '17', name: 'Postman', level: 80, category: 'tools', icon: 'postman' },
  
  // Design
  { id: '18', name: 'Figma', level: 70, category: 'design', icon: 'figma' },
  { id: '19', name: 'Canva', level: 80, category: 'design', icon: 'canva' }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Rafenthic',
    position: 'Web Developer Intern',
    duration: 'June 2024 - July 2024',
    description: [
      'Gained hands-on experience in web development, working on real-world projects.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React']
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Lahore',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    duration: '2022 - 2026',
    gpa: '3.3/4.0',
    description: ''
  },
  {
    id: '2',
    institution: 'Knowledge Gate',
    degree: 'Certificate',
    field: 'Full Stack Web Development',
    duration: '2025',
    description: ''
  },

];
