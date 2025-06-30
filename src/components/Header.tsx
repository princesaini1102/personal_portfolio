'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';
import { slideInFromTop } from '@/animations/animations';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    flex-direction: column;
    padding: 2rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: all 0.3s ease;
    pointer-events: ${({ isOpen }) => isOpen ? 'auto' : 'none'};
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 800;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    transform: scale(1.1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer
      initial="initial"
      animate="animate"
      variants={slideInFromTop}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Prince Saini
        </Logo>

        <NavLinks isOpen={isMenuOpen}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </ThemeToggle>

          <MobileMenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </div>
      </Nav>
    </HeaderContainer>
  );
}; 