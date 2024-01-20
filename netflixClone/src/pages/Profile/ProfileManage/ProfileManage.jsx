import { Link, useNavigate } from "react-router-dom";
import { DashboardProfileContainer, DashboardProfileProfilesContainer } from "./ProfileManageStyledComponents";
import { useEffect, useState } from "react";
import { doc, getDoc, where } from "firebase/firestore";
import { getRegisters } from "../../../functions/firebaseFunctions/firebaseFunctions";
import db from "../../../configs/firebase";


export default function ProfileManage() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  // if there is not a token, redirect to login
  


  function profileChosen(index) {
    localStorage.setItem("profileIndexId",parseInt(index+1));
    navigate("/dashboard/home");
  }

  useEffect(() => {
    if(!localStorage.getItem("loginData")) navigate("/login");

    // get from firestore the data of the current user and profiles
    const {sub} = JSON.parse(localStorage.getItem("loginData"));
    // get from firestore the data of the current user
    getRegisters(db, "usersCollection", where("sub", "==", sub)).then(async(usersFound) => {
      const {profiles} = usersFound[0];
      // for each profile, get the data of that profile
      const promises = profiles.map(async (profileId) => {
        const docRef = doc(db, "profilesCollection",profileId );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const dataToReturn = {
            ...docSnap.data(),
            id: docSnap.id
          };
          return dataToReturn;
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

      
    });

  }, []);

  function createProfile() {
    navigate("/profile/create");
  }
  function editProfile(id) {
    navigate(`/profile/edit/${id}`);
  }
  function done() {
    navigate("/profile");
  }
  

  return (
    <DashboardProfileContainer>
      <div>
        <h1>Manage profiles:</h1>
        <DashboardProfileProfilesContainer>
          <ul>
            {profiles.map((profile, index) => (
              <li key={index} onClick={() => editProfile(profile.id)}>

                <div>
                  <img src={profile.avatar} alt="" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" data-name="Pencil" ><path fillRule="evenodd" clipRule="evenodd" d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z" fill="currentColor" ></path> </svg>
                </div>
                <span>{profile.name}</span>
              </li>
            ))}
            {
              profiles.length < 5 && (
                <li onClick={createProfile}>
                  <div>
                    <img className="white" src="https://icon-library.com/images/add-icon-png/add-icon-png-27.jpg" alt="" />
                  </div>
                  <span>Add Profile</span>
                </li>
              )
            }
          </ul>
        </DashboardProfileProfilesContainer>
        <button onClick={done}>done</button>
      </div>
    </DashboardProfileContainer>
  );
}
