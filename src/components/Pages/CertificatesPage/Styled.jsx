import styled from "styled-components";

export const StyledIconWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #f4f4f4;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: #e0e0e0;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
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
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 15px;
  }
`;

export const CertificateWrapper = styled.section`
  margin-top: 40px;
  max-width: 800px;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-left: 35%;

  @media (max-width: 1024px) {
    margin-left: 20%;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
  }
`;

export const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 10px;
  }
`;

export const CertificateImage = styled.div`
  max-width: 750px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border: 3px solid #000;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    img {
      border: 2px solid #000;
    }
  }
`;
