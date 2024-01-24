import { useEffect, useRef, useState } from "react";
import { SliderContainer, SliderTitle, TitlesContainer } from "./DashboardSliderStyledComponents";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import db from "../../../configs/firebase";
import { useNavigate } from "react-router-dom";

export default function DashboardSlider({title, infoArray: imgArray}) {
  const sectionRef = useRef(null);
  const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem("profileData")));
  const navigate = useNavigate();
  

  useEffect(() => {
    // set the profileData from the LS
    setProfileData(JSON.parse(localStorage.getItem("profileData")));
  }, []);

  function scrollSlider(direction) {
    const currentScrollPosition = sectionRef.current.scrollLeft;
    const scrollWidth = sectionRef.current.clientWidth;
    sectionRef.current.scrollTo({ left: ((direction=="right"?+1:-1)*scrollWidth)+(currentScrollPosition) , top: 0, behavior: 'smooth' });
  }

  async function addToMyList(idToAdd) {
    // if the profileData has a myListTitles, then update in the database and then in the LS
    // else, create a myListTitles in the database and then in the LS

    if (profileData?.myListTitles) {
      // if the id is already in the myListTitles, delete instead
      if (profileData?.myListTitles?.includes(idToAdd)) {
        // delete from the database
        // then update in the LS
        const newMyListTitlesArray = profileData?.myListTitles?.filter(id => id !== idToAdd);
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
        const newMyListTitlesArray = [...profileData?.myListTitles, idToAdd];
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
      console.log(profileData);
      updateDoc(
        doc(db, "profilesCollection", profileData.id),
        {
          myListTitles: [idToAdd]
        }
      ).then((docRef) => {
        setProfileData(
          prevProfileData => ({
            ...prevProfileData,
            myListTitles: [idToAdd]
          })
        );
        // set it also in the LS
        localStorage.setItem("profileData", JSON.stringify(profileData));
        console.log("created");
        alert("added to myList");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error adding document: ", error);
      });
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
          imgArray?.map((img, index) => (
            <li key={index}>
              <img src={img.url} alt="" />
              <div className="details-and-options">
                <button onClick={e=>navigate("/watch-title")}><i className="fi fi-sr-play"></i></button>
                <button className={profileData?.myListTitles?.includes(img.id) && "title-added"} onClick={e=>addToMyList(img.id)}><i className="fi fi-rr-add"></i></button>
                <button><i className="fi fi-br-social-network"></i></button>
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
