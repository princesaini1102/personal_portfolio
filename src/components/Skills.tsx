'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillsData } from '@/constants/skills';
import { fadeInUp, staggerContainer } from '@/animations/animations';

const SkillsSection = styled.section`
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
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary}20;
  border-radius: 8px;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const SkillLevel = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const LevelDot = styled.div<{ filled: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ filled, theme }) => 
    filled ? theme.colors.primary : theme.colors.border};
`;

const getCategorySkills = (category: string) => {
  return skillsData.filter(skill => skill.category === category);
};

const categories = ['Frontend', 'Backend', 'Database', 'Version Control'];

export const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
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
          Skills & Technologies
        </SectionHeading>
        
        <SectionSubheading
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Technologies I work with
        </SectionSubheading>
        
        <SkillsGrid
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {categories.map((category, categoryIndex) => (
            <SkillCategory
              key={category}
              variants={fadeInUp}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsList>
                {getCategorySkills(category).map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillInfo>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>
                        {Array.from({ length: 5 }, (_, i) => (
                          <LevelDot key={i} filled={i < skill.level} />
                        ))}
                      </SkillLevel>
                    </SkillInfo>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}; 