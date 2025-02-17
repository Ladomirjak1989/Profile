import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #001f3f;
  color: white;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  transition: all 0.3s;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  transition: all 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #001f3f;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  list-style: none;
`;

export const MobileNavItem = styled.li`
  text-align: center;
`;
