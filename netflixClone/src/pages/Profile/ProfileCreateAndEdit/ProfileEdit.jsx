import { useEffect, useState } from "react";
import { ProfileCreateContainer } from "./ProfileCreateStyledComponents";
import InfiniteSlider from "../../../components/ProfileComponents/InfiniteSlider/InfiniteSlider";
import db from "../../../configs/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc, where } from "firebase/firestore";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getRegisters } from "../../../functions/firebaseFunctions/firebaseFunctions";

export default function ProfileEdit() {
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    avatar: "",
  });
  const navigate = useNavigate();
  const {id: profileId} = useParams();
  const [firstIndex, setFirstIndex] = useState(undefined);

  let imgs = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZEX3QGo9CY-QYp5coxwoY4sG7IipZ4-b_xDtkllL2fSjefwKNz1-pDbVdSLEZKpn3X-pcPquDKaei_SfQhBQG-aAKPSxnkRXNJ3.png?r=438",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWgK2iOBuSWOJ-ovJHR1fDdV-c-rgWy2Olii4sJjjceLFuXrLHAV_mPbt1Q2LGQ5v1HilXIfUxycCqSOKvHJv8y87GkXIpWUCy8J.png?r=a8d",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaeOl2mVjc2BG7twbwecrYFqzH-xeUHR0MXXlfZUhwBiL3bdqn_k49kPd6Y38yDWTWzbI6Mjkx3tsbox50V2Fymf8FvdZLHNSrT5.png?r=d4a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXrTcV6KUM7rT_zVf_3kE4nFkjtI2IcTwghlVn3IxHnH_4ZVTt3V4AKhLj6fTl9JjCZraUA2hnugtSwxWjufGgxRYRtV1D64nRQ2.png?r=a13",
  ];


  useEffect(() => {
    // first of all, get and set the profile data
    const docRef = doc(db, "profilesCollection", profileId);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const dataToReturn = {
          ...docSnap.data(),
          id: docSnap.id
        };
        setProfile(dataToReturn);

        // then, set the avatar image on the slider by
        // looking for the index of the element in the array
        // and setting that index as the firstIndex
        const index = imgs.indexOf(dataToReturn.avatar);
        setFirstIndex(index);

        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        console.log("ID: ", profileId);
      }
    });


  }, []);

  function onInfiniteSliderChange(index) {
    // console.log("index:",index);
    setProfile({...profile, avatar: imgs[index]});

  }

  async function saveProfile(e) {
    if ( profile.name === "" || profile.avatar === "") {
      alert("Please fill out all fields");
      return;
    }
    updateDoc(
      doc(db, "profilesCollection", profileId), {
      name: profile.name,
      avatar: profile.avatar,
    }).then(() => {
      console.log("Document successfully updated!");
      navigate("/profile");
    });
  }

  function deleteProfile(e) {
    // prompt("Are you sure you want to delete this profile? (yes/no)") === "yes" ? deleteProfileFromDB() : alert("Profile not deleted");
    if(!confirm("Are you sure you want to delete this profile?")) return;
    const docRef = doc(db, "profilesCollection", profileId);
    deleteDoc(docRef).then(async () => {
      console.log("Document successfully deleted!");

      // once it was deleted, delete from the profiles field of the usersCollection doc
      // fist, get all the profiles from the usersCollection doc
      // then, filter the profiles array to remove the deleted profile
      const user = await getUser();
      const profiles = user.profiles;
      console.log("profiles:", profiles);
      console.log("profileId:", profileId);
      const newProfiles = profiles.filter(profile=> profile !== profileId);
      console.log("newProfiles:", newProfiles);
        // then, update the usersCollection doc with the new profiles array
      updateDoc(
        doc(db, "usersCollection", user.id),
        {
          profiles: newProfiles,
        }
      )
      .then(() => {
        alert("Document successfully updated!");
        navigate("/profile");
      });

      

      
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  async function getUser() {
    const { sub } = JSON.parse(localStorage.getItem("userData"));
    const users = await getRegisters(db, "usersCollection", where("sub", "==", sub));
    console.log("users:", users);
    const user = users[0];
    return user;
  }
  return (
    <ProfileCreateContainer>
      <h1>Update a profile</h1>
      <hr />
      <div className="row">
        <div>
          <InfiniteSlider imgArray={imgs} onChange={i=>{onInfiniteSliderChange(i);}} firstIndex={firstIndex} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />
        </div>
      </div>
      <hr />
      <button onClick={saveProfile}>Save Profile</button>
      <button className="deleteProfileBtn" onClick={deleteProfile}>Delete profile</button>
    </ProfileCreateContainer>
  );
};
