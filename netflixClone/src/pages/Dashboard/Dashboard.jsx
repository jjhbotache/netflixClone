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
} from "firebase/firestore";
import db from "../../configs/firebase";
import { getRegisters } from "../../functions/firebaseFunctions/firebaseFunctions";


export default function Dashboard() {
  const navigate = useNavigate()
  const profile = useRef(localStorage.getItem('profileId'))
  



  useEffect(() => {

    const loginData = JSON.parse( localStorage.getItem("loginData") );
    if(!loginData) { // check if there isn't token
      if (window.location.href.includes('access_token')) {
        const loginData = getParametersFromURL(window.location.href);
        localStorage.setItem('loginData', JSON.stringify(loginData))
        getUserInfoOrCreateItInFireCloud()
      }else{
        navigate('/login')
      }
    }else{
      getUserInfoOrCreateItInFireCloud()
    }
  }, []);


  function getUserInfoOrCreateItInFireCloud() {
    const loginData = JSON.parse( localStorage.getItem("loginData") );
    const userInfo = jwtDecode(loginData.id_token);
    // try to get the user from the firestore database and bring it's data and save it in the local storage
    // if it doesn't exist, create it
    async function process() {
      const usersFound = await getRegisters(db, "usersCollection", where("sub", "==", userInfo.sub));
  
      if (usersFound.length > 0) {
        console.log("user exists");
        console.log("bringing user data...");
        localStorage.setItem("userData", JSON.stringify(usersFound[0]));
      } else {
        const querySnapshot = await addDoc(collection(db, "usersCollection"), {
          sub: userInfo.sub,
          email: userInfo.email,
        });
        console.log(querySnapshot);
      }
    }
    process()
    .then(()=>{
      // debugger
      const token = JSON.parse(localStorage.getItem("loginData")).id_token;
      console.log(token);
      const decoded = jwtDecode(token)
  
      if(!profile.current && !window.location.href.includes("profile") ){
        navigate('/dashboard/profile')
      }else{
        navigate('/dashboard/home')
      }
    })
    .catch((err)=>{
      console.log(err);
      navigate('/login')
    })
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};



