import styled from "styled-components";

export const StyledMoreReazonsSection = styled.section`
box-sizing: border-box;
  background-color: #000;
  color: white;
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &>h2{
    margin-bottom: .8rem;
    font-size: 1.125rem;
    font-weight: 500;
  }
  &>ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .5rem;
    &>li{
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: .2rem;
      background-image: linear-gradient(149deg, rgb(25, 34, 71) 0%, rgb(33, 14, 23) 96.86%);
      border-radius: 1rem;
      &>img{
        margin-left: auto;
        width: 72px;
        height: 72px;
        margin-right: -1rem;
        margin-bottom: -.8rem;
      }
      &>h3{
        font-size: 1.25rem;
        font-weight: 500;
      }
    }
  }
`;