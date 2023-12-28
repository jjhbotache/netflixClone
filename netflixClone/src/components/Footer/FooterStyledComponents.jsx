import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  gap: 1.5rem;
  padding: 2rem 2rem 4rem 4rem;
  color: rgba(255, 255, 255, 0.7);
  & span{
    margin: 2rem 0;
  }
  &>ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  &>details{
    width: fit-content;
  }
`;
