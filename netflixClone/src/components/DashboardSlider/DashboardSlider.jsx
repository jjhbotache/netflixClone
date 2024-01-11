import { useRef } from "react";
import { SliderTitle, TitlesContainer } from "./DashboardSliderStyledComponents";

export default function DashboardSlider({title, infoArray}) {
  const sectionRef = useRef(null);

  // get the width of the section and log it
  console.log(sectionRef?.current?.clientWidth);

  // create 2 functions
  // one to move the slider to the left
  // one to move the slider to the right
  // both functions, will move the slider by the width of the section


  function scrollSlider(direction) {
    const currentScrollPosition = sectionRef.current.scrollLeft;
    sectionRef.current.scrollTo({ left: (direction=="right"?+1:-1)*sectionRef.current.clientWidth , top: 0, behavior: 'smooth' });
  }





  return(
    <section >
      <SliderTitle>{title}</SliderTitle>
      <TitlesContainer>
      <div ref={sectionRef}>
        {
          infoArray.map((info, index) => (
            <li key={index}>
                <img src={info} alt="" />
              </li>
          ))
        }
      </div>
      <button onClick={e=>scrollSlider("left")}>◀</button>
      <button onClick={e=>scrollSlider("right")}>▶</button>
      </TitlesContainer>      
    </section>
  )
};
