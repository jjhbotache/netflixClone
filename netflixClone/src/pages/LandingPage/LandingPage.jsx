import { StyledFirstSection } from "../../AppStyledComponents";
import seriesBackground from "../../assets/PNG/bg_series.jpg";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/LadingPageComponents/Nav/Nav";
import Ribbon from "../../components/LadingPageComponents/Ribbon/Ribbon";
import PlansSection from "../../components/LadingPageComponents/PlansSection/PlansSection";
import TrendingSection from "../../components/LadingPageComponents/TrendingSection/TrendingSection";
import GamesSection from "../../components/LadingPageComponents/GamesSection/GamesSection";
import MoreReazonsSection from "../../components/LadingPageComponents/MoreReazonsSection/MoreReazonsSection";
import QuestionsSection from "../../components/LadingPageComponents/QuestionsSection/QuestionsSection";
import JoinWithEmailSection from "../../components/LadingPageComponents/JoinWithEmailSection/JoinWithEmailSection";
import Footer from "../../components/LadingPageComponents/Footer/Footer";
import FirstSection from "../../components/LadingPageComponents/FirstSection/FirstSection";




export default function LandingPage() {
  const navigate = useNavigate();
  if (!!localStorage.getItem("token")) navigate("/dashboard");
  return(
    <StyledFirstSection>
        <img src={seriesBackground} alt="series background" />
        <Nav/>
        <FirstSection/>
        <Ribbon/>
        <PlansSection/>
        <TrendingSection/>
        <GamesSection/>
        <MoreReazonsSection/>
        <QuestionsSection/>
        <JoinWithEmailSection/>
        <Footer/>
      </StyledFirstSection>
  )
};



