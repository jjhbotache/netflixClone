import { Link, useNavigate } from "react-router-dom";
import { DashboardProfileContainer, DashboardProfileProfilesContainer } from "./ProfileStyledComponents";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../configs/firebase";

export default function Profile() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([
    // {
    //   image: "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145",
    //   name: "Profile 1"
    // },
  ]);
  // if there is not a token, redirect to login
  


  function profileChosen(index) {
    localStorage.setItem("profileId",parseInt(index+1));
    navigate("/dashboard/home");
  }

  useEffect(() => {
    if(!localStorage.getItem("loginData")) navigate("/login");

    // ask to the Local Storage for the profiles of the current user
    const {profiles,id} = JSON.parse(localStorage.getItem("userData"));
    if (!profiles) {
      // try calling directly to firebase
      getDoc(doc(db, "usersCollection", id)).then((document) => {
        if (document.exists()) {
          // console.log("Document data:", document.data());
          const profiles = document.data().profiles;
          localStorage.setItem("profiles", JSON.stringify(profiles));

          // look for the profile data in the profiles collection
          const promises = [];
          profiles.forEach(profile => {
            promises.push(getDoc(doc(db, "profilesCollection", profile)))
          });
          Promise.all(promises).then((documents) => {
            const profiles = [];
            documents.forEach(document => {
              profiles.push(document.data());
            });
            setProfiles(profiles);
          })
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          navigate("/dashboard");
          return;
        }
      });


    }
    
  }, []);

  console.log("profiles:", profiles);
  return (
    <DashboardProfileContainer>
      <div>
        <h1>Who's watching now?</h1>
        <DashboardProfileProfilesContainer>
          <ul>
            {profiles.map((profile, index) => (
              <li key={index} onClick={e=>profileChosen(index)}>
                <img src={profile.avatar} alt="" />
                <span>{profile.name}</span>
              </li>
            ))}
          </ul>
        </DashboardProfileProfilesContainer>
        <Link to="/profile/manage">Manage profiles</Link>
      </div>
    </DashboardProfileContainer>
  );
}
