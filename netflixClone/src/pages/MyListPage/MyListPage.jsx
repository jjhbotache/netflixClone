import { useEffect, useState } from "react";
import DashboardFooter from "../../components/DashboardComponents/DashboardFooter/DashboardFooter";
import DashboardNav from "../../components/DashboardComponents/DashboardNav/DashboardNav";
import { MyListPageContainer } from "./MyListPageStyledComponents";
import { Link, useNavigate } from "react-router-dom";
import { getImgById } from "../../constants/titlesImg";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../configs/firebase";

export default function MyListPage() {
  const [profileData, setProfileData] = useState(
    JSON.parse(localStorage.getItem("profileData"))
  );
  const [myListImgs, setMyListImgs] = useState([
  ])
  const navigate = useNavigate();


  useEffect(() => {
    // if there is no profileData in the localStorage, redirect to login
    if (!localStorage.getItem("profileData")) navigate("/profile");

    // scroll to top
    window.scrollTo(0, 0);


    // get mylist indexes from profileData
    renderListFromLocalStorage();


    
  }, []);

  async function deleteTitle(idToDelete){
    const newMyListTitlesArray = profileData.myListTitles.filter(id => id !== idToDelete);
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
  }

  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    renderListFromLocalStorage();
  }, [profileData]);



  function renderListFromLocalStorage() {
    const arrayItems = [];
    profileData.myListTitles?.forEach(indx => {
      // get img url from index
      const img = getImgById(indx);
      arrayItems.push(img);
    });
    console.log(arrayItems);
    setMyListImgs(arrayItems);
  }
  return(
    <>
      <DashboardNav profileData={profileData} />
      <MyListPageContainer>
        <h1>My list</h1>
        <div className="my-list">
          {myListImgs.map((img) => (
            <div className="title" key={img.id}>
            <img src={img.url} alt="my list"  />
            <div className="options">
              <Link to="/watch-title"><button>▶</button></Link>
              <button onClick={e=>deleteTitle(img.id)}>🗑️</button>
            </div>
            </div>
          ))}
        </div>
      </MyListPageContainer>
      <DashboardFooter/>
    </>
  )
};
