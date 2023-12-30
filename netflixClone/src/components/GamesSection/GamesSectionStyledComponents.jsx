import styled from "styled-components";
import { bigScreenWidthInPx } from "../../consts/styleConsts";

export const StyledGamesSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  color: #fff;
  padding: 2rem;

  &>h3{
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  &>div{
    box-sizing: border-box;
    background: linear-gradient(97deg, #45172B 1.27%, #120C1F 75.23%);
    width: 100%;
    padding: 1.5rem;
    padding-bottom: 0rem;
    border-radius: 1rem;
    overflow: hidden;  
    
    & h3{
      font-size: 1.5rem;
      font-weight: 500;
    }
    & p{
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255, 255, 255,.7);
      margin: .5rem 0;
    }
    & div:last-child{
      box-sizing: border-box;
      position: relative;
      width: 16rem;
      height: inherit;
      min-height: 12.5rem;
      margin-left: auto;
      margin-right: -1.5rem;
      background: radial-gradient(59.83% 83.88% at 100% 100%, rgba(255, 2, 15, 0.5) 0%, rgba(23, 43, 71, 0.00) 100%);
      background-image: radial-gradient(59.83% 83.88% at 100% 100%, rgba(229, 9, 20, 0.5) 0%, rgba(23, 43, 71, 0) 100%);
      &::after{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(10%, 15%);
        scale: 1.7;
        opacity: .8;
        width: inherit;
        height: 100%;
        background-image: url(${props => props.$img});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  @media all and (width > ${bigScreenWidthInPx + "px"}) {
    padding: 0 5rem;
    &>div{
      height: 213px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & div:first-child{

      }
      & div:last-child{
        width: 100%;
        &::after{
          width: 352px;
          transform: translate(15%,5%);
        }
      }
    }
    
  }
`;