import styled from "styled-components";

export const MyListPageContainer = styled.main`
  color: #fff;
  
  min-height: 100vh;
  width: 100%;
  padding: 5rem 3rem;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  

  h1 {
    font-size: 1.5625em;
    font-weight: 400;
    margin-bottom: 8%;
  }

  .my-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    & .title{
      width: 18%;
      min-width: 200px;
      margin-bottom: 4.5vw;
      transition: all .2s;
      position: relative;
      & img {
        width: 100%;
        border-radius: 8px;
      }

      &:hover {
        & img{
          cursor: pointer;
          filter: blur(.3vw);
        }
        & .options{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,.5);

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1vw;
          & button {
            display: flex;
            justify-content: center;
            align-items: center;
            

            border: none;
            padding: .5vw 1vw;
            border-radius: 50%;
            height: 2.5vw;
            width: 2.5vw;


            font-size: 1.2em;
            font-weight: 700;
            background-color: rgba(0,0,0,.5);
            color: #fff;
            transition: all .2s;
            &:hover {
              cursor: pointer;
              background-color: rgba(0,0,0,.8);
            }
          }
        }
      }
      & .options{
        display: none;
      }
    }
  }

  @media screen and (width > 500px) and (width < 800px) {
    padding: 5rem 4%;

    .my-list {
      &>img {
        width: 31%;
      }
    }
  }
  @media screen and (width <= 500px){
    padding: 5rem 4%;
  
    .my-list {
      &>img {
        width: 48%;
      }
    }
  }
  
`;