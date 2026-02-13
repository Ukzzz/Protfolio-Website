import { PersonalInfo, Project, Skill, Education } from '../types';

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
    image: '',
    images: [],
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
    image: '',
    images: [],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    category: 'fullstack',
    demoUrl: 'https://fulls-todo-list.onrender.com',
    githubUrl: 'https://github.com/Ukzzz/Todo-App.git',
    featured: false,
    completedAt: '2023-11-20'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Weather Application Using OpenWeatherMap API',
    longDescription: 'Developed a responsive weather forecast application by consuming the OpenWeatherMap API. Enabled real-time fetching of weather data (temperature, humidity, condition, wind speed) based on user-entered location. Designed a clean and responsive UI with condition-based icons and background changes. Applied asynchronous programming concepts (async/await) and handled errors for bad API responses gracefully.',
    image: '',
    images: [],
    technologies: ['OpenWeatherMap API', 'HTML', 'CSS', 'Node.js', 'Express'],
    category: 'backend',
    demoUrl: 'https://weather-forcast-vept.onrender.com',
    githubUrl: 'https://github.com/Ukzzz/Weather-Forcast-',
    featured: true,
    completedAt: '2023-09-10'
  },
  {
    id: '4',
    title: 'File System',
    description: 'File System CRUD Application (Node.js + Express)',
    longDescription: 'Built a backend project to demonstrate CRUD operations directly on the local file system using Node.js fs module. Implemented RESTful API endpoints for creating, reading, updating, and deleting text files from the server. Emphasized error handling, middleware setup, and clean separation of concerns between routes and controllers. Useful for demonstrating understanding of server-side logic and native Node.js capabilities.',
    image: '',
    images: [],
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
    image: '',
    images: [],
    technologies: ['Express.js', 'MongoDB', 'JWT', 'bcrypt', 'EJS'],
    category: 'backend',
    demoUrl: 'https://blog-website-8gm4.onrender.com',
    githubUrl: 'https://github.com/Ukzzz/Blog-Website-',
    featured: false,
    completedAt: '2023-08-15'
  },
  {
    id: '6',
    title: 'Real-Time Multiplayer Chess Game',
    description: 'Interactive online chess platform with real-time multiplayer support.',
    longDescription: 'Developed a real-time chess game supporting two-player matches and spectators. Features include drag-and-drop piece movement, legal move validation using the Chess.js library, and live updates across multiple clients via Socket.IO. The game detects check, checkmate, and draw conditions, and displays alerts for illegal moves. Built with Node.js, Express, and EJS for the frontend, ensuring responsive gameplay and synchronized board state for all connected players.',
    image: '',
    images: [],
    technologies: ['Node.js', 'Express.js', 'Socket.IO', 'Chess.js', 'EJS', 'CSS', 'HTML'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Ukzzz/Chess.git',
    featured: true,
    completedAt: '2025-10-10',
  },
  {
    id: '7',
    title: 'Inventory & Barcode System',
    description: 'A simple web-based inventory management system for uniforms with barcode scanning for delivery tracking.',
    longDescription: 'This system is a complete solution for inventory and delivery management. It features secure admin and staff authentication, full CRUD inventory management with categories and auto-generated barcodes, and real-time stock tracking with low-stock alerts. Barcode scanning works via webcam or manual input and supports multiple formats, while the delivery system automates stock updates, customer tracking, and delivery history. Users can generate Excel and PDF reports and view real-time dashboard analytics with filtering options. The modern, responsive UI is built with Tailwind CSS and intuitive navigation. The tech stack includes Node.js, Express.js, MongoDB, EJS, JavaScript, and libraries like Bwip-js, QuaggaJS, XLSX, Puppeteer, Moment.js, and Bcrypt.',
    image: '',
    images: [],
    technologies: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'EJS', 'Bwip-js', 'QuaggaJS','XLSX','Puppeteer','Bcrypt'],
    category: 'backend',
    demoUrl: 'https://inventroy-barcode.onrender.com',
    githubUrl: 'https://github.com/Ukzzz/Inventroy-Barcode',
    featured: true,
    completedAt: '2025-11-11',
  },
    {
    id: '8',
    title: 'License Plate Detection System',
    description: 'A computer vision project that detects vehicle license plates in video streams and extracts their text using OCR',
    longDescription: 'A computer vision project that detects vehicle license plates in video streams and extracts their text using OCR. This system leverages the YOLOv8 object detection model and EasyOCR for text recognition, wrapped in a processing pipeline that includes image enhancement for improved accuracy.',
    image: '',
    images: [],
    technologies: ['Ultralytics YOLOv8', 'EasyOCR', 'OpenCV (cv2)', 'Google Colab', 'Python',],
    category: 'computer vision',
    githubUrl: 'https://github.com/Ukzzz/LPR-System',
    featured: true,
    completedAt: '2026-02-05',
  },
      {
    id: '9',
    title: 'Car Detection System',
    description: 'This project implements a high-accuracy vehicle detection system specializing in identifying cars',
    longDescription: 'This project implements a high-accuracy vehicle detection system specializing in identifying cars within video streams and images. Built upon the Ultralytics YOLOv8 (You Only Look Once) architecture, it leverages deep learning to provide valid bounding box predictions in real-time.The project is designed to run in a GPU-accelerated environment (like Google Colab) and includes a full pipeline for data handling, training, validation, and inference.',
    image: '',
    images: [],
    technologies: ['Ultralytics YOLOv8', 'EasyOCR', 'OpenCV (cv2)', 'Google Colab', 'Python',],
    category: 'computer vision',
    githubUrl: 'https://github.com/Ukzzz/Car-Detection/',
    featured: true,
    completedAt: '2026-02-13',
  },
      {
    id: '10',
    title: 'Heart Disease Detection & Prediction',
    description: 'A comprehensive Machine Learning project for predicting heart disease using patient clinical data.',
    longDescription: 'A comprehensive Machine Learning project for predicting heart disease using patient clinical data. This project implements multiple classification algorithms to identify patients at risk of heart disease based on various medical parameters.',
    image: '',
    images: [],
    technologies: ['Random Forest Classifier', 'Pandas',  'NumPy', 'Google Colab', 'Python','Scikit-learn','Matplotlib',],
    category: 'machine learning',
    githubUrl: 'https://github.com/Ukzzz/Hear-Diesease-P',
    featured: true,
    completedAt: '2026-01-05',
  },
  {
    id: '11',
    title: 'Movie Recommendation System',
    description: 'A Content-Based Movie Recommendation System built using Natural Language Processing (NLP)',
    longDescription: 'A Content-Based Movie Recommendation System built using Natural Language Processing (NLP) and unsupervised machine learning techniques. The system analyzes movie metadata to find similar movies based on plot, genre, cast, and director information.',
    image: '',
    images: [],
    technologies: ['Vectorization','Cosine Similarity','NLP','NumPy', 'Pandas', 'Scikit-learn', 'Google Colab', 'Python', 'Matplotlib',],
    category: 'machine learning',
    githubUrl: '',
    featured: true,
    completedAt: '2026-02-05',
  },
  {
    id: '12',
    title: 'Cats vs Dogs Classification',
    description: 'A deep learning project that classifies images of cats and dogs',
    longDescription: 'This project implements a binary image classifier to distinguish between cats and dogs using Transfer Learning with the MobileNetV2 architecture. By leveraging a pre-trained network on ImageNet and adding a custom classification head',
    image: '',
    images: [],
    technologies: ['CNN','MobileNetV2','Python', 'TensorFlow', 'Keras', 'Google Colab', 'NumPy', 'Pandas', 'Matplotlib',],
    category: 'deep learning',
    githubUrl: '',
    featured: true,
    completedAt: '2026-02-05',
  },
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

  // Computer Vision
  { id: '13', name: 'Ultralytics YOLOv8', level: 80, category: 'computer vision', icon: 'ultralytics' },
  { id: '14', name: 'EasyOCR', level: 80, category: 'computer vision', icon: 'easyocr' },
  { id: '15', name: 'OpenCV (cv2)', level: 80, category: 'computer vision', icon: 'opencv' },
  { id: '16', name: 'Google Colab', level: 80, category: 'computer vision', icon: 'googlecolab' },  
  { id: '17', name: 'Python', level: 80, category: 'computer vision', icon: 'python' }, 

   // Machine Learning
   { id: '18', name: 'Scikit-learn', level: 90, category: 'machine learning', icon: 'scikit-learn' },
   { id: '19', name: 'XGBoost', level: 85, category: 'machine learning', icon: 'xgboost' },
   { id: '42', name: 'LightGBM', level: 80, category: 'machine learning', icon: 'algorithm' },
   { id: '43', name: 'CatBoost', level: 80, category: 'machine learning', icon: 'algorithm' },
   { id: '20', name: 'Linear Regression', level: 95, category: 'machine learning', icon: 'algorithm' },
   { id: '21', name: 'Logistic Regression', level: 95, category: 'machine learning', icon: 'algorithm' },
   { id: '22', name: 'SVM', level: 85, category: 'machine learning', icon: 'algorithm' },
   { id: '23', name: 'Naive Bayes', level: 85, category: 'machine learning', icon: 'algorithm' },
   { id: '38', name: 'Random Forest', level: 90, category: 'machine learning', icon: 'algorithm' },

   // Deep Learning
   { id: '24', name: 'TensorFlow', level: 85, category: 'deep learning', icon: 'tensorflow' },
   { id: '25', name: 'PyTorch', level: 85, category: 'deep learning', icon: 'pytorch' },
   { id: '26', name: 'Keras', level: 85, category: 'deep learning', icon: 'keras' },
   { id: '27', name: 'TensorFlow.js', level: 80, category: 'deep learning', icon: 'tensorflowjs' },
   { id: '39', name: 'CNN', level: 90, category: 'deep learning', icon: 'neural-network' },
   { id: '40', name: 'RNN', level: 85, category: 'deep learning', icon: 'neural-network' },
   { id: '41', name: 'Transformers', level: 80, category: 'deep learning', icon: 'neural-network' },

   // Data Science
   { id: '35', name: 'Pandas', level: 85, category: 'data science', icon: 'pandas' },
   { id: '36', name: 'NumPy', level: 85, category: 'data science', icon: 'numpy' },
   { id: '37', name: 'Matplotlib', level: 80, category: 'data science', icon: 'matplotlib' },  

  // Tools
  { id: '28', name: 'Git', level: 90, category: 'tools', icon: 'git' },
  { id: '29', name: 'GitHub', level: 90, category: 'tools', icon: 'github' },
  { id: '30', name: 'VSCode', level: 95, category: 'tools', icon: 'vscode' },
  { id: '31', name: 'Vercel', level: 80, category: 'tools', icon: 'vercel' },
  { id: '32', name: 'Postman', level: 80, category: 'tools', icon: 'postman' },
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
