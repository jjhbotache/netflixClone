import styled from "styled-components";

export const InfiniteSliderContainer = styled.div`
width: 100%;
box-sizing: border-box;
position: relative;
display: grid;
grid-template-columns: 1fr 5fr 1fr;
&>div{
    width: auto;
    margin: auto;
    place-items: center;
    max-width: 5em;
    aspect-ratio: 1/1;
    display: flex;
    background: radial-gradient(
      circle,
      rgba(20, 20, 20, 1) 0%,
      rgba(20, 20, 20, 1) 50%,
      rgba(20, 20, 20, 0.5) 100%
    );
    border-radius: 50%;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
      display: none;
    }
    &>img{
      width: 100%;
      max-width: 100px;
      height: 100%;
      max-height: 100px;
      object-fit: cover;
      border-radius: 50%;
      cursor: pointer;
    }
  
  }
  & button{
    /* position: absolute;
    top: 0; */
    display: grid;
    place-items: center;

    height: 100%;
    width: 100%;
    opacity: .5;
    
    border: none;
    color: white ;
    font-size: 2em;
    cursor: pointer;
    z-index: 1;

    font-stretch: condensed;
    font-weight: lighter;
    font-size:2vw;
  }
  & button:hover{
    opacity: 1;
  }
  & button:first-child{
    background: linear-gradient(
      270deg,
      rgba(20, 20, 20, 0) 50%,
      rgba(20, 20, 20, .7) 100%
    );
    left: 0%;
    text-align: start;
  }
  & button:last-child{ 
    background: linear-gradient(
      90deg,
      rgba(20, 20, 20, 0) 50%,
      rgba(20, 20, 20, .7) 100%
    );
    right: 0%;
    text-align: end;
  }
`