import styled from "styled-components";

export const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
