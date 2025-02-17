"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavContainer,
  Logo,
  NavLinks,
  NavItem,
  StyledLink,
  Hamburger,
  MobileMenu,
  MobileNavItem,
} from "./Styled";

import { FiMenu, FiXCircle } from "react-icons/fi";

const navbarConfig = [
  { link: "/", text: "HOME" },
  { link: "/projects", text: "PROJECTS" },
  { link: "/certificates", text: "CERTIFICATES" },
  { link: "/references", text: "REFERENCES" },
  { link: "/contacts", text: "CONTACTS" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Logo>
        <Link href="/" passHref legacyBehavior>
          <StyledLink>MyLogo</StyledLink>
        </Link>
      </Logo>

      {/* Desktop Menu */}
      <NavLinks>
        {navbarConfig.map((item) => (
          <NavItem key={item.link}>
            <Link href={item.link} passHref legacyBehavior>
              <StyledLink>{item.text}</StyledLink>
            </Link>
          </NavItem>
        ))}
      </NavLinks>

      {/* Mobile Menu Button */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiXCircle /> : <FiMenu />}
      </Hamburger>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu>
          {navbarConfig.map((item) => (
            <MobileNavItem key={item.link}>
              <Link href={item.link} passHref legacyBehavior>
                <StyledLink onClick={() => setIsOpen(false)}>{item.text}</StyledLink>
              </Link>
            </MobileNavItem>
          ))}
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Header;
