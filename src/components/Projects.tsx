'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star as StarIcon } from 'lucide-react';
import { projectsData } from '@/constants/projects';
import { fadeInUp, staggerContainer } from '@/animations/animations';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Star = styled(motion.div)<{ size: number; delay: number; top: string; left: string }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
  border-radius: 50%;
  box-shadow: 0 0 ${props => props.size * 2}px rgba(255, 255, 255, 0.6);
  animation: twinkle ${props => 2 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubheading = styled(motion.p)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsCount = styled(motion.div)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 2rem;
  font-style: italic;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, active }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ theme, active }) => 
    active ? 'white' : theme.colors.text};
  border-radius: 25px;
  cursor: pointer;
  font-weight: ${({ active }) => active ? '600' : '500'};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: ${({ theme, active }) => 
      active ? theme.colors.primary : theme.colors.surface};
    transform: translateY(-2px);
    box-shadow: ${({ active }) => active ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)'};
  }
  
  ${({ active, theme }) => active && `
    box-shadow: 0 4px 12px ${theme.colors.primary}40;
  `}
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.primary};
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &.live {
    background: ${({ theme }) => theme.colors.success};
    color: white;
    
    &:hover {
      background: ${({ theme }) => theme.colors.success}dd;
      transform: translateY(-2px);
    }
  }
  
  &.github {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      transform: translateY(-2px);
    }
  }
`;

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allTags = ['All', ...Array.from(new Set(projectsData.flatMap(project => project.tags)))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <ProjectsSection id="projects">
      <StarsContainer>
        <Star size={2} delay={0} top="10%" left="10%" />
        <Star size={3} delay={0.5} top="15%" left="20%" />
        <Star size={2} delay={1} top="25%" left="5%" />
        <Star size={4} delay={1.5} top="30%" left="85%" />
        <Star size={3} delay={2} top="40%" left="15%" />
        <Star size={2} delay={2.5} top="50%" left="90%" />
        <Star size={5} delay={3} top="60%" left="25%" />
        <Star size={3} delay={3.5} top="70%" left="80%" />
        <Star size={2} delay={4} top="80%" left="10%" />
        <Star size={4} delay={4.5} top="85%" left="70%" />
        <Star size={3} delay={5} top="20%" left="75%" />
        <Star size={2} delay={5.5} top="35%" left="60%" />
        <Star size={4} delay={6} top="45%" left="40%" />
        <Star size={3} delay={6.5} top="55%" left="95%" />
        <Star size={2} delay={7} top="65%" left="5%" />
        <Star size={5} delay={7.5} top="75%" left="50%" />
        <Star size={3} delay={8} top="90%" left="30%" />
        <Star size={2} delay={8.5} top="5%" left="50%" />
        <Star size={4} delay={9} top="95%" left="85%" />
        <Star size={3} delay={9.5} top="12%" left="35%" />
      </StarsContainer>
      <Container>
        <SectionHeading
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          My Projects
        </SectionHeading>
        
        <SectionSubheading
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Some of my recent work
        </SectionSubheading>
        
        <ProjectsCount
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
        >
          Showing {filteredProjects.length} of {projectsData.length} projects
        </ProjectsCount>
        
        <FilterContainer
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {allTags.map((filter, index) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {filter === 'Featured' && <StarIcon size={14} />}
              {filter}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsGrid
          key={activeFilter}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                layout
              >
                {project.featured && (
                  <FeaturedBadge>
                    <StarIcon size={12} />
                    Featured
                  </FeaturedBadge>
                )}
                
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTags>
                  {project.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ProjectTags>
                
                <ProjectLinks>
                  {project.liveLink && (
                    <ProjectLink
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </ProjectLink>
                  )}
                  
                  {project.githubLink && (
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      GitHub
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}; 