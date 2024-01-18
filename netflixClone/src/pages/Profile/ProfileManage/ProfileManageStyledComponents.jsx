import styled from "styled-components";
import { redNetflixColor } from "../../../constants/styleConsts";

export const DashboardProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(20, 20, 20, 1);
  width: 100vw;
  height: 100vh;

  
  &>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;


    &>h1 {
      font-size: 2em;
      font-weight: unset;
      margin: 0.67em 0;
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
  }
  

`;

export const DashboardProfileProfilesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgb(20, 20, 20, 1);

  &>ul{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
    &>li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;
      width: 10vw;
      min-width: 84px;
      &>div{
        position: relative;
        &>img{
          width: 100%;
          border-radius: 4px;
          opacity: 0.5;
        }
        &>img.white{
          box-sizing: border-box;
          padding: 1em;
          opacity: 1;
          filter: invert(1);
        }
        &>svg{
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
        }
      }

      &>span{
        font-size: 1.3vw;
        color: grey;
        margin: .6em 0;
        min-height: 1.8em;
      }
  
      &:hover{
        & img{
          outline: 3px solid white;
        }
        .white{
          outline: 3px solid black;
          border-radius: 50%;
        }
        & span{
          color: white;
        }
      }
    }
  }

`;