"use client";

import { useState, } from "react";
import { usePathname } from "next/navigation"; // Для визначення активної сторінки
import {
    NavContainer,
    NavLinks,
    NavItem,
    StyledLink,
    Hamburger,
    MobileMenu,
    MobileNavItem,
} from "./Styled";

import { FiMenu, FiXCircle } from "react-icons/fi";

// Інтерфейс для навігаційних елементів
interface NavItem {
    link: string;
    text: string;
}

const navbarConfig: NavItem[] = [
    { link: "/", text: "HOME" },
    { link: "/projects", text: "PROJECTS" },
    { link: "/certificates", text: "CERTIFICATES" },
    { link: "/references", text: "REFERENCES" },
    { link: "/contacts", text: "CONTACTS" },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Отримуємо поточний шлях

    return (
        <NavContainer>
            {/* Desktop Menu */}
            <NavLinks>
                {navbarConfig.map((item) => (
                    <NavItem key={item.link}>
                        <StyledLink 
                            href={item.link} 
                            className={pathname === item.link ? "active" : ""}
                        >
                            {item.text}
                        </StyledLink>
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
                            <StyledLink 
                                href={item.link} 
                                className={pathname === item.link ? "active" : ""}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.text}
                            </StyledLink>
                        </MobileNavItem>
                    ))}
                </MobileMenu>
            )}
        </NavContainer>
    );
};

export default Header;




