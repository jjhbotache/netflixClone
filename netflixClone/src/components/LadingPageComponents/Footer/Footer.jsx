import { StyledNavLanguajeSelect } from "../Nav/NavStyledComponents";
import { StyledFooter } from "./FooterStyledComponents";
import languajeImg from '../../../assets/PNG/translate.png'
import triangle from '../../../assets/SVG/angle-right.svg'

export default function Footer() {
  const links = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix"
  ];

  return (
    <StyledFooter>
      <span>
        Questions? Call <a href="#">01 800 917 1563</a>
      </span>
      <ul>
        {links.map((link, index) => (
          <li key={index}><a href="#">{link}</a></li>
        ))}
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