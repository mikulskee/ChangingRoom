import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100vw;
  height: 12vw;
  display: flex;
  position: fixed;
  align-items: center;
  box-shadow: 0px 15px 16px -12px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
  z-index: 3;
  background-color: #fff;
  @media only screen and (orientation: landscape) {
    height: 8vw;
  }
`;
