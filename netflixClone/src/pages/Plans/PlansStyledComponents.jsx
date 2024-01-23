import styled from "styled-components";
import { redNetflixColor } from "../../constants/styleConsts";

export const PlansContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  .title-section{
    background: ${redNetflixColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vh;
    text-align: center;
  }
  
  .title-on-small-screens{ display: none; }
  .plans{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    padding: 2vh ;
    margin: 0 2vh;
    .plan{
      /* max-width: 150px; */
      min-width: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2vh;
      border: 1px solid ${redNetflixColor};
      border-radius: 5px;
      background: linear-gradient(
        to bottom right,
        rgba(191, 0, 255, 0.304),
        rgba(255, 0, 0, 0.292)
      );
      h2{
        font-size: 3vh;
      }
      p{
        font-size: 2vh;
      }
      button{
        background: ${redNetflixColor};
        color: white;
        border: none;
        border-radius: 5px;
        padding: 1vh;
        font-size: 2vh;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover{
          background: white;
          color: ${redNetflixColor};
          scale: 1.1;
        }
      }
    }
  }

  @media screen and (width < 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-section{display:none}
  grid-template-columns: repeat(1, 1fr);
  .title-on-small-screens{
    display:block;
    text-align: center;
    margin: 3vh 0;
  }
  .plans{
    width: 100%;
    flex-wrap: wrap;
  }
  }


`;