import styled from "styled-components"

export default function Ribbon() {
  const StyledRibbonContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: auto;
    overflow: hidden;
  `;

  const StyledRibbon = styled.div`
    
    margin-top: 2rem;
    border-top-left-radius: 50% 25%;
    border-top-right-radius: 50% 25%; 
    background: linear-gradient(
    to right,
    rgba(33, 13, 22, 1) 5%,
    rgba(184, 40, 105, 1),
    rgba(229, 9, 20, 1),
    rgba(184, 40, 105, 1),
    rgba(33, 13, 22, 1) 95%
    );
    width: 120%;
    height: 100px;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -46%);
      background: radial-gradient(
      50% 500% at 50% -420%,
      rgba(64, 97, 231, 0.4) 80%,
      rgba(20, 20, 20, 1) 100%
      ),black;

      border-top-left-radius: 50% 25%;
      border-top-right-radius: 50% 25%; 
    }

    `;


  return (
    <StyledRibbonContainer>
      <StyledRibbon/>
    </StyledRibbonContainer>
  )
};
