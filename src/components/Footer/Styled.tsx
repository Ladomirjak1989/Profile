import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 15px 20px;
  text-align: right; /* Вирівнюємо текст праворуч */
  background: #001f3f;
  color: white;
  border-top: 2px solid #0056b3;
  font-size: 14px;
  font-weight: 500;
  bottom: 0;

  @media (max-width: 768px) {
    text-align: center; /* На мобільних центруємо */
  }
`;

export const FooterText = styled.p`
  margin: 10px;
  padding-right: 50px; /* Зміщуємо текст праворуч */

  @media (max-width: 1024px) {
    padding-right: 20px; /* Менший відступ для планшетів */
  }

  @media (max-width: 768px) {
    padding-right: 0; /* На мобільних повністю центруємо */
    text-align: center;
  }
`;

