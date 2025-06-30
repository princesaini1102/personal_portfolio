'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';
import { aboutData } from '@/constants/about';
import { fadeInUp } from '@/animations/animations';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const FooterInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const FooterName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FooterTagline = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
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

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const HeartIcon = styled(Heart)`
  color: ${({ theme }) => theme.colors.error};
  animation: heartbeat 1.5s ease-in-out infinite;
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <FooterInfo>
            <FooterName>{aboutData.name}</FooterName>
            <FooterTagline>Frontend Developer & Creative Problem Solver</FooterTagline>
          </FooterInfo>
          
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
        </FooterContent>
        
        <Copyright>
          © {currentYear} {aboutData.name}. Made with <HeartIcon size={16} /> using Next.js & TypeScript
        </Copyright>
      </Container>
    </FooterContainer>
  );
}; 