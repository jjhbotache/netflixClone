import styled from "styled-components";

export const TrendsSliderContainer = styled.div`
  display: flex;
  align-items: center;
  & > div{
    width: 100%;
    height: auto;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    flex-wrap: nowrap;
    gap: 1.2rem;
    align-items: center;
    position: relative;
    margin-top: .5rem;
  
    /* hide the scroll bar keeping the propertie to scroll */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  & > button {
    display: block;
    width: 1.5rem;
    height: 7.5rem;
    border-radius: .5rem;
    background-color: rgba(255,255,255,.2);
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 2;
    transition: all .2s ease-in-out;
    opacity: .5;

    &:hover {
      background-color: rgba(255,255,255,.4);
    }
    &:first-child {
      margin-right: .75rem;
    }
    &:last-child {
      margin-left: .75rem;
    }
    
  }
`;