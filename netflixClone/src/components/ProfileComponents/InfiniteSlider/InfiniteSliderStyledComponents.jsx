import styled from "styled-components";

export const InfiniteSliderContainer = styled.div`

position: relative;
&>div{
    width: 100%;
    max-width: 5em;
    aspect-ratio: 1/1;
    
    background: radial-gradient(
      circle,
      rgba(20, 20, 20, 1) 0%,
      rgba(20, 20, 20, 1) 50%,
      rgba(20, 20, 20, 0.5) 100%
    );
    border-radius: 50%;
    /* overflow-x: scroll; */
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    
    display: flex;

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
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    opacity: .5;
    
    border: none;
    color: white ;
    font-size: 2em;
    cursor: pointer;
    z-index: 1;

    font-stretch: condensed;
    font-weight: lighter;
    font-size:1em;
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
    left: -20%;
    text-align: start;
  }
  & button:last-child{ 
    background: linear-gradient(
      90deg,
      rgba(20, 20, 20, 0) 50%,
      rgba(20, 20, 20, .7) 100%
    );
    right: -20%;
    text-align: end;
  }
`