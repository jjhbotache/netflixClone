import netflixLogo from '../../../assets/PNG/Netflix_Logo_PMS.png'
import languajeImg from '../../../assets/PNG/translate.png'
import triangle from '../../../assets/SVG/angle-right.svg'
import { StyledLogo, StyledNav, StyledNavLanguajeSelect, StyledNavLoginButton } from './NavStyledComponents'

export default function Nav() {
  return (
    <StyledNav>
      <ul>
      <StyledLogo src={netflixLogo} alt="Netflix Logo" />
      <div>
        <StyledNavLanguajeSelect>
          <summary>
            <img src={languajeImg} alt="Languaje" />
            languaje
            <button><img src={triangle} alt="triangle"/></button>
          </summary>
          <ul>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </StyledNavLanguajeSelect>
        <StyledNavLoginButton to={"/login"}>Sign in</StyledNavLoginButton>
      </div>
      </ul>
    </StyledNav>
  )
};
