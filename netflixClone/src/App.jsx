import { StyledFirstSection } from "./AppStyledComponents"
import FirstSection from "./components/FirstSection/FirstSection"
import Nav from "./components/Nav/Nav"
import seriesBackground from "./assets/PNG/bg_series.jpg";
import Ribbon from "./components/Ribbon/Ribbon";
import PlansSection from "./components/PlansSection/PlansSection";


function App() {

  return (
    <>
      <StyledFirstSection>
        <img src={seriesBackground} alt="series background" />
        <Nav />
        <FirstSection />
        <Ribbon/>
        <PlansSection/>
      </StyledFirstSection>
    </>
  )
}

export default App
