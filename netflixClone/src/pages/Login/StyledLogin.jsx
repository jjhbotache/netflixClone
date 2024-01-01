import styled from "styled-components"


export const StyledLogin = styled.main`

  width: 100%;
  height: auto;
  overflow: hidden;
  &>img:first-child{
    opacity: .5;
    position: relative;
    z-index: -1;
    
    height: inherit;
    object-fit: cover;
  }
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: .5rem;
  left: 1rem;
  opacity: 1;
  margin: 1rem 0 0 2rem;
  width: 167px;
  object-fit: contain;
`;

export const StyledLoginSection = styled.section`
  box-sizing: border-box;
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translate(-50%); 
  width: 450px;
  max-width: 450px;
  height: auto;
  background: rgba(0,0,0,.75);
  color: rgb(179,179,179);
  
  padding: 60px 68px 40px 68px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  &>h1{
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  &>form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &>input,button{
      border-radius: 4px;
      box-sizing: border-box;
      display: flex;
      align-items: start;
      justify-content: center;
      height: 3.125rem;
      border: none;
      padding: 0 1rem;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    &>input{
      background: #333;
      color: #fff;
    }
    &>button[type="submit"]{ 
      display: grid;
      place-items: center;
      background: #e50914;
      margin-top: 1.5rem;
      color: #fff;
      cursor: pointer;
      font-weight: 500;
    }
    &>div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 2rem;
      color: inherit;
      & div{
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
      }
      & input[type="checkbox"]{
        height: 100%;
        margin: 0;
        padding: 0;
      }
      & label{
        font-size: 13px;
        margin-left: .2rem;
        font-weight: 400;
      }
      & span{
        font-size: 13px;
      }

    }
  }
  &>p{
    font-size: .8rem;
    font-weight: 400;
    &>span{
      color: #0071eb;
      cursor: pointer;
    }
  }

  & p:not(:last-child){
    &>a{
      color: white;
      font-size: calc(inherit+2px);
    }
    margin-top: 3rem;
    font-size: 16px;
  }

  & a{
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;
  }
  & p>a{
    color: #0071eb;
    font-size: inherit;
  }
  & p:last-child{
    margin-bottom: 5rem;
  }
`;

export const StyledLoginFooter = styled.footer`

  width: 100%;
  height: 248px;
  margin:-248px 0 0 0;
  margin:-248px 0 0 0;
  background: rgba(0,0,0,.75);
  color: rgba(115,115,115);
  &>div{
    margin:0 auto;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    max-width: 1000px;
    padding: 30px 0 0 0;

    &>p:first-child{
      margin: 30px 0;
    }
    &>ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      &>li{
        margin-right: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        min-width: 250px;
        font-size: 13px;
      }
    }
    &>div:last-child{
      background: #000;
      width: 122px;
      margin-right: auto;
    }
  }
`;