import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-left: 15%;

  @media (max-width: 1024px) {
    margin-left: 5%;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 15px;
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

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 50%;
  height: auto;
  margin: 20px auto;
  padding-bottom: 30px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: #e3f2fd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const StyledSwiperWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const StyledH4 = styled.h4`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
