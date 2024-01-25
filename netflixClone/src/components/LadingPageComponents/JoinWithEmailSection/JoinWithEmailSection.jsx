import { StyledJoinWithEmailSection } from "./JoinWithEmailSectionStyledComponents";
import triangle from "../../../assets/SVG/angle-right.svg";
import { useNavigate } from "react-router-dom";

export default function JoinWithEmailSection() {
  const navigate = useNavigate();
  return(
    <StyledJoinWithEmailSection>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <form onSubmit={e=>navigate("/login")}>
        <input type="email" placeholder="Email address" />
        <button>
          <span>Get Started</span>
          <img src={triangle} alt="triangle" />
        </button>
      </form>
    </StyledJoinWithEmailSection>
  )
};
