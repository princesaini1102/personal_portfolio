'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aboutData } from '@/constants/about';
import { fadeInUp, staggerContainer } from '@/animations/animations';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = styled.section`
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

const ContactContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ContactInfoText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

const ContactText = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const ContactLabel = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const ContactForm = styled.form`
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.error : theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.error : theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Toast = styled(motion.div)<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;
  background: ${({ theme, type }) => 
    type === 'success' ? theme.colors.success : theme.colors.error};
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }
`;

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
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
          Get In Touch
        </SectionHeading>
        
        <SectionSubheading
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Let's work together on your next project
        </SectionSubheading>
        
        <ContactContent
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <ContactInfo>
            <motion.div variants={fadeInUp}>
              <ContactInfoTitle>Let's Connect</ContactInfoTitle>
              <ContactInfoText>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </ContactInfoText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <ContactDetails>
                <ContactDetail>
                  <ContactIcon>
                    <Mail size={20} />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>{aboutData.email}</ContactValue>
                  </ContactText>
                </ContactDetail>
                
                <ContactDetail>
                  <ContactIcon>
                    <MapPin size={20} />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Location</ContactLabel>
                    <ContactValue>{aboutData.location}</ContactValue>
                  </ContactText>
                </ContactDetail>
                
                <ContactDetail>
                  <ContactIcon>
                    <Phone size={20} />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>+91 8283026214</ContactValue>
                  </ContactText>
                </ContactDetail>
              </ContactDetails>
            </motion.div>
          </ContactInfo>
          
          <motion.div variants={fadeInUp}>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  {...register('name')}
                  hasError={!!errors.name}
                  placeholder="Your name"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  hasError={!!errors.email}
                  placeholder="your.email@example.com"
                />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  {...register('subject')}
                  hasError={!!errors.subject}
                  placeholder="What's this about?"
                />
                {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  {...register('message')}
                  hasError={!!errors.message}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
              </FormGroup>
              
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </Container>
      
      {submitStatus === 'success' && (
        <Toast
          type="success"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
        >
          <CheckCircle size={20} />
          Message sent successfully! I'll get back to you soon.
        </Toast>
      )}
      
      {submitStatus === 'error' && (
        <Toast
          type="error"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
        >
          <AlertCircle size={20} />
          Failed to send message. Please try again.
        </Toast>
      )}
    </ContactSection>
  );
}; 