import { FirstSectionContainer } from "./FirstSectionStyledComponents";
import triangle from "../../../assets/SVG/angle-right.svg";
import { useNavigate } from "react-router-dom";

export default function FirstSection() {
  const navigate = useNavigate();
  return(
    <FirstSectionContainer>
      <div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Starts at COP 16,900. Cancel anytime.</p>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form onSubmit={e=>navigate("/login")}>
          <input type="email" placeholder="Email address" />
          <button>
            <span>Get Started</span>
            <img src={triangle} alt="triangle" />
          </button>
        </form>
      </div>
    </FirstSectionContainer>
  )
};
