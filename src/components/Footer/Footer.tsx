 "use client"
 
import React from "react";
import { FooterContainer, FooterText } from "./Styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Bettina Ladomirjak. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
