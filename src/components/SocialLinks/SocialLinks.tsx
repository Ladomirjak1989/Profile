"use client";

import React from "react";
import { StyledLink, SocialLinksStyledWrapper, IconWrapper } from "./Styled";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <SocialLinksStyledWrapper>
            <StyledLink 
                href="https://www.linkedin.com/in/bettina-ladomirjak-pavlik-002450281" 
                target="_blank" 
                data-tooltip="LinkedIn"
            >
                <IconWrapper><FaLinkedin /></IconWrapper>
            </StyledLink>

            <StyledLink 
                href="https://github.com/Ladomirjak1989" 
                target="_blank" 
                data-tooltip="GitHub"
            >
                <IconWrapper><FaGithub /></IconWrapper>
            </StyledLink>

            <StyledLink 
                href="mailto:bettike18989@gmail.com" 
                target="_blank" 
                data-tooltip="bettike18989@gmail.com"
            >
                <IconWrapper><FaEnvelope /></IconWrapper>
            </StyledLink>

            <StyledLink 
                href="tel:+31619388895" 
                target="_blank" 
                data-tooltip="(+31) 619 388 895"
            >
                <IconWrapper><FaPhone /></IconWrapper>
            </StyledLink>
        </SocialLinksStyledWrapper>
    );
};

export default SocialLinks;
