import styled from "styled-components";
import { bigScreenWidthInPx } from "../../../constants/styleConsts";

export const StyledQuestionsSection = styled.section`
  padding: 0 2rem;
  &>h2{
    font-size: 1.125rem;
    font-weight: 400;
    margin: 1rem 0 ;
  }
  &>ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap:.5rem;
  }
  
  & details{
    overflow: hidden;
    padding:1rem;
    background: rgb(45,45,45);
    font-size: 1.125rem;
    &>summary{
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      &>button{
        background: transparent;
        border: none;
        color: white;
        font-size: 2rem;
        font-weight: 100;
      }
    }
    &>hr{
      border: 1px solid black;
      width: 110%;
      margin: 0;
      margin-left: -2rem;
    }
  &[open]>summary{
    margin-bottom: 1rem;
  }
  }

  @media all and (width > ${bigScreenWidthInPx + "px"}) {
    padding: 0 5rem;
    & > h2 {
      font-size: 1.5rem;
    }
    & details{
      padding: 1.5rem;
      font-size: 1.5rem;
      max-width: 54.8rem;
    }
  }
`;