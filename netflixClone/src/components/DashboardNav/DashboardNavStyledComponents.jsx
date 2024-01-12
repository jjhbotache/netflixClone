import styled from "styled-components";

export const StyledDashboardNav = styled.nav`
  width: 100%;
  height: 68px;

  details.small-menu{ display: none; }
  ${(props) =>{
    if(props.$pixelsScrolled > 0){
      return `
        background-color: rgba(0,0,0,1);
        transition: background-color 0.6s;
      `
    }else{
      return `
        background: linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0,0,0,0));
        transition: background-color 0.6s;
      `
    }
  }}


  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  position: fixed;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  img {
    width: 100px;
  }
  ul {
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    width: 100%;
    padding-left: 3em;
    gap: 1em;
    li {
      a {
        text-decoration: none;
        font-size: 14px;
        transition: 0.2s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    li.active {
      a {
        font-weight: 600;
      }
    }
  }
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    margin-right: 3rem;
    img {
      width: 40px;
      height: 40px;
      border-radius: 2px;
      margin-right: 10px;
    }
    .profile-name {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
    }
  }


  @media (width <= 884px) {
    details.small-menu {
      position: relative;
      display: block;
      margin-right: auto;
      margin-left: 1em;
      &>ul {
        margin-top: 1em;
        box-sizing: border-box;
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        width: 16.25em;
        padding: 1em;
        
        background-color: rgba(0,0,0,0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;

        border-radius: 0.25em;
        border-top: 0.125em solid white;
        li {
          a {
            color: #fff;
            font-size: 14px;
            transition: 0.2s;
            &:hover {
              opacity: 0.8;
            }
          }
        }

      }
      span.small-triangle {
        position: absolute;
        top: 1.4em;
        left: 8.125em;
        transform: translateX(-50%) rotateX(25deg);
        color: white;
      }
        
    }
    &>ul {
      display: none;
    }
  }
`;
