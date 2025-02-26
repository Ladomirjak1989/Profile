import styled from "styled-components";

export const StyledP = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 20px;
  line-height: 1.6;
  max-width: 800px;
  text-align: justify;
  text-indent: 50px;

  & > br {
    margin-bottom: 15px;
    display: block;
    content: "";
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-indent: 30px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    text-indent: 20px;
    margin: 10px;
  }
`;

export const StyledIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #f0f0f0;
  border-radius: 10px;
  transition: transform 0.3s ease, background 0.3s ease;
  
  svg {
    width: 60px;
    height: 60px;
  }

  &:hover {
    transform: scale(1.1);
    background: #e0e0e0;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    svg {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const Styledh2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  margin-right: 20px; /* Додаємо відступ для sidebar */

  @media (max-width: 1024px) {
    margin-left: 240px; /* Менший відступ на середніх екранах */
  }

  @media (max-width: 768px) {
    margin-left: 0; /* На мобільних sidebar не фіксований, тому прибираємо відступ */
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
