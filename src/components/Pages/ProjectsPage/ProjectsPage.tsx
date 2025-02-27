"use client";

import React from "react";

import {
    StyledWrapper,
    StyledProjectCard,
    StyledTitle,
    StyledH2,
    StyledImgWrapper,
    StyledImg,
    StyledA,
    StyledP,
    StyledDiv
} from "./Styled";

interface Project {
    title: string;
    renderLink: string;
    cloudinaryLink: string;
    gitLink: string;
    description: string;
}

const projects: Project[] = [
    {
        title: "Dream Voyage",
        renderLink: "https://dream-voyage-front.vercel.app/en/",
        cloudinaryLink: "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740570755/Title2_wa53fb_Sharpened_w1svu6.png",
        gitLink: "https://github.com/Ladomirjak1989/Project-3-frontEnd",
        description: "The <strong>Dream Voyage Travel Agency</strong> specializes in crafting unforgettable travel experiences, offering personalized itineraries, luxury accommodations, and seamless travel planning. Whether it's an exotic getaway, cultural exploration, or adventure-filled journey, we ensure every trip is stress-free and tailored to your desires. ✈️🌍"
    },
    {
        title: "Restaurant App",
        renderLink: "https://project2-bettina.vercel.app/",
        cloudinaryLink: "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740573315/img12_elbj0p_Sharpened_obzo5q.png",
        gitLink: "https://github.com/Ladomirjak1989/project2-Bettina",
        description: "The <strong>Restaurant App</strong> is a modern platform that allows users to explore menus, make reservations, and order food online with a seamless experience. Designed for efficiency, it offers a user-friendly interface, real-time table availability, and secure payment options. 🍽️📱"
    },
    {
        title: "Who wants to be a millionaire",
        renderLink: "https://who-wants-to-be-a-millionaire-one.vercel.app/",
        cloudinaryLink: "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740574126/millionare_a1ubav_Sharpened_raxucj.png",
        gitLink: "https://github.com/Ladomirjak1989/Who-wants-to-be-a-millionaire-",
        description: "The <strong>Who Wants to Be a Millionaire app</strong> is an interactive trivia game that challenges players with a series of multiple-choice questions, increasing in difficulty as they progress. With lifelines, engaging animations, and a competitive leaderboard, it delivers an exciting quiz experience just like the classic TV show. 💰🎉"
    },
    {
        title: "Medical Cards",
        renderLink: "https://medical-cards-kappa.vercel.app/",
        cloudinaryLink: "https://res.cloudinary.com/dq0fwucoj/image/upload/v1740677637/img4_krymz4_Sharpened_gebhg2.png",
        gitLink: "https://github.com/Ladomirjak1989/Medical-Cards",
        description: "The <strong>Medical Cards app</strong> is a secure digital platform that allows users to store, manage, and share their medical records effortlessly. With easy access to prescriptions, appointments, and health history, it ensures seamless communication between patients and healthcare providers. 🏥📄"

    }
];

const ProjectsPage: React.FC = () => {
    return (
        <StyledWrapper>
            <StyledH2>My Projects</StyledH2>
            {projects.map((project, index) => (
                <StyledProjectCard key={index}>
                    <StyledTitle>{project.title}</StyledTitle>
                    <StyledImgWrapper>
                        <StyledImg
                            src={project.cloudinaryLink}
                            alt={project.title}
                            width={600}
                            height={350}
                        />
                    </StyledImgWrapper>
                    <StyledP dangerouslySetInnerHTML={{ __html: project.description }} />
                    <StyledDiv>
                        <StyledA href={project.renderLink} target="_blank">Live Site</StyledA>
                        <StyledA href={project.gitLink} target="_blank">GitHub Repo</StyledA>
                    </StyledDiv>
                </StyledProjectCard>
            ))}

        </StyledWrapper>
    );
};

export default ProjectsPage;
