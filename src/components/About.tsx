'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { aboutData } from '@/constants/about';
import { fadeInUp, staggerContainer } from '@/animations/animations';

const AboutSection = styled.section`
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

const AboutContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Name = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Role = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Summary = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const AboutImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(138, 43, 226, 0.1),
    0 0 40px rgba(138, 43, 226, 0.05),
    0 0 60px rgba(138, 43, 226, 0.03),
    inset 0 0 20px rgba(138, 43, 226, 0.05);
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  font-weight: bold;
  box-shadow: 
    0 20px 40px rgba(245, 170, 170, 0.27),
    10 7 20px rgba(167, 82, 246, 0.3),
    7 10 40px rgba(48, 240, 201, 0.48),
    10 5 60px rgba(138, 43, 226, 0.03),
    inset 5 2 20px rgb(253, 11, 160);
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 3rem;
  }
`;

export const About: React.FC = () => {
  return (
    <AboutSection id="about">
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
          About Me
        </SectionHeading>
        
        <SectionSubheading
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Get to know me better
        </SectionSubheading>
        
        <AboutContent
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <AboutText>
            <motion.div variants={fadeInUp}>
              <Name>{aboutData.name}</Name>
              <Role>{aboutData.role}</Role>
              <Summary>{aboutData.summary}</Summary>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <ContactInfo>
                <ContactItem>
                  <Mail size={16} />
                  {aboutData.email}
                </ContactItem>
                <ContactItem>
                  <MapPin size={16} />
                  {aboutData.location}
                </ContactItem>
              </ContactInfo>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <SocialLinks>
                <SocialLink
                  href={aboutData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </SocialLink>
                <SocialLink
                  href={aboutData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </SocialLink>
                <SocialLink
                  href={aboutData.links.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </AboutText>
          
          <AboutImage variants={fadeInUp}>
            {aboutData.image ? (
              <ProfileImage 
                src={aboutData.image} 
                alt={aboutData.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextSibling = e.currentTarget.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
            ) : null}
            <ImagePlaceholder style={{ display: aboutData.image ? 'none' : 'flex' }}>
              PS
            </ImagePlaceholder>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
}; 