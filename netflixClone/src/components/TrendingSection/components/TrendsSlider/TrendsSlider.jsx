import { useEffect, useRef, useState } from "react";
import trendsArrays from "../../consts/trendsArrays";
import TrendImg from "../TrendImg/TrendImg";
import { TrendsSliderContainer } from "./TrendsSliderStyledComponents";

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

  const sliderContainerRef = useRef(null);
  const [trendsOnSide, setTrendsOnSide] = useState(null); // right or left
  let maxScrollTrendsPosition = useRef(sliderContainerRef.current?.scrollWidth);

  useEffect(() => {
    getAndSetTrendsOnSide();
    sliderContainerRef.current?.addEventListener("scroll",getAndSetTrendsOnSide);
    return () => {
      sliderContainerRef.current?.removeEventListener("scroll",getAndSetTrendsOnSide);
    }
  }, []);

  function getAndSetTrendsOnSide() {
    maxScrollTrendsPosition.current = sliderContainerRef.current.scrollWidth - sliderContainerRef.current.clientWidth - 2;
    sliderContainerRef.current.scrollLeft <= 0 ? setTrendsOnSide("left") :
    sliderContainerRef.current.scrollLeft >= maxScrollTrendsPosition.current ? setTrendsOnSide("right") : setTrendsOnSide(null);
  }

  function scrollSlider(direction) {
    const remValueInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const trendImgWidthInRems = 7.2;
    const amountOfTrendImgsVisible = 5;

    const pxToMove = ((remValueInPixels * trendImgWidthInRems) * amountOfTrendImgsVisible);

    const currentScrollPosition = sliderContainerRef.current.scrollLeft;
    let newScrollPosition = direction === "right" ? currentScrollPosition - pxToMove : currentScrollPosition + pxToMove;
    if (newScrollPosition < 0) newScrollPosition = 0;
    if (newScrollPosition > maxScrollTrendsPosition.current) newScrollPosition = maxScrollTrendsPosition.current;
    sliderContainerRef.current.scrollTo({ left: newScrollPosition, top: 0, behavior: 'smooth' });
  }

  return (
    <TrendsSliderContainer >
      {trendsOnSide!="left" && <button onClick={e=>{scrollSlider("right")}}>◀</button>}
      <div ref={sliderContainerRef}>
      {trendsImgsToRender.map((img, index) => {
        return <TrendImg key={index} index={index+1} img={img} />;
      })}
      </div>
      {trendsOnSide!="right" && <button onClick={e=>{scrollSlider("left")}}>▶</button>}
    </TrendsSliderContainer>
  );

  
}
