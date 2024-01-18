import { StyledGamesSection } from "./GamesSectionStyledComponents";
import gamesImg from "../../../assets/PNG/games-banner-image-cropped.png";

export default function GamesSection() {
  return(
    <StyledGamesSection $img={gamesImg} >
      <h3>Play Mobile Games</h3>
      <div>
        <div>
          <h3>Mobile games now included in every plan</h3>
          <p>No ads, extra fees, or in-app purchases. Enjoy unlimited access to a growing catalog of popular and exclusive games.</p>
        </div>
        <div></div>
      </div>
    </StyledGamesSection>
  )
};
