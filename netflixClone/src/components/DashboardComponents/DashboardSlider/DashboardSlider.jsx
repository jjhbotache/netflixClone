import { useRef } from "react";
import { SliderTitle, TitlesContainer } from "./DashboardSliderStyledComponents";

export default function DashboardSlider({title, infoArray}) {
  const sectionRef = useRef(null);


  function scrollSlider(direction) {
    const currentScrollPosition = sectionRef.current.scrollLeft;
    const scrollWidth = sectionRef.current.clientWidth;
    sectionRef.current.scrollTo({ left: ((direction=="right"?+1:-1)*scrollWidth)+(currentScrollPosition) , top: 0, behavior: 'smooth' });
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
