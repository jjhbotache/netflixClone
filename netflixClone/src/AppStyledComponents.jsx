import styled from "styled-components";

export const StyledFirstSection = styled.section`
  background: linear-gradient(to right, black -50%, transparent 20%);
  min-height: 100vh;
  &>img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    opacity: 0.18;
  }

`;