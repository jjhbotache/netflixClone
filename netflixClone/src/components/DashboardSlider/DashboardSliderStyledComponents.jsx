import styled from "styled-components";

export const TitlesContainer = styled.ul`
  box-sizing: border-box;
  height: auto;
  position: relative;
  display: block;
  z-index: 10;
  &:hover button{
    display: block;
  }
  &>div{
    display: flex;
    align-items: center;
    overflow-x:scroll ;
    margin-bottom: 1.5vw;
    padding: 0;
    gap: 0.4vw;
    position: relative;
    &::-webkit-scrollbar {
    display: none;
    }
    &>li{ //each title
      height: auto;
      cursor: pointer;
  
      &>img{
        @media screen and (width < 1700px){width: 14vw;}
        @media screen and (width < 1100px){width: 23vw;}
        @media screen and (width < 800px){width: 29vw;}
        @media screen and (width < 500px){width: 43vw;}
        height: auto;
        object-fit: cover;
      }
      
      &:hover{
        color: #ff0000;
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
    z-index: 1;
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