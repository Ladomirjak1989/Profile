import styled from "styled-components";

// Головний контейнер сторінки
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #0d0d0d;
  gap: 50px;
  margin-left: 0px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

// Контейнер для заголовка
export const StyledHeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
  margin-left: 300px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

// Заголовок H2
export const StyledH2 = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

// Підзаголовок / текст
export const StyledP = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto; /* Центрування */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Контейнер для форми
export const ContactForm = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  margin-left: 300px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 90%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #000;

  span {
    color: #ffcc00;
  }
`;

export const ContactText = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

// Група для полів вводу
export const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  background: #ffffff;
  color: #333;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid #ffcc00;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  background: #ffffff;
  color: #333;
  font-size: 16px;
  height: 120px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid #ffcc00;
  }
`;

// Кнопка відправки
export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #ffcc00;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e0a800;
  }
`;

/* Соціальні посилання */
export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

/* Контейнер для стилізованого посилання */
export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 20px;
  border: 2px solid #ffcc00;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  background: #fff;

  &:hover {
    background: #ffcc00;
    color: #000;
  }

  /* Додаємо tooltip */
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
  }
`;

export const IconWrapper = styled.span`
  font-size: 20px;
  color: #ffcc00;
  transition: color 0.3s ease;

  ${StyledLink}:hover & {
    color: #000;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
