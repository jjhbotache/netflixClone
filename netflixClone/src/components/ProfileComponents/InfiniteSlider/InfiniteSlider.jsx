import { useEffect, useRef, useState } from "react";
import { InfiniteSliderContainer } from "./InfiniteSliderStyledComponents";

export default function InfiniteSlider({imgArray,onChange=(i)=>{console.log(i);},firstIndex}) {
  const [sliderInfo, setSliderInfo] = useState({
    onMove: false,
    imgArray: imgArray,
    currentImg: 0,
    nextImg: 1,
    prevImg: imgArray.length - 1,
  });
  const sliderRef = useRef(null);
  const lastScrolledDirection = useRef(undefined);
  const showFirstFirstIndex = useRef(false)


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
      let counter = 0;
      const expectedScrollLeft = direction === "next" 
        ? sliderRef.current.scrollLeft + fraction 
        : sliderRef.current.scrollLeft - fraction;

      const interval = setInterval(() => {
        counter++;
        if (sliderRef.current?.scrollLeft == expectedScrollLeft || counter > 3000) {
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
    // debugger
    onChange(sliderInfo.currentImg);
    if (lastScrolledDirection.current==undefined) return;
    sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 3;
  }, [sliderInfo]);
  
  if (!showFirstFirstIndex.current && firstIndex !== undefined) {
    console.log("firstIndex from the if:",firstIndex);
    setSliderInfo({
      ...sliderInfo,
      currentImg: firstIndex,
      nextImg: firstIndex + 1 === imgArray.length ? 0 : firstIndex + 1,
      prevImg: firstIndex - 1 === -1 ? imgArray.length - 1 : firstIndex - 1,
    });
    showFirstFirstIndex.current = true;
  }

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
