import { Link, useNavigate } from "react-router-dom";
import { DashboardProfileContainer, DashboardProfileProfilesContainer } from "./ProfileStyledComponents";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import db from "../../configs/firebase";
import { getRegisters } from "../../functions/firebaseFunctions/firebaseFunctions";

export default function Profile() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([
    // {
    //   image: "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145",
    //   name: "Profile 1"
    // },
  ]);
  
  


  function profileChosen(index) {
    // set in LS the profile data
    localStorage.setItem("profileData", JSON.stringify(profiles[index]));
    navigate("/dashboard/home");
  }

  useEffect(() => {
    // if there is no loginData in the localStorage, redirect to login
    if(!localStorage.getItem("loginData")) navigate("/login");
    // if there is no profileData in the localStorage, redirect to profile create
    if(!localStorage.getItem("profileData")) navigate("/profile/create");

    const {sub} = JSON.parse(localStorage.getItem("loginData"));
    // get from firestore the data of the current user
    const getProfiles = async() => {
      const userInfo = JSON.parse(localStorage.getItem("userData"));
      const querySnapshot = await getDocs(
        query(
          collection(db, "usersCollection"),
          where("sub", "==", userInfo.sub)
        )
      )
      const usersFound = querySnapshot.docs.map((doc) => doc.data());
  
      
      console.log("usersFound:", usersFound);

      // get the profiles of the current user
      const profiles = usersFound[0].profiles;
      console.log("profiles:", profiles);
      
      // if there isn't any profile, redirect to profile create
      if(!profiles || profiles.length==0) navigate("/profile/create");
      
      // for each profile, get the data of that profile
      const promises = profiles.map(async (profileId) => {
        const docRef = doc(db, "profilesCollection",profileId );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return {...docSnap.data(), id: docSnap.id};
          
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          console.log("ID: ", profileId);
        }
      }
      );
      const profilesData = await Promise.all(promises);
      console.log("profilesData:", profilesData);
      setProfiles(profilesData)

      
    }
    getProfiles()

    
    
  }, []);

  console.log("profiles:", profiles);
  return (
    <DashboardProfileContainer>
      <div>
        <h1>Who's watching now?</h1>
        <DashboardProfileProfilesContainer>
          <ul>
            {profiles.map((profile, index) => {
              console.log("profile:", profile);
              return (
              <li key={index} onClick={e=>profileChosen(index)}>
                <img src={profile.avatar || "" } alt="profile pic" />
                <span>{profile.name}</span>
              </li>
            )})}
          </ul>
        </DashboardProfileProfilesContainer>
        <Link to="/profile/manage">Manage profiles</Link>
      </div>
    </DashboardProfileContainer>
  );
}
