import { useState } from "react";
import { StyledTrendingSection, StyledTrendingSelectContainer } from "./TrendingSectionStyledComponents";
import TrendsSlider from "./components/TrendsSlider/TrendsSlider";


export default function TrendingSection() {
  const [chosenTrendsToWatch, setChosenTrendsToWatch] = useState({
    country: "Colombia",// "Global"
    category: "Movies", // "Series"
    languaje: "All", // "En"
  });
  
  const handleCountryChange = (e) => {
    setChosenTrendsToWatch({
      ...chosenTrendsToWatch,
      country: e.target.value,
      languaje: "All",
    });
  };

  const handleCategoryChange = (e) => {
    setChosenTrendsToWatch({
      ...chosenTrendsToWatch,
      category: e.target.value,
    });
  };

  return(
    <StyledTrendingSection>
      <h2>Trending Now</h2>
      <StyledTrendingSelectContainer>
        <select value={chosenTrendsToWatch.country} onChange={handleCountryChange}>
          <option value="Colombia">Colombia</option>
          <option value="Global">Global</option>
        </select>
      </StyledTrendingSelectContainer>
      <StyledTrendingSelectContainer>
        <select value={chosenTrendsToWatch.category} onChange={handleCategoryChange}>
          {chosenTrendsToWatch.country === "Colombia" ? (
            <>
              <option value="Movies">Movies</option>
              <option value="Series">Series</option>
            </>
          ) : (
            <>
              <option value="Movies - English">Movies - English</option>
              <option value="TV Shows - English">TV Shows - English</option>
              <option value="Movies - Other languajes">Movies - Other languajes</option>
              <option value="TV Shows - Other languajes">TV Shows - Other languajes</option>
            </>
          )}
        </select>
      </StyledTrendingSelectContainer>
      <TrendsSlider chosenTrendsToWatch={chosenTrendsToWatch} />

    </StyledTrendingSection>
  )
};


