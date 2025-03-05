import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 35px;
  height: 40px;
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
  color: Blue;
  @media screen and (max-width: 768px) {
    left: 90%; /* Change the left property for screens smaller than 768px */
  }
`;
