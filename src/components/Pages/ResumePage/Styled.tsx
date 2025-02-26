import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin-left: 400px;

  @media (max-width: 1024px) {
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 500px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 18px;
  color: #000;
  border: 2px solid #000;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const StyledImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
