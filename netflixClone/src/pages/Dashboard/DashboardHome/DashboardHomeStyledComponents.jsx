import styled from "styled-components";

export const CoverFirstDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  img.mainImg {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: relative;

  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right top,
      rgba(0, 0, 0, .7) 0%,
      rgba(0, 0, 0, 0) 50%
    );
    box-shadow: inset 0 -50px 50px #000000;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  div.overlayedContent{
    position: absolute;
    z-index: 2;
    padding-left: 3em;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, .3) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    top: 0;
    left: 0;

    height: 100%;
    width: 60%;
    
    
    
    @media screen and (width > 500px) and (width < 800px) {
      padding: 0 4%;
    }
    @media screen and (width < 500px) {
      padding: 0 4%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;

    .titleImg{
      width: 30%;
      margin-bottom: 1.2vw;
    }

    .titleText{
      padding-right: 35%;
      display: flex;
      align-items: center;
      font-size: 1.6vw;
      font-weight: 700;
      color: #fff;
      svg{
        margin-right: .5em;
        height: 1.5em;
      }
    }
    .synopsis{
      padding-right: 35%;
      font-size: 1.4vw;
      @media screen and (width < 500px){
        font-size: 2.3vw;
        line-height: 1em;
      }
      font-weight: 500;
      color: #fff;
      margin-top: 1.2vw;
      text-shadow: 2px 2px 4px rgba(0,0,0,.9);
    }

    .btnsContainer{
      display: flex;
      gap: 1vw;
      margin-bottom: 1em;
      &>button{
        max-width: 17vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .6em 1em;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-size: 0.6rem;

        & i{
          margin-right: .8em;
          height: 100%;
          width: auto;
          display: grid;
          place-items: center;
        }
        @media screen  and (width < 500px) {
          padding: .2em 1em;
          & i{
            display: none;
          }
        }
        @media screen  and (width < 420px) {
          padding: .2em 1em;
          font-size: 0.5em;
          & i{
            display: none;
          }
        }
      }
    }
    .playBtn{
      background: #fff;
      color: #000;
    }
    .moreInfoBtn{
      background-color: rgba(109, 109, 110, 0.7);
      color: #fff;
    }

  }
`;

export const SlidersContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(20,20,20,1) 4%) !important;
  box-sizing: border-box;
  padding-bottom: 5em;
  width: 100%;
  height: auto;
  padding: 0 3rem;
  position: relative;
  z-index: 4;
  &>section:first-child{
    position: relative;
    z-index: 1;
    margin-top: -14%;
  }

  @media screen and (width > 500px) and (width < 800px) {
    padding: 0 4%;
  }
  @media screen and (width < 500px) {
    padding: 0 4%;
  }

`;
