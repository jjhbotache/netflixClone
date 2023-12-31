import { StyledLogin, StyledLoginSection, StyledLogo } from "./StyledLogin";
import netflixLogo from "../../assets/PNG/Netflix_Logo_PMS.png";

export default function Login() {
  return(
    <StyledLogin>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/729317fd-446c-48e7-a307-9967367e6e87/CO-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      <StyledLogo src={netflixLogo} alt="netflix logo" />
      <StyledLoginSection>
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
          <div>
            <div>
              <input type="checkbox"/>
              <label>Remember me</label>
            </div>
            <span>Need help?</span>
          </div>
        </form>
        <p>New to Netflix? <a>Sign up now.</a></p>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a></p>
      </StyledLoginSection>
    </StyledLogin>
  )
};
