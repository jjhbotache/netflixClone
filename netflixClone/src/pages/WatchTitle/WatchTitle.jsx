import { useEffect, useState } from "react";
import { WatchTitleStyledContainer } from "./WatchTitleStyledComponets";
import { Link, useNavigate } from "react-router-dom";
import getAuthToken from "../../functions/paypalFunctions/getAuthToken";

export default function WatchTitle() {
  const [authorized, setAuthorized] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    // if the user doesn't have susbscription, redirect to plans
    if(!userData?.subscriptionInfo) {
      dealWithNoSuscriber();
    }else{
    const {subscriptionInfo} = userData;
      

      // test the subscriptionInfo
      const test = async () => {
      fetch(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionInfo.subscriptionID}`,{
        "headers":{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${await getAuthToken()}`
        }
      })

      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.status === "ACTIVE"){
          setAuthorized(true);
        }
      }
      ).catch(err => {
        console.log(err);
        setAuthorized(false);
      })
      };
      test();
    }
  },[]);

  useEffect(() => {
    if(authorized === false){
      dealWithNoSuscriber();
    }else if(authorized === true){
      console.log("authorized");
    }

    
  }
  , [authorized]);

  function dealWithNoSuscriber() {
    setTimeout(() => {
    if (confirm("Ups, you don't have a plan, Do you want to subscribe?")) {
      navigate("/plans");
    } else {
      navigate("/dashboard/home");
    }
    }, 1000);
  }
  return (
    <WatchTitleStyledContainer>
      <Link to={"/dashboard/home"}><button className="back">
        <i className="fi fi-rr-arrow-left"></i>
      </button></Link>
      <button className="report-flag">
        <i className="fi fi-rs-flag"></i>
      </button>

      <div className="bottom-menu">
        <div className="progress-bar"/>
        <div className="controls">
          <div className="main-controls">
            <i className="fi fi-sr-play"></i>
            <i className="fi fi-sr-rewind"></i>
            <i className="fi fi-sr-forward"></i>
            <i className="fi fi-sr-volume"></i>
          </div>
          <div className="title">a serie that you choose</div>
          <div className="secondary-controls">
            <i className="fi fi-sr-step-forward"></i>
            <i className="fi fi-tr-window-restore"></i>
            <i className="fi fi-rr-comment-alt"></i>
            <i className="fi fi-rr-tachometer-fast"></i>
            <i className="fi fi-bs-expand"></i>
          </div>
        </div>
      </div>
    </WatchTitleStyledContainer>
  );
};
