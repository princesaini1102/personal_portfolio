export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  logoUrl?: string;
}

export const experienceData: WorkExperience[] = [
  {
    company: "CloudPlay Solutions Pvt. Ltd",
    position: "Software Engineer Intern",
    startDate: "Jan 2025",
    current: true,
    description: "Contributed to the design, development, and testing of applications. Worked with cross-functional teams to build features. Gained hands-on experience with real-world tech stack. Improved debugging skills and performance optimization.",
    logoUrl: "/images/logo.png"
  }
]; 