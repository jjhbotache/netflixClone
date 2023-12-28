import { StyledNavLanguajeSelect } from "../Nav/NavStyledComponents";
import { StyledFooter } from "./FooterStyledComponents";
import languajeImg from '../../assets/PNG/translate.png'
import triangle from '../../assets/SVG/angle-right.svg'

export default function Footer() {
  return (
    <StyledFooter>
      <span>
        Questions? Call <a href="#">01 800 917 1563</a>
      </span>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Redeem Gift Cards</a></li>
        <li><a href="#">Buy Gift Cards</a></li>
        <li><a href="#">Ways to Watch</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Speed Test</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Only on Netflix</a></li>
      </ul>
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
      <span>Netflix Colombia</span>
    </StyledFooter>
  );
}
