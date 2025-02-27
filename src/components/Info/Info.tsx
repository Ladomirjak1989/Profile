"use client"

import SocialLinks from "../SocialLinks/SocialLinks";
import { StyledInfo, StyledImage, StyledParagraf, StyledImageWrapper, StyledLinkWrapper, StyledTitle, StyledLink } from "./Styled";
import { FaDownload } from "react-icons/fa";
import React from "react";


const Info: React.FC = () => {
    return (
        <StyledInfo>
            <StyledImageWrapper>
                <StyledImage 
                    src="https://res.cloudinary.com/dq0fwucoj/image/upload/v1740408519/IMG_1885-%D0%BA%D0%BE%D0%BF%D1%96%D1%8F-2_jsv3he.png" 
                    alt="Profile Picture"
                />
                <StyledParagraf>
                    Hello, my name is Bettina.<br /> I&apos;m a full stack web developer <br /> located in Schiedam.
                </StyledParagraf>
            </StyledImageWrapper>

            <StyledLinkWrapper>
                <StyledTitle>Let&apos;s Get In Touch</StyledTitle>
                <SocialLinks />
                <StyledLink href="/resume">
                    <FaDownload /> View resume
                </StyledLink>
            </StyledLinkWrapper>
        </StyledInfo>
    );
};

export default Info;


