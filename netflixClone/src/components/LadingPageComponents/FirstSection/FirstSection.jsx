import { FirstSectionContainer } from "./FirstSectionStyledComponents";
import triangle from "../../../assets/SVG/angle-right.svg";

export default function FirstSection() {
  return(
    <FirstSectionContainer>
      <div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Starts at COP 16,900. Cancel anytime.</p>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form action="">
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
