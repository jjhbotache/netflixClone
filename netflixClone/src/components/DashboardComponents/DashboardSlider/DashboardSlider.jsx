import { useEffect, useRef, useState } from "react";
import { SliderContainer, SliderTitle, TitlesContainer } from "./DashboardSliderStyledComponents";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../../configs/firebase";

export default function DashboardSlider({title, infoArray: imgArray}) {
  const sectionRef = useRef(null);
  const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem("profileData")));
  


  function scrollSlider(direction) {
    const currentScrollPosition = sectionRef.current.scrollLeft;
    const scrollWidth = sectionRef.current.clientWidth;
    sectionRef.current.scrollTo({ left: ((direction=="right"?+1:-1)*scrollWidth)+(currentScrollPosition) , top: 0, behavior: 'smooth' });
  }

  async function addToMyList(idToAdd) {
    // if the profileData has a myListTitles, then update in the database and then in the LS
    // else, create a myListTitles in the database and then in the LS

    if (profileData.myListTitles) {
      // if the id is already in the myListTitles, delete instead
      if (profileData.myListTitles.includes(idToAdd)) {
        // delete from the database
        // then update in the LS
        const newMyListTitlesArray = profileData.myListTitles.filter(id => id !== idToAdd);
        await updateDoc(
          doc(db, "profilesCollection", profileData.id),
          {
            myListTitles: newMyListTitlesArray
          }
        )
        setProfileData(prevProfileData => ({
          ...prevProfileData,
          myListTitles: newMyListTitlesArray
        }));
        console.log("deleted");
        return;
      } else {
        const newMyListTitlesArray = [...profileData.myListTitles, idToAdd];
        // update in the database
        // then update in the LS

        await updateDoc(
          doc(db, "profilesCollection", profileData.id),
          {
            myListTitles: newMyListTitlesArray
          }
        )
        setProfileData(prevProfileData => ({
          ...prevProfileData,
          myListTitles: newMyListTitlesArray
        }));
        console.log("updated");
      }
    } else {
      // create a myListTitles in the database
      // then update in the LS
      await addDoc(
        doc(db, "profilesCollection", profileData.id),
        {
          myListTitles: [idToAdd]
        }
      )
      setProfileData(prevProfileData => ({
        ...prevProfileData,
        myListTitles: [idToAdd]
      }));
      console.log("created");
    }
  }

  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
  }, [profileData]);




  return(
    <SliderContainer >
      <SliderTitle>{title}</SliderTitle>
      <TitlesContainer>
      <ul ref={sectionRef}>
        {
          imgArray.map((img, index) => (
            <li key={index}>
              <img src={img.url} alt="" />
              <div className="details-and-options">
              <button>▶</button>
              <button className={profileData.myListTitles.includes(img.id) && "title-added"} onClick={e=>addToMyList(img.id)}>+</button>
              <button>👍</button>
              </div>
            </li>
          ))
        }
      </ul>
      <button onClick={e=>scrollSlider("left")}>◀</button>
      <button onClick={e=>scrollSlider("right")}>▶</button>
      </TitlesContainer>      
    </SliderContainer>
  )
};
