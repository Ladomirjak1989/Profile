"use client";

import React from "react";
import { Navigation } from "swiper/modules";
import { StyledSwiper, StyledSwiperWrapper, StyledText, StyledA, StyledH4, StyledSwiperSlide, StyledSwiperContainer, StyledH2  } from "./Styled";
import "swiper/css";
import "swiper/css/navigation";
import { FaEnvelope } from "react-icons/fa";

interface Reference {
  id: number;
  title: string;
  name: string;
  position: string;
  company: string;
  email: string;
  text: string;
}

const slidesConfig: Reference[] = [
  {
    id: 1,
    title: "",
    name: "Pavlo Jermakov",
    position: "....",
    company: "....",
    email: "...@gmail.com",
    text: ""
  },
  {
    id: 2,
    title: "Sales Manager",
    name: "Maria Kovalchuk",
    position: "Sales Manager",
    company: "InnovateXr",
    email: "m.kovalchuk@innovatex.com",
    text: "Bettina's expertise in front-end and back-end development was evident in every project we collaborated on. Her ability to create visually stunning and highly responsive web applications left a lasting impression on our team and our clients."
  },
  {
    id: 3,
    title: "Manager",
    name: "Oleksandr Ivanenko",
    position: "Business Owner",
    company: "Tech Innovators",
    email: "ivanenko@techinnovators.com",
    text: "Bettina is an extremely talented full stack developer. Her contributions to our team have consistently exceeded expectations, and her ability to solve complex problems is outstanding."
  },
  {
    id: 4,
    title: "Lead Developer",
    name: "Alice Johnson",
    position: "Lead Developer",
    company: "Tech Innovators",
    email: "alice.johnson@techinnovators.com",
    text: "Bettina is a dedicated and passionate developer. Her ability to quickly learn new technologies and apply them in real-world scenarios makes her an asset to any team."
  },
  {
    id: 5,
    title: "Project Manager",
    name: "David Smith",
    position: "Project Manager",
    company: "InnovateX",
    email: "david.smith@innovatex.com",
    text: "I worked with Bettina on multiple full-stack projects, and she consistently impressed me with her work ethic and problem-solving abilities. She has a great understanding of JavaScript frameworks and backend technologies."
  },
  {
    id: 6,
    title: "Senior Backend Developer",
    name: "John Williams",
    position: "Senior Backend Developer",
    company: "Web Solutions Ltd.",
    email: "john.williams@websolutions.com",
    text: "Bettina is an outstanding full stack developer with a keen eye for detail. She writes clean, maintainable code and has a deep understanding of backend architectures."
  },
  {
    id: 7,
    title: "CEO",
    name: "Emma Brown",
    position: "CEO",
    company: "NextGen Tech",
    email: "emma.brown@nextgentech.com",
    text: "Bettina is one of the most promising junior developers I have had the pleasure to work with. She is proactive, a great team player, and always eager to improve her skills."
  },
  {
    id: 8,
    title: "Team Lead",
    name: "Michael Thompson",
    position: "Team Lead",
    company: "CodeMasters",
    email: "michael.thompson@codemasters.com",
    text: "Bettina is a highly motivated full stack developer who excels in both front-end and back-end development. She is always ready to take on new challenges and learn new technologies."
  },
  {
    id: 9,
    title: "Co-worker",
    name: "Sophia Martinez",
    position: "Software Engineer",
    company: "Digital Craft",
    email: "sophia.martinez@digitalcraft.com",
    text: "Working with Bettina has been an absolute pleasure. She has great problem-solving skills and an ability to think outside the box, making her a valuable addition to any development team."
  },
  {
    id: 10,
    title: "Senior Engineer",
    name: "Liam Roberts",
    position: "Senior Engineer",
    company: "TechSphere",
    email: "liam.roberts@techsphere.com",
    text: "Bettina is an exceptional developer with a strong grasp of modern web development tools. She brings creativity and efficiency to every project she works on."
  }
];

const ReferencesPage: React.FC = () => {
  return (
    <StyledSwiperContainer>
      <StyledH2>References</StyledH2>
      <StyledSwiper
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Для мобільних
          640: { slidesPerView: 1, spaceBetween: 15 }, // Планшети
          1024: { slidesPerView: 1, spaceBetween: 20 }, // Десктоп
        }}
      >
        {slidesConfig.map((item) => (
          <StyledSwiperSlide key={item.id}>
            <StyledSwiperWrapper>
              <StyledH4>{item.name}</StyledH4>
              <StyledH4>{item.title}</StyledH4>
              <StyledText>{item.position}</StyledText>
              <StyledText>{item.company}</StyledText>
              <StyledA href={`mailto:${item.email}`}>
                <FaEnvelope /> {item.email}
              </StyledA>
              <StyledText>{item.text}</StyledText>
            </StyledSwiperWrapper>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSwiperContainer>
  );

};

export default ReferencesPage;
