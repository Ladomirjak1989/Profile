import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; 
  margin: 0 auto;
  padding-bottom: 30px;
  margin-left: auto; 
  margin-right: 5%;

  @media (max-width: 1024px) {
    max-width: 700px;
    margin-right: 3%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 15px;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  color: #222;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: #007bff;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const StyledProjectCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StyledImgWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledP = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 10px;

  strong {
    font-weight: bold;
    color: #222;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const StyledA = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  color: #007bff;
  padding: 8px 16px;
  border-radius: 5px;
  border: 2px solid #007bff;
  background-color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #007bff;
    color: #fff;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 5px 12px;
  }
`;
