import { useEffect, useState } from "react";
import trendsArrays from "../../consts/trendsArrays";

export default function TrendsSlider(chosenTrendsToWatch) {
  const trendsImgsToRender = chosenTrendsToWatch.chosenTrendsToWatch.country === "Colombia"
  ? chosenTrendsToWatch.chosenTrendsToWatch.category === "Movies"
    ? trendsArrays.colombiaMoviesImages
    : trendsArrays.colombiaSeriesImages
  : chosenTrendsToWatch.chosenTrendsToWatch.category === "Movies - English"
  ? trendsArrays.globalEnMoviesImages
  : chosenTrendsToWatch.chosenTrendsToWatch.category === "TV Shows - English"
  ? trendsArrays.globalEnSeriesImages
  : chosenTrendsToWatch.chosenTrendsToWatch.category === "Movies - Other languajes"
  ? trendsArrays.globalAllMoviesImages
  : trendsArrays.globalAllSeriesImages;

  return (
    <div>
      {JSON.stringify(chosenTrendsToWatch)}
      <div>
        {trendsImgsToRender.map((img, index) => {
          return <img key={index} src={img} alt="trend" />;
        })}
      </div>
    </div>
  );
}
