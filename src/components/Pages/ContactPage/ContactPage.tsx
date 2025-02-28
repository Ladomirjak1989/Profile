"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  SuccessMessage,
  EmailLinkContainer,
} from "./Styled";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Обробка змін в полях форми
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_KEY;

    if (!serviceId || !templateId || !userId) {
      setSuccessMessage("❌ Configuration error. Please contact support.");
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        userId
      );

      if (response.status === 200) {
        setSuccessMessage("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSuccessMessage("❌ Error sending message. Please try again.");
    }
  };


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
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Let&apos;s <span>talk</span></ContactTitle>
          <ContactText>
            To request a quote or to meet up for coffee, contact me directly
            or fill out the form below.
          </ContactText>

          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <TextArea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        {/* Стрілка між формою та соц. лінками */}
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

          {/* Email - стрілка буде показувати на нього */}
          {/* Обгортка для Email лінку + стрілка */}
          <EmailLinkContainer>
            <StyledLink
              href="mailto:bettike18989@gmail.com"
              target="_blank"
              data-tooltip="Send me an email: bettike18989@gmail.com"
            >
              <IconWrapper><FaEnvelope /></IconWrapper> Email
            </StyledLink>
          </EmailLinkContainer>

          <StyledLink
            href="tel:+31619388895"
            target="_blank"
            data-tooltip="Give me a call: (+31) 619 388 895"
          >
            <IconWrapper><FaPhone /></IconWrapper> Phone
          </StyledLink>
        </SocialLinksContainer>
      </ContactContainer>
     </>
  );
};

export default ContactPage;


