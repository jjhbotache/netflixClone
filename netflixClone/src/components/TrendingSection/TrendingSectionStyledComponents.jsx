import styled from "styled-components";
import { bigScreenWidthInPx } from "../../consts/styleConsts";

export const StyledTrendingSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 2rem 0rem 2rem;
  gap: .5rem;
  &>h2 {
    font-size: 1.125rem;
    font-weight: 500;
  }
  @media all and (width > ${bigScreenWidthInPx + "px"}) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  
`;

export const StyledTrendingSelectContainer = styled.div`
  position: relative;
  height: 40px;
  box-sizing: border-box;

  background-color: rgba(15,15,15,.75);
  border: gray 1px solid;
  border-radius: 5px;
  padding: .5rem .75rem;
  color: white;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;

  &>select {
    font-size: 1rem;
    width: 100%;
    height: 100%;
    color: white;
    border: none;
    background: transparent;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &>option{
      background: #000;
      padding: 2rem 0;
    }
  }
  &::after {
    content: '▼';
    position: absolute;
    top: 50%;
    right: 1rem;
    color: white;
    transform: rotateX(60deg) translateY(-70%);
  }
`;
