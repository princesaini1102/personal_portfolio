export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Version Control';
  icon: string;
  level: number;
}

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', icon: '⚛️', level: 5 },
  { name: 'Next.js', category: 'Frontend', icon: '▲', level: 5 },
  { name: 'JavaScript', category: 'Frontend', icon: '🟨', level: 5 },
  { name: 'HTML5', category: 'Frontend', icon: '🌐', level: 5 },
  { name: 'CSS3', category: 'Frontend', icon: '🎨', level: 5 },
  
  // Backend
  { name: 'Express.js', category: 'Backend', icon: '🚀', level: 4 },
  { name: 'Node.js', category: 'Backend', icon: '🟢', level: 4 },
  
  // Database
  { name: 'MySQL', category: 'Database', icon: '🐬', level: 4 },
  { name: 'Prisma', category: 'Database', icon: '🔷', level: 4 },
  
  // Version Control
  { name: 'Git', category: 'Version Control', icon: '📝', level: 5 },
  { name: 'GitHub', category: 'Version Control', icon: '��', level: 5 },
]; 