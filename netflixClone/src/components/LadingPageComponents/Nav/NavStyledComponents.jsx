import styled from "styled-components";
import { redNetflixColor } from "../../../consts/styleConsts";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  height: 4rem;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, black, transparent);
  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    @media screen and (width > 1272px) {max-width: 1104px;}
    margin: 0 auto;
  }
  & div {
    display: flex;
  }
`;
export const StyledLogo = styled.img`
  width: 5.5625rem;
  @media screen and (width > 1024px){width: 9.25rem;}
  
`;

const commonButtonStyles = `
  border: none;
  border-radius: 3px;
  height: 32px;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const StyledNavLoginButton = styled(Link)`
  ${commonButtonStyles}

  background-color: ${redNetflixColor};
  color: white;

  text-decoration: none;
  display: grid;
  place-items: center;

  margin-left: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f40612;
  }
`;

export const StyledNavLanguajeSelect = styled.details`
  ${commonButtonStyles}

  background-color: rgba(22, 22, 22, 0.7);
  border: gray .5px solid;
  color: white;
  cursor: pointer;
  /* ---------------- summary styles ---------------- */
  & summary{
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    gap: .2rem;
    &::-webkit-details-marker {display: none;}
    & img {
      height: .9rem;
      filter: invert(1);
    }
    & button {
      display: grid;
      place-items: center;
      border: none;
      background: transparent;
    }
    & button img {
      height: .5rem;
      transform: rotate(90deg) translateY(-.2rem);
    }
  }
  
  /* ---------------- ul styles ---------------- */

  & ul {
    display: inline;

    & li:first-child {
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
    }
    & li:last-child {
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
    }
    & li {
      text-align: center;
      background: white;
      color: black;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
    

`;



