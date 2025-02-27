"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  ContactContainer,
  ContactForm,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  ContactTitle,
  ContactText,
  SocialLinksContainer,
  StyledLink,
  IconWrapper,
  StyledHeaderContainer,
  StyledH2,
  StyledP,
} from "./Styled";

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Контейнер для заголовка */}
      <StyledHeaderContainer>
        <StyledH2>Get in Touch</StyledH2>
        <StyledP>
          I am always open to new opportunities and collaborations. Whether you have a project, 
          a job offer, or just want to say hello, feel free to reach out to me through any of the platforms below.
        </StyledP>
      </StyledHeaderContainer>

      <ContactContainer>
        {/* Форма */}
        <ContactForm>
          <ContactTitle>Let&apos;s <span>talk</span></ContactTitle>
          <ContactText>
            To request a quote or to meet up for coffee, contact me directly
            or fill out the form below.
          </ContactText>
          <FormGroup>
            <Input type="text" placeholder="Your Name" required />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Your Email" required />
          </FormGroup>
          <FormGroup>
            <TextArea placeholder="Your Message" required></TextArea>
          </FormGroup>
          <SubmitButton>Send Message</SubmitButton>
        </ContactForm>

        {/* Соціальні посилання */}
        <SocialLinksContainer>
          <StyledLink
            href="https://www.linkedin.com/in/bettina-ladomirjak-pavlik-002450281"
            target="_blank"
            data-tooltip="Visit my LinkedIn profile"
          >
            <IconWrapper><FaLinkedin /></IconWrapper> LinkedIn
          </StyledLink>

          <StyledLink
            href="https://github.com/Ladomirjak1989"
            target="_blank"
            data-tooltip="Check out my GitHub projects"
          >
            <IconWrapper><FaGithub /></IconWrapper> GitHub
          </StyledLink>

          <StyledLink
            href="mailto:bettike18989@gmail.com"
            target="_blank"
            data-tooltip="Send me an email: bettike18989@gmail.com"
          >
            <IconWrapper><FaEnvelope /></IconWrapper> Email
          </StyledLink>

          <StyledLink
            href="tel:+31619388895"
            target="_blank"
            data-tooltip="Give me a call: (+31)619388895"
          >
            <IconWrapper><FaPhone /></IconWrapper> Phone
          </StyledLink>
        </SocialLinksContainer>
      </ContactContainer>
    </>
  );
};

export default ContactPage;



