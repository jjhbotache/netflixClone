import styled from "styled-components";

export const DashboardFooterContainer = styled.footer`
  display: grid;
  place-items: start;
  width: 100%;
  max-width: 920px;
  margin: auto;
  margin-top: 5em;
  padding: 0rem 8vw;
  box-sizing: border-box;
  font-size: 13px;
  font-weight: 400;
  .social-links{
    padding: 0 0;
    a{
      text-decoration: none;
      margin-right: 1rem;
    }
  }
  .member-footer-links{
    display: flex;
    justify-content: space-between; 
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 2em;
    li{
      min-width: 110px;
      width: 23%;
      margin-right: 1rem;
      margin-bottom: 1rem;
      a{
        text-decoration: none;
        color: #757575;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  button{
    margin-top: 1rem;
    margin-bottom: 20px;
    padding: .5rem 1rem;
    border: 1px solid #757575;
    border-radius: 2px;
    background: transparent;
    color: #757575;
    cursor: pointer;
    &:hover{
      background: #757575;
      color: #fff;
    }
  }
  p{
    color: #757575;
    margin-bottom: 1rem;
    font-size: 11px;
  }
`;