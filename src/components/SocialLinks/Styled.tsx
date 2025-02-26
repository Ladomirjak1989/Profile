import styled from "styled-components";

export const SocialLinksStyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  height: 40px;
  min-width: 200px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

/* Контейнер для стилізованого посилання */
export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
  position: relative; /* Для позиціонування tooltip */

  &:hover {
    background-color: #5a90c9;
    transform: scale(1.1);
  }

  /* Додаємо стиль tooltip */
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -35px; /* Відстань від іконки */
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none; /* Запобігає перешкоджанню наведенню */
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  color: #000;
  transition: color 0.3s ease;

  ${StyledLink}:hover & {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
