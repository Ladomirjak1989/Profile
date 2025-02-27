import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-left: 15%;
 

  @media (max-width: 480px) {
  margin-left:0;
  }
 
`;

export const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    display: block;
    width: 60px; /* Довжина лінії */
    height: 4px; /* Товщина лінії */
    background: #007bff; /* Синій колір */
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px; /* Закруглення */
  }

 
`;

export const StyledSwiper = styled(Swiper)`
  width: 80%;  /* Відносний розмір для адаптивності */
  max-width: 600px;
  height: auto;
`;


export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  background:rgb(236, 239, 243);
  align-items: center;
  justify-content: center;
  height: 500px;  
  overflow: hidden; 
  padding: 20px;
  box-sizing: border-box;
`;


export const StyledSwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const StyledText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
 

 
`;

export const StyledA = styled.a`
  font-size: 18px;
  line-height: 1.6;
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
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;

  
`;
