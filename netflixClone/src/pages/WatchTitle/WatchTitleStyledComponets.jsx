import styled, { keyframes } from 'styled-components';
import { redNetflixColor } from '../../constants/styleConsts';

const changeColor = keyframes`
  0%,100% {
    background-color: #3c004f;
  }
  50% {
    background-color: #580000;
  }
  25%,75% {
    background-color: #000e69;
  }
`;

const progress = keyframes`

  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;


export const WatchTitleStyledContainer = styled.main`
  width: 100vw;
  height: 100vh;

  animation: ${changeColor} 5s linear infinite;

  .back{
    background-color: transparent;
    color: white;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 3vh;
    left: 3vw;
    font-size: 2rem;
    transition: all 0.2s ease-in-out;
    &:hover{
      scale: 1.2;
      cursor: pointer;
    }
  }

  .report-flag{
    background-color: transparent;
    color: white;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 3vh;
    right: 3vw;
    font-size: 2rem;
  } 

  .bottom-menu{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20vh;
    background-color: #00000042;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .progress-bar{
    width: 100%;
    height: 2px;
    position: relative;
    background-color: grey;
    margin-bottom: 4vh;
    &:after{
      position: absolute;
      content: "";
      height: 2px;
      background-color: ${redNetflixColor};
      animation: ${progress} 20s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }
  }
  .controls{
    width: 100%;
    box-sizing:border-box;
    padding: 1.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
  }
  .main-controls{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .secondary-controls{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


`;



