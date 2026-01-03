export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'mobile' | 'backend' | 'design';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  twitter?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resume: string;
  contact: ContactInfo;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export type FilterCategory = 'all' | 'frontend' | 'fullstack' | 'mobile' | 'backend' | 'design';
