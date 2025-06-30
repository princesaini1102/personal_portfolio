# Personal Portfolio - Prince Saini

A modern, responsive personal portfolio website built with Next.js, showcasing my skills, experience, and projects as a Full Stack Developer.

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-url.com) *(Add your deployed URL here)*

## ✨ Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Engaging user experience with Framer Motion animations
- **Contact Form**: Functional contact form with email integration using Resend
- **Dark/Light Theme**: Theme switching capability with styled-components
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **TypeScript**: Full type safety throughout the application
- **Database Integration**: Prisma ORM for data management

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend & Database
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Prisma** - Database ORM
- **MySQL** - Database

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Resend** - Email service

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Portfolio projects
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── constants/          # Data constants
│   ├── about.ts        # Personal information
│   ├── skills.ts       # Skills data
│   ├── projects.ts     # Projects data
│   └── experience.ts   # Experience data
├── lib/               # Utility libraries
│   ├── prisma.ts      # Database client
│   └── ThemeContext.tsx # Theme management
└── types/             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- MySQL database (for full functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/portfolio"
   RESEND_API_KEY="your_resend_api_key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update your personal details in `src/constants/about.ts`:
- Name, role, location
- Profile image
- Social media links
- Professional summary

### Projects
Add your projects in `src/constants/projects.ts`:
- Project title and description
- Live demo and GitHub links
- Technology tags
- Featured project status

### Skills
Modify your skills in `src/constants/skills.ts`:
- Skill categories (Frontend, Backend, Database, etc.)
- Proficiency levels
- Custom icons

## 🌟 Featured Projects

1. **School Management System** - Comprehensive educational platform
2. **Online Doctor Appointment Platform** - Healthcare booking system
3. **CloudPlay Solutions Website** - Corporate website with SEO optimization
4. **Pentagon CAD/CAM Centre** - Professional service website

## 📧 Contact

- **Email**: princesaini2604@gmail.com
- **LinkedIn**: [Prince Saini](https://www.linkedin.com/in/prince-saini-306653172/)
- **GitHub**: [princesaini1102](https://github.com/princesaini1102)
- **HackerRank**: [princesaini2604](https://www.hackerrank.com/profile/princesaini2604)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by Prince Saini**
