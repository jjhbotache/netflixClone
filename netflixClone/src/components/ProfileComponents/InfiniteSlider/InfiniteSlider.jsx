import { useEffect, useRef, useState } from "react";
import { InfiniteSliderContainer } from "./InfiniteSliderStyledComponents";

export default function InfiniteSlider({imgArray}) {
  const [sliderInfo, setSliderInfo] = useState({
    onMove: false,
    imgArray: imgArray,
    currentImg: 0,
    nextImg: 1,
    prevImg: imgArray.length - 1,
  });
  const sliderRef = useRef(null);
  const lastScrolledDirection = useRef(undefined);


  useEffect(() => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 3;
  }, []);


  function changeImg(direction) {
    // when a button is clicked, according to the direction, 
    // scroll to the next or prev img
    // and update the sliderInfo

    lastScrolledDirection.current = direction;

    const fraction = sliderRef.current.scrollWidth / 3

    if(direction === "next") {
      // slide to next img smoothly
      sliderRef.current.scrollTo({ left: sliderRef.current.scrollLeft + fraction, behavior: "smooth", });
    }else if(direction === "prev") {
      // slide to prev img smoothly
      sliderRef.current.scrollTo({ left: sliderRef.current.scrollLeft - fraction, behavior: "smooth", });
    }
    // make a promise to wait until the slider gets scroll position in specified range
    new Promise((resolve, reject) => {
      const expectedScrollLeft = direction === "next" 
        ? sliderRef.current.scrollLeft + fraction 
        : sliderRef.current.scrollLeft - fraction;

      const interval = setInterval(() => {
        if (sliderRef.current.scrollLeft == expectedScrollLeft) {
          clearInterval(interval);
          resolve();
        }
      }, 1);
    }).then(() => {
      stopedToScroll();
    });
  }

  function stopedToScroll() {
    if (lastScrolledDirection.current==undefined) return;
    // when the slider stops moving,
    // update the imgsToRender according to the lastScrolledDirection
    // and the scrollLeft
    if (lastScrolledDirection.current=="next") {
      // debugger
      setSliderInfo({
        ...sliderInfo,
        currentImg: sliderInfo.nextImg, // 
        nextImg: sliderInfo.nextImg + 1 === imgArray.length ? 0 : sliderInfo.nextImg + 1,
        prevImg: sliderInfo.currentImg,
      });
    }
    else if (lastScrolledDirection.current=="prev") {
      setSliderInfo({
        ...sliderInfo,
        currentImg: sliderInfo.prevImg,
        nextImg: sliderInfo.currentImg,
        prevImg: sliderInfo.prevImg - 1 === -1 ? imgArray.length - 1 : sliderInfo.prevImg - 1,
      });
    }
    
  }

  useEffect(() => {
    if (lastScrolledDirection.current==undefined) return;
    
    sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 3;
  }, [sliderInfo]);


  return (
    <InfiniteSliderContainer >
      <button onClick={
        () => changeImg("prev")
      }>{"◀"}</button>
      <div ref={sliderRef}>
        <img src={sliderInfo.imgArray[sliderInfo.prevImg]} alt="" />
        <img src={sliderInfo.imgArray[sliderInfo.currentImg]} alt="" />
        <img src={sliderInfo.imgArray[sliderInfo.nextImg]} alt="" />
      </div>
      <button onClick={
        () => changeImg("next")
      }>{"▶"}</button>
    </InfiniteSliderContainer>
  )
};
