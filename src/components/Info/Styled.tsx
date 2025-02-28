import styled from "styled-components";
import Link from "next/link";

export const StyledInfo = styled.aside`
  background-image: url(https://res.cloudinary.com/dq0fwucoj/image/upload/v1740408865/photo-1617801003287-1a71d7792fdc_ffcwkh.jpg);
  min-height: 100vh;
  width: 20vw;
  // height: 100%;
  top:0;
  bottom:0;
  left:0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 50px;
  justify-content: space-around;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;

  @media (max-width: 1024px) {
    width: 25vw; /* Трохи ширше на планшетах */
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    width: 100%; /* Робимо повну ширину на мобільних */
    height: auto;
    min-height: 60vh;
    position: relative;
    padding: 20px;
    align-items: center;
    text-align: center;
  }
`;

export const StyledImage = styled.img`
  border-radius: 100%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  image-rendering: crisp-edges;
  border: 4px solid gray;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const StyledImageWrapper = styled.div`
  min-height: 50%;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledParagraf = styled.p`
  text-align: right;
  margin-top: 20px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1.3px;
  font-family: "Courgette", cursive;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 18px;
  }
`;

export const StyledTitle = styled.h3`
  text-align: right;
  margin-top: 20px;
  font-size: 26px;
  line-height: 24px;
  letter-spacing: 1.3px;
  font-family: "Courgette", cursive;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
  }
`;

export const StyledLinkWrapper = styled.div`
  min-height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 30px;
  padding-bottom: 55px;

  @media (max-width: 768px) {
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 15px 20px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: blue;
    border: 2px solid rgb(116, 208, 239);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 18px;
  }
`;
