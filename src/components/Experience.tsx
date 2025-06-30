'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '@/constants/experience';
import { fadeInUp, staggerContainer } from '@/animations/animations';
import Image from 'next/image';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
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

const ExperienceGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Position = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const CurrentBadge = styled.span`
  background: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  font-size: 1rem;
`;

const BulletPoints = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const BulletPoint = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

export const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
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
          Work Experience
        </SectionHeading>
        
        <SectionSubheading
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          My professional journey
        </SectionSubheading>
        
        <ExperienceGrid
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardHeader>
                <CompanyLogo>
                  {experience.logoUrl ? (
                    <Image src={experience.logoUrl} alt={experience.company} width={40} height={40} style={{ objectFit: 'contain' }} />
                  ) : (
                    experience.company.split(' ').map(word => word[0]).join('')
                  )}
                </CompanyLogo>
                
                <CompanyInfo>
                  <CompanyName>{experience.company}</CompanyName>
                  <Position>{experience.position}</Position>
                  <Duration>
                    <Calendar size={14} />
                    {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                    {experience.current && <CurrentBadge>Current</CurrentBadge>}
                  </Duration>
                  <Location>
                    <MapPin size={14} />
                    Remote / India
                  </Location>
                </CompanyInfo>
              </CardHeader>
              
              <Description>{experience.description}</Description>
              
              <BulletPoints>
                <BulletPoint>Contributed to the design, development, and testing of applications.</BulletPoint>
                <BulletPoint>Worked with cross-functional teams to build features.</BulletPoint>
                <BulletPoint>Gained hands-on experience with real-world tech stack.</BulletPoint>
                <BulletPoint>Improved debugging skills and performance optimization.</BulletPoint>
              </BulletPoints>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};