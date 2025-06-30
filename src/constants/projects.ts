export interface Project {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  tags: string[];
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    title: "School Management System",
    description: "Comprehensive school management platform with student data management, teacher dashboard, and holiday tracking modules. Features modern frontend with secure backend APIs.",
    liveLink: "https://wheat-ferret-429017.hostingersite.com/",
    tags: ["React", "Node.js", "MySQL", "Express"],
    featured: true
  },
  {
    title: "Online Doctor Appointment Platform",
    description: "Healthcare platform enabling patients to book appointments and conduct online consultations. Includes admin panel for healthcare providers.",
    liveLink: "https://clouldplaydoctor.online/",
    tags: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
    featured: true
  },
  {
    title: "CloudPlay Solutions Official Website",
    description: "SEO-optimized corporate website showcasing company services, portfolio, and client testimonials with modern design and performance optimization.",
    liveLink: "https://cloudplaysolutions.in/",
    tags: ["Next.js", "SEO", "Performance", "Corporate"],
    featured: true
  },
  {
    title: "Pentagon CAD/CAM Centre",
    description: "Professional information website for CAD/CAM services with service catalog, contact forms, and responsive design.",
    githubLink: "https://admirable-beijinho-64dde3.netlify.app/",
    tags: ["React", "CSS3", "Responsive", "Business"],
    featured: false
  }
]; 