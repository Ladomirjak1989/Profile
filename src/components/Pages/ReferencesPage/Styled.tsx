import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-left: 8%;
    

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
    
  }
`;

// Заголовок
export const StyledH2 = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  position: relative;
  color: #222;
  margin-bottom: 20px;

  &::after {
    content: "";
    display: block;
    width: 60px; 
    height: 4px; 
    background: #007bff; 
    margin: 10px auto 0;
    border-radius: 2px; 
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  background: rgb(236, 239, 243);
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 500px;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
    min-height: auto;
  }
`;



export const StyledSwiper = styled(Swiper)`
  width: 90%; /* Відносний розмір для адаптивності */
  max-width: 600px;
  height: auto;
  position: relative; /* Робимо його відносним до батьківського контейнера */
  z-index: 1; /* Забезпечує, що він не накладається поверх Navbar */


  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

// Основний текстовий блок
export const StyledText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  text-align: justify;
  margin-bottom: 10px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Посилання на email
export const StyledA = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;


export const StyledH4 = styled.h4`
  font-size: 22px;
  font-weight: bold;
  color: #222;
  margin-bottom: 5px;
  text-align: center;
`;


export const StyledSubTitle = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 15px;
  text-align: center;
`;
