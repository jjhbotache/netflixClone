import { useEffect, useRef, useState } from "react";
import trendsArrays from "../../constants/trendsArrays";
import TrendImg from "../TrendImg/TrendImg";
import { TrendsSliderContainer } from "./TrendsSliderStyledComponents";
import { bigScreenWidthInPx } from "../../../../../constants/styleConsts";

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
    // get the width of the window in px
    const windowWidthInPx = window.innerWidth;
    const remValueInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const gapInRem = .5;
    const trendImgWidthInRems = (windowWidthInPx > bigScreenWidthInPx ? 8.75 : 7) + gapInRem;

    const amountOfTrendImgsVisible = Math.floor(windowWidthInPx / (trendImgWidthInRems * remValueInPixels));

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
