import styled from "styled-components";

// Головний контейнер сторінки
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #0d0d0d;
  gap: 100px;
  

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
  margin: 0 auto; 
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Контейнер для форми
export const ContactForm = styled.form`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
 

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
  position: relative;

 @media (max-width: 768px) {
    gap: 10px;
    &::before {
      font-size: 20px;
      top: -25px;
    }
  }
`;


export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
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
  cursor: pointer;
  width: 180px; /* Встановлюємо однакову ширину для всіх кнопок */
  min-height: 50px; /* Мінімальна висота для рівності */
  text-align: center;

  &:hover {
    background: #ffcc00;
    color: #000;
  }

  /* Tooltip */
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 120%;
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
    width: 100%; /* Робимо кнопки однаковими на мобільних */
  }
`;


/* Додаємо стрілку для email */
export const EmailLinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px; /* Відстань між стрілкою та Email-лінком */

  &::before {
    content: "←"; /* Стрілка вліво */
    font-size: 50px; /* Збільшений розмір */
    font-weight: bold; /* Жирний шрифт */
    color: #000; /* Чорний колір */
    position: absolute;
    left: -70px; /* Розташування ліворуч від Email-лінка */
    top: 50%;
    transform: translateY(-50%);
    animation: bounce 1.5s infinite ease-in-out;
}

  @media (max-width: 768px) {
    &::before {
      font-size: 20px;
      left: -20px;
    }
  }

  /* Анімація стрілки */
  @keyframes bounce {
    0%, 100% { transform: translateY(-50%) translateX(0); }
    50% { transform: translateY(-50%) translateX(-5px); }
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
    font-size: 18px; /* Уніфікований розмір іконок */
  }
`;


export const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

