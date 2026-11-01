export interface Profile {
  name: string;
  displayName: string;
  title: string;
  focus: string;
  education: string;
  email: string;
  githubUrl: string;
  headline: string;
  subheadline: string;
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  role: string;
  contribution?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
