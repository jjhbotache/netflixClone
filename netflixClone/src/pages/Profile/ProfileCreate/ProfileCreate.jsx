import { useState } from "react";
import { ProfileCreateContainer } from "./ProfileCreateStyledComponents";
import InfiniteSlider from "../../../components/ProfileComponents/InfiniteSlider/InfiniteSlider";
import db from "../../../configs/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProfileCreate() {
  const [newProfileInfo, setNewProfileInfo] = useState({
    name: "",
    avatar: "",
  });
  const navigate = useNavigate();

  const imgs = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZEX3QGo9CY-QYp5coxwoY4sG7IipZ4-b_xDtkllL2fSjefwKNz1-pDbVdSLEZKpn3X-pcPquDKaei_SfQhBQG-aAKPSxnkRXNJ3.png?r=438",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWgK2iOBuSWOJ-ovJHR1fDdV-c-rgWy2Olii4sJjjceLFuXrLHAV_mPbt1Q2LGQ5v1HilXIfUxycCqSOKvHJv8y87GkXIpWUCy8J.png?r=a8d",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaeOl2mVjc2BG7twbwecrYFqzH-xeUHR0MXXlfZUhwBiL3bdqn_k49kPd6Y38yDWTWzbI6Mjkx3tsbox50V2Fymf8FvdZLHNSrT5.png?r=d4a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXrTcV6KUM7rT_zVf_3kE4nFkjtI2IcTwghlVn3IxHnH_4ZVTt3V4AKhLj6fTl9JjCZraUA2hnugtSwxWjufGgxRYRtV1D64nRQ2.png?r=a13",
  ];

  function onInfiniteSliderChange(index) {
    console.log("index:",index);
    setNewProfileInfo({...newProfileInfo, avatar: imgs[index]});

  }

  function createProfile(e) {
    if ( newProfileInfo.name === "" || newProfileInfo.avatar === "") {
      alert("Please fill out all fields");
      return;
    }
    console.log("newProfileInfo:", newProfileInfo);
    addDoc(collection(db,"profilesCollection"), newProfileInfo).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // get the id of the current user and set a new profile for that user
      const {id,profiles} = JSON.parse(localStorage.getItem("userData"));


      const newProfiles = [docRef.id]
      if (!!profiles) {
        newProfiles.push(...profiles);
      }
      
      updateDoc(
        doc(db, "usersCollection", id),
        {
        profiles: newProfiles
        }
      ).then(() => {
        console.log("Document successfully updated!");
        localStorage.setItem("profiles", JSON.stringify(profiles));        
      })
      navigate("/profile");
    })
  }

  return (
    <ProfileCreateContainer>
      <h1>Create a profile</h1>
      <hr />
      <div className="row">
        <div>
          <InfiniteSlider imgArray={imgs} onChange={i=>{onInfiniteSliderChange(i);}} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={newProfileInfo.name}
            onChange={(e) =>
              setNewProfileInfo({ ...newProfileInfo, name: e.target.value })
            }
          />
        </div>
      </div>
      <hr />
      <button onClick={createProfile}>Create Profile</button>
    </ProfileCreateContainer>
  );
};
