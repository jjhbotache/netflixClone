import styled from "styled-components";

export const TrendImgContainer = styled.div`
  width: 7rem;
  min-width: 7rem;
  height: auto;
  position: relative;
  
  margin: .5rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  

  &:hover {
    transform: scale(1.1);
  }

  &>img {
    border-radius: .5rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &>span{
    position: absolute;
    bottom: .1rem;
    left: -.8rem;
    font-size: 4rem;
    font-weight: 700;
    color: black;
    border-radius: .5rem;
    padding: .2rem .5rem;
    text-shadow: .15rem .15rem 0px white;
    -webkit-text-stroke: .1rem white;
  }
`;