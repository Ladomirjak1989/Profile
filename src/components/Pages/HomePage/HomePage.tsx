"use client";

import React from 'react';
import { StyledP, StyledIconWrapper, StyledWrapper, StyledMain, Styledh2, Container } from "./Styled";

import { FaReact, FaCss3, FaGit, FaGithub, FaHtml5, FaNodeJs, FaFigma, FaCcStripe } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiExpress, SiMongoose, SiPostman, SiCloudinary } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { LuFileJson } from "react-icons/lu";

const HomePage = () => {
  return (
    <>
      <Container>
        <StyledMain>
          <Styledh2>Welcome to my website</Styledh2>

          <StyledP>
            I am a <strong>Junior Full Stack Web Developer</strong>, passionate about creating seamless and user-friendly digital experiences. My expertise spans both <strong>front-end</strong> and <strong>back-end</strong> technologies, enabling me to develop robust, scalable, and innovative applications.
            <br /><br />
            With a strong foundation in <strong>responsibility, integrity, commitment, and perseverance</strong>, I strive to build solutions that not only meet technical requirements but also enhance user interactions. Having recently completed the <strong>Full Stack Web Development Program at Ironhack Bootcamp</strong>, I am eager to apply my skills in developing impactful and practical technologies.
            <br /><br />
            🔹 <strong>Proficient in:</strong>
            Node.js, Express.js, JavaScript (ES6), React, Redux-Toolkit, TypeScript, Next.js, HTML5, CSS3, Tailwind CSS, MongoDB.
            <br /><br />
            🔹 <strong>Additional Expertise:</strong>
            API Integration, Stripe Payments, Database Management.
            <br /><br />
            I am a <strong>highly motivated developer</strong> who is dedicated to achieving excellence in everything I pursue. I embrace challenges as opportunities for growth and continuously seek to refine my skills and expand my knowledge.
            <br /><br />
            Outside of development, I enjoy <strong>adventuring, traveling, and connecting with nature</strong>. Whether it’s hiking, exploring new places, or swimming, I find inspiration in the world around me.
            <br /><br />
            Feel free to explore my <strong>portfolio, LinkedIn, and GitHub</strong> to see my work and get in touch! I am always open to exciting opportunities and collaborations. 🚀
          </StyledP>

          <div>
            <Styledh2> Hard Skills</Styledh2>
            <StyledWrapper>
              <StyledIconWrapper><FaCss3 /></StyledIconWrapper>
              <StyledIconWrapper><FaGit /></StyledIconWrapper>
              <StyledIconWrapper><FaGithub /></StyledIconWrapper>
              <StyledIconWrapper><FaHtml5 /></StyledIconWrapper>
              <StyledIconWrapper><IoLogoJavascript /></StyledIconWrapper>
              <StyledIconWrapper><SiTypescript /></StyledIconWrapper>
              <StyledIconWrapper><FaNodeJs /></StyledIconWrapper>
              <StyledIconWrapper><FaReact /></StyledIconWrapper>
              <StyledIconWrapper><SiRedux /></StyledIconWrapper>
              <StyledIconWrapper><RiTailwindCssFill /></StyledIconWrapper>
              <StyledIconWrapper><RiNextjsFill /></StyledIconWrapper>
              <StyledIconWrapper><SiExpress /></StyledIconWrapper>
              <StyledIconWrapper><DiMongodb /></StyledIconWrapper>
              <StyledIconWrapper><SiMongoose /></StyledIconWrapper>
              <StyledIconWrapper><SiPostman /></StyledIconWrapper>
              <StyledIconWrapper><SiCloudinary /></StyledIconWrapper>
              <StyledIconWrapper><FaFigma /></StyledIconWrapper>
              <StyledIconWrapper><FaCcStripe /></StyledIconWrapper>
              <StyledIconWrapper><TbApi /></StyledIconWrapper>
              <StyledIconWrapper><LuFileJson /></StyledIconWrapper>
            </StyledWrapper>
          </div>
        </StyledMain>
      </Container>
    </>
  );
};

export default HomePage;
