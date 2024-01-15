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
    &>img {
      width: 18%;
      margin-bottom: 4.5vw;
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