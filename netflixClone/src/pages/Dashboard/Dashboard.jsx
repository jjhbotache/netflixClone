import { jwtDecode } from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import getParametersFromURL from "../../functions/simpleHelpers/getParametersFromURL";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import db from "../../configs/firebase";
import { getRegisters } from "../../functions/firebaseFunctions/firebaseFunctions";


export default function Dashboard() {
  const navigate = useNavigate()
  const profile = useRef(localStorage.getItem('profileIndexId'))
  



  useEffect(() => {

    const loginData = JSON.parse( localStorage.getItem("loginData") );
    if(!loginData) { // check if there isn't token
      if (window.location.href.includes('access_token')) {
        const loginData = getParametersFromURL(window.location.href);
        localStorage.setItem('loginData', JSON.stringify(loginData))

        getUserInfoOrCreateItInFireCloud(loginData)
      }else{
        navigate('/login')
      }
    }else{
      getUserInfoOrCreateItInFireCloud(loginData)
    }
  }, []);


  async function getUserInfoOrCreateItInFireCloud(loginData) {
    const userInfo = jwtDecode(loginData.id_token);
    console.log("userInfo:", userInfo);
    // try to get the user from the firestore database and bring it's data and save it in the local storage
    // if it doesn't exist, create it
    const querySnapshot = await getDocs(
      query(
        collection(db, "usersCollection"),
        where("sub", "==", userInfo.sub)
      )
    )
    const usersFound = querySnapshot.docs.map((doc) => doc.data());

    
    console.log("usersFound:", usersFound);
    if (usersFound.length > 0) {
      const userInfo = usersFound[0];
      console.log("user exists");
      console.log("bringing user data...");
      localStorage.setItem("userData", JSON.stringify(
        {
          ...userInfo,
          id: querySnapshot.docs[0].id
        }
      ));
    } else {
      // create user
      const querySnapshot = await addDoc(collection(db, "usersCollection"), {
        sub: userInfo.sub,
        email: userInfo.email,
      });
      console.log(querySnapshot);
      localStorage.setItem("userData", JSON.stringify(
        {
          ...userInfo,
          id: querySnapshot.id
        }
      ));
      alert("user created, welcome!");
    }
    const token = JSON.parse(localStorage.getItem("loginData")).id_token;
    console.log(token);
    const decoded = jwtDecode(token)

    if(!profile.current && !window.location.href.includes("profile") ){
      navigate('/profile')
    }else{
      navigate('/dashboard/home')
    }
    navigate('/login')
  }1

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};



