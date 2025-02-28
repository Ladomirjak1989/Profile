import Link from "next/link";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
  background: #001f3f;
  color: white;
  position: fixed;
  top:0;
  right:0;
  height: 60px;
  left:0;

 

  @media (max-width: 768px) {
    padding: 1rem; /* Зменшуємо padding на мобільних */
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin-left: auto;

  @media (max-width: 1024px) {
    gap: 1.5rem; /* Зменшуємо відстань між пунктами */
  }

  @media (max-width: 768px) {
    display: none; /* Ховаємо меню для мобільних */
  }
`;

export const NavItem = styled.li`
  transition: all 0.3s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
  position: relative;

  &:hover {
    color: #ffcc00;
  }

  /* Активний пункт меню */
  &.active {
    color: #ffcc00;
  }

  &.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: #ffcc00;
    position: absolute;
    bottom: -5px;
    left: 0;
    border-radius: 2px;
  }
`;

/* Іконка меню (бургер) */
export const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Мобільне меню */
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
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    align-items: center; /* Центруємо пункти на мобільних */
  }
`;

export const MobileNavItem = styled.li`
  text-align: center;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #0056b3;

  &:last-child {
    border-bottom: none;
  }
`;

export const MobileStyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  transition: all 0.3s;

  &:hover {
    color: #ffcc00;
  }

  &.active {
    color: #ffcc00;
  }
`;
