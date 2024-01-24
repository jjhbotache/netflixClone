import styled, { keyframes } from "styled-components";
import { redNetflixColor } from "../../../constants/styleConsts";

const shake = keyframes`

  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const StyledDashboardNav = styled.nav`
  width: 100%;
  height: 68px;

  details.small-menu{ display: none; }
  ${(props) =>{
    if(props.$pixelsScrolled > 0){
      return `
        background-color: rgba(20,20,20,1);
        transition: background-color 0.6s;
      `
    }else{
      return `
        background: linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0,0,0,0));
        transition: background-color 0.6s;
      `
    }
  }}


  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  @media screen and (width > 500px) and (width < 800px) {
    padding: 0 4%;
  }
  @media screen and (width < 500px) {
    padding: 0 4%;
  }


  position: fixed;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;


  img {
    width: 100px;
  }
  ul {
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    width: 100%;
    padding-left: 3em;
    gap: 1em;
    li {
      a {
        text-decoration: none;
        font-size: 14px;
        transition: 0.2s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    li.active {
      a {
        font-weight: 600;
      }
    }
  }
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    margin-right: 3rem;
    img {
      width: 40px;
      height: 40px;
      border-radius: 2px;
      margin-right: 10px;
    }
    details>ul{
        /* make it a floating window at the middle of the screen with a black bg */
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0,0,0,0.8);
        display: flex;
        flex-direction: column;
        padding: 1em;
        border-radius: 0.25em;
        border-top: 0.125em solid white;
        li {
          font-size: 1.5em;
          width: 100%;
          word-wrap: break-word;  
        }
        max-width: 90%;
        max-height: 70%;
        overflow-y: scroll;
      }
  }

  .log-out-btn,.unsuscribe-btn{
    background-color: ${redNetflixColor};
    padding: 0.5em 1em;
    border: none;
    color: #fff;
    transition: 0.2s;
    border-radius: 0.25em;
    &:hover {
      opacity: 0.8;
    }
  }
  .unsuscribe-btn:hover{
    animation: ${shake} cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s infinite;
  }




  @media (width <= 884px) {
    height: 41px;
    font-size: 9px;
    font-weight: 600;

    

    details.small-menu {
      position: relative;
      display: block;
      margin-right: auto;
      margin-left: 1em;
      &>ul {
        margin-top: 1em;
        box-sizing: border-box;
        display: block;
        position: absolute;
        top: 100%;
        width: 16.25em;
        padding: 1em;
        left: 50%;
        transform: translateX(-50%);
        
        background-color: rgba(0,0,0,0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;

        border-radius: 0.25em;
        border-top: 0.125em solid white;
        li {
          a {
            color: #fff;
            font-size: 14px;
            transition: 0.2s;
            &:hover {
              opacity: 0.8;
            }
          }
        }

      }
      span.small-triangle {
        position: absolute;
        top: 1.4em;
        left: 50%;
        transform: translateX(-50%) rotateX(25deg);
        color: white;
      }
        
    }
    &>ul {
      display: none;
    }

    img{
      height: 45%;
      width: auto;
    }

    .profile{
      height: 80%;
      width: auto;
      margin: auto 0;
      details,summary{
        height: 100%;
        box-sizing: border-box;
      }
      img{
        height: 100%;
        width: auto;
      }
      
    }
  }
`;
