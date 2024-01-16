import styled from "styled-components";
import { bigScreenWidthInPx } from "../../../consts/styleConsts";

export const FirstSectionContainer = styled.section`
  display: flex;
  
  
  height: 73vh;
  align-items: end;


  padding: 0 2rem;
  
  &>div {
    margin: 0 auto 0 0;
    max-width: 27rem;

    &>h1 {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      margin-top: 5rem;
    }
    &>h3{
      color: rgba(255,255,255,0.7);
      font-size: 1rem;
      font-weight: 400;
    }
    &>form{
      display: flex;
      width: 100%;
      height: 3.5rem;
      gap: .5rem;
      margin-top: 1rem; 
      &>input[type="email"] {
        box-sizing: border-box;
        height: 100%;
        width: 100%;

        padding-left: 1rem;
        
        border-radius: 0.2rem;
        background-color: rgba(22, 22, 22,.9);
        border: gray .5px solid;

        font-size: 1rem;
      }
      &>button {
        /*
        box-sizing: border-box;
        height: 100%;
        align-items: center;
        */
        width: fit-content;
        min-width: 165px;
        font-size: 1.125rem;
        font-weight: 500; 
        padding: .75rem 1.2rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: none;
        border-radius: 0.2rem;
        background-color: red;
        color: white;
        cursor: pointer;
        &>img {
          margin-left: .7rem;
          height: .8rem;
          filter: invert(1);
        }
      }
    }
  }

  @media all and (width > ${bigScreenWidthInPx + "px"}) {
    padding: 0 5rem; 
    &>div {
      padding-bottom: 1rem;
      &>h1{
        font-size: 2.5rem;
      }
      &>p{
        margin-bottom: 3rem;
      }
    }  
  }


`;