"use client"

import styled from "styled-components";

export const StyledMain = styled.main`
  flex: 1;
  padding-top: 110px;
  
  padding-left: 25vw; /* Для десктопів */

  @media (max-width: 1024px) { /* Планшети */
    padding-left: 15vw;
  }

  @media (max-width: 768px) { /* Мобільні */
    padding-left: 5vw;
    padding-top: 80px;
  }
`;


