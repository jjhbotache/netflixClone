import { StyledFirstSection } from "../../AppStyledComponents";
import FirstSection from "../../components/FirstSection/FirstSection";
import Footer from "../../components/Footer/Footer";
import GamesSection from "../../components/GamesSection/GamesSection";
import JoinWithEmailSection from "../../components/JoinWithEmailSection/JoinWithEmailSection";
import MoreReazonsSection from "../../components/MoreReazonsSection/MoreReazonsSection";
import Nav from "../../components/Nav/Nav";
import PlansSection from "../../components/PlansSection/PlansSection";
import QuestionsSection from "../../components/QuestionsSection/QuestionsSection";
import Ribbon from "../../components/Ribbon/Ribbon";
import TrendingSection from "../../components/TrendingSection/TrendingSection";
import seriesBackground from "../../assets/PNG/bg_series.jpg";




export default function LandingPage() {
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
      </StyledFirstSection  >
  )
};



