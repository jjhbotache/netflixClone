import styled from "styled-components";

export const CoverFirstDiv = styled.div`
  width: 100%;
  height: 100vh;
  img.mainImg {
    width: 100%;
    height: 100%;
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
      rgba(0, 0, 0, .7),
      rgba(0, 0, 0, 0) 40%
    );
    box-shadow: inset 0 -50px 50px #000000;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  div.overlayedContent{
    position: absolute;
    z-index: 2;
    top: 0;
    left: 3rem;
    height: 100%;
    width: 36%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .titleImg{
      margin-bottom: 1.2vw;
    }

    .titleText{
      display: flex;
      align-items: center;
      font-size: 1.5vw;
      font-weight: 700;
      color: #fff;
      svg{
        margin-right: .5em;
        height: 1.5em;
      }
    }
    .synopsis{
      font-size: 1.2vw;
      font-weight: 500;
      color: #fff;
      margin-top: 1.2vw;
      text-shadow: 2px 2px 4px rgba(0,0,0,.9);
    }

    .btnsContainer{
      display: flex;
      gap: 1em;
      margin-bottom: 10em;
    }
    .playBtn{
      display: flex;
      align-items: center;
      margin-top: 1.2vw;
      background: #fff;
      color: #000;
      font-size: 1.2vw;
      font-weight: 700;
      padding: .5em 1em;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      svg{
        margin-right: .5em;
        height: 1.5em;
      }
    }
    .moreInfoBtn{
      display: flex;
      align-items: center;
      margin-top: 1.2vw;
      background: transparent;
      color: #fff;
      font-size: 1.2vw;
      font-weight: 700;
      padding: .5em 1em;
      border-radius: 5px;
      border: 1px solid #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      svg{
        margin-right: .5em;
        height: 1.5em;
      }
    }

  }
`;

export const SlidersContainer = styled.div`
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
    margin-top: -27vh;
  }
`;
