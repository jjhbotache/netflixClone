import styled from "styled-components";

export const TitlesContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;


  &:hover button{
    display: block;
  }

  &>ul{
    overflow-y: visible !important;
    overflow-x: scroll !important;
    display: flex;
    align-items: center;
    overflow-x:scroll ;
    overflow-y: visible;
    margin-bottom: 1.5vw;
    padding: 0;
    gap: 0.4vw;
    position: relative;
    

    &::-webkit-scrollbar {display: none;}

    &>li{ //each title
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      position: relative;
  
      &:hover{
        color: #fff;
        & .details-and-options{
          font-size: xx-large;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          place-items: center;
          position: absolute;
          z-index: 1;
          top : 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;

          & button{
            display: grid;
            place-items: center;
            text-align: center;
            vertical-align: middle;
            font-size: x-large;
            background-color: transparent;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 50%;
            width: 3vw;
            height: 3vw;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            &:hover{
              color: #000;
              background-color: #fff;
            }
          }

          & button.title-added{
            color: #000;
            background-color: #fff;
          }

        }

        & img{
          filter: blur(2px);
        }

      }
      & img{
        @media screen and (width < 1700px){width: 14vw;}
        @media screen and (width < 1100px){width: 23vw;}
        @media screen and (width < 800px){width: 29vw;}
        @media screen and (width < 500px){width: 43vw;}
        object-fit: cover;
        position: relative;
        transition: all .5s ease-in-out;
      }
      & .details-and-options{
        display: none;
      }
    }
    
  }
  &>button{
    &:hover{
      display: block;
      background-color: rgba(20, 20, 20, 0.8);
      font-size: xx-large;
    }

    display: none;
    background-color: rgba(20, 20, 20, 0.5);
    color: #fff;
    border: none;
    font-size: x-large;
    position: absolute;
    z-index: 2;
    height: 100%;  
    width: 4%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
  }

  &>button:first-child{
    left: 0;
  }
  &>button:last-child{
    right: 0;
  } 
`;

export const SliderTitle = styled.span`
  box-sizing: border-box;
  color: #fff;
  font-size: 1.4vw;
  @media screen and (width < 800px) {
    font-size: 12px;
  }
  font-weight: 500;
  margin-bottom: 0.5em;
  display: block;
`;

export const SliderContainer = styled.section`
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  `;