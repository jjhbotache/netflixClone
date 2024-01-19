import styled from "styled-components";
import { redNetflixColor } from "../../../constants/styleConsts";

export const ProfileCreateContainer = styled.div`
box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100vw;
  max-width: 500px;
  padding: 5vh 1vw;
  height: 100vh;
  margin: auto;
  & > h1{
    font-size: 3em;
    font-weight: unset;
  }
  & > hr{
    width: 100%;
    margin: 1em 0;
  }

  .row{
    display: flex;
    width: 100%;
    gap: 2em;
    &>div:first-child{
      max-width: 120px;
    }
    &>div{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      &>label{
        font-size: 1.5em;
        font-weight: unset;
      }
      &>input{
        box-sizing: border-box;
        width: 100%;
        padding: .5em 1em;
        font-size: 1em;
        border: 1px solid grey;
        border-radius: 5px;
        outline: none;
        &:focus{
          border: 2px solid ${redNetflixColor};
        }
      }
    }
  }
  &>button{
      width: auto;
      padding: .5em 1.5em;
      background: transparent;
      border: 1px solid grey;
      color: grey;
      font-size: 1.3vw;
      margin-top: 2em;
      cursor: pointer;
      text-decoration: none;
      transition: all .1s ease-in-out;
    }
  &>button:hover{
    border: 1px solid ${redNetflixColor};
    color: white;
    background: ${redNetflixColor};
  }
`;