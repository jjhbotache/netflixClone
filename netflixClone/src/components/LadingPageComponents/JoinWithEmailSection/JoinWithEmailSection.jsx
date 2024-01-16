import { StyledJoinWithEmailSection } from "./JoinWithEmailSectionStyledComponents";
import triangle from "../../assets/SVG/angle-right.svg";

export default function JoinWithEmailSection() {
  return(
    <StyledJoinWithEmailSection>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <form action="">
        <input type="email" placeholder="Email address" />
        <button>
          <span>Get Started</span>
          <img src={triangle} alt="triangle" />
        </button>
      </form>
    </StyledJoinWithEmailSection>
  )
};
