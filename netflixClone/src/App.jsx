import { StyledFirstSection } from "./AppStyledComponents"
import FirstSection from "./components/FirstSection/FirstSection"
import Nav from "./components/Nav/Nav"
import seriesBackground from "./assets/PNG/bg_series.jpg";
import Ribbon from "./components/Ribbon/Ribbon";
import PlansSection from "./components/PlansSection/PlansSection";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import GamesSection from "./components/GamesSection/GamesSection";
import MoreReazonsSection from "./components/MoreReazonsSection/MoreReazonsSection";
import QuestionsSection from "./components/QuestionsSection/QuestionsSection";
import JoinWithEmailSection from "./components/JoinWithEmailSection/JoinWithEmailSection";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
      <StyledFirstSection>
        <img src={seriesBackground} alt="series background" />
        <Nav />
        <FirstSection />
        <Ribbon/>
        <PlansSection/>
        <TrendingSection/>
        <GamesSection/>
        <MoreReazonsSection/>
        <QuestionsSection/>
        <JoinWithEmailSection/>
        <Footer/>
      </StyledFirstSection>
    </>
  )
}

export default App
