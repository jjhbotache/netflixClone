import {
  StyledLogin,
  StyledLoginFooter,
  StyledLoginSection,
  StyledLogo,
} from "./StyledLogin";
import netflixLogo from "../../assets/PNG/Netflix_Logo_PMS.png";
import languajeImg from '../../assets/PNG/translate.png'
import triangle from '../../assets/SVG/angle-right.svg'
import { useEffect } from "react";
import { StyledNavLanguajeSelect } from "../../components/LadingPageComponents/Nav/NavStyledComponents";
import getParametersFromURL from "../../functions/simpleHelpers/getParametersFromURL";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()


  useEffect(() => {

    const alreadyLogged = localStorage.getItem('loginData')
    if(alreadyLogged) {
      navigate('/dashboard/home')
    }else{
      navigate('/login')
    }

  }, []);

  function onLogin(e) {
    e.preventDefault();
    // const callbackUrl = 'http://localhost:5173/dashboard'
    const callbackUrl = 'https://netflix-clone-beta-seven-55.vercel.app/dashboard'
    window.open(`https://netflixclone.auth.us-east-2.amazoncognito.com/login?client_id=7k9556rg4hq5citjai71j0ekac&response_type=token&scope=email+openid&redirect_uri=${callbackUrl}`)
  }


  return (
    <StyledLogin>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/729317fd-446c-48e7-a307-9967367e6e87/CO-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      <StyledLogo src={netflixLogo} alt="netflix logo" />
      <StyledLoginSection>
        <h1>Sign In</h1>
        <form onSubmit={onLogin}>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
          <div>
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <span>Need help?</span>
          </div>
        </form>
        <p>
          New to Netflix? <a>Sign up now.</a>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a>Learn more.</a>
        </p>
      </StyledLoginSection>
      <StyledLoginFooter>
        <div>
          <p>
            Questions? Call <a>1-877-742-1335</a>
          </p>
          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Terms of Use</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </ul>
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
          </div>
        </div>
      </StyledLoginFooter>
    </StyledLogin>
  );
}
