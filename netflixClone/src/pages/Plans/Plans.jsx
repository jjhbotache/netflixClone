import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { PlansContainer } from "./PlansStyledComponents";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../../configs/firebase";


export default function Plans() {
  const navigate  = useNavigate();
  useEffect(() => {
    // if there is no userData in localStorage, redirect to login
    if (!localStorage.getItem("userData")) navigate("/login");
    // try to get subscription info from firebase
    const getDocument = async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const docRef = doc(db, "usersCollection", userData.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.subscriptionInfo) {
          // if subscription info exists, redirect to dashboard
          // write the subscription info in localStorage in the userData object
          localStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, subscriptionInfo: data.subscriptionInfo })
          );
          alert("You already have a subscription");
          navigate("/dashboard/home");
        }
      }
    };
    getDocument();
  }, [])
  function approvedSubscription(data,actions) {
    console.log("subscription approved");
    const userData = JSON.parse(localStorage.getItem("userData"));
    // save the info in the firebase database
    updateDoc(doc(db, "usersCollection", userData.id), {
      subscriptionInfo: data
    });
    console.log("subscription info saved in firebase");
    // save the info in localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...userData, subscriptionInfo: data })
    );
    navigate("/dashboard/home");
  }
  const clientId = 'AYjXcqcsgPF6yBvapCMyUbnQM1kyLUTzHOlqyqmRMex7fiOwU2L-GNDJnmygNx5uwQer5F4q7yRqAWkL';
  const planIdBasic = 'P-5LH26868MP886054MMWX6PUQ';
  const planIdStandard = 'P-57S03548CV488084UMWYAYQQ';
  const planIdPremium = 'P-6XY68561X3021793MMWYAZMI';
  return(
    <PlansContainer>
      <div className="title-section">
      <h1>¡Choose your plan!</h1>
      </div>
      <h1 className="title-on-small-screens">¡Choose your plan!</h1>
      <div className="plans">
        <div className="plan">
          {/* price */}
          <h2>Basic</h2>
          <h2>$9.99</h2>
          <p>720p</p>
          <p>1 screen</p>
          <p>Mobile and tablet</p>
          <p>Cancel anytime</p>
          <PayPalScriptProvider options={{ 'client-id': clientId,vault:true }}>
          <PayPalButtons 
            style={{
              shape: 'rect',
              color: 'white',
              layout: 'vertical',
              label: 'subscribe'
            }}
            createSubscription={function(data, actions) {
              
              return actions.subscription.create({
                /* Creates the subscription */
                plan_id: planIdBasic
              });
            }}
            onApprove={approvedSubscription}
            onError={function(err) {
              console.log(err);
              alert("Error, try again later");
            }}
          />
          </PayPalScriptProvider> 
        </div>
        <div className="plan">
          <h2>Standard</h2>
          <h2>$13.99</h2>
          <p>1080p</p>
          <p>2 screens</p>
          <p>Mobile and tablet</p>
          <p>Cancel anytime</p>
          <PayPalScriptProvider options={{ 'client-id': clientId,vault:true }}>
          <PayPalButtons 
            style={{
              shape: 'rect',
              color: 'white',
              layout: 'vertical',
              label: 'subscribe'
            }}
            createSubscription={function(data, actions) {
              return actions.subscription.create({
                /* Creates the subscription */
                plan_id: planIdStandard
              });
            }}
            onApprove={approvedSubscription}
          />
          </PayPalScriptProvider>
        </div>
        <div className="plan">
          <h2>Premium</h2>
          <h2>$16.99</h2>
          <p>4K+HDR</p>
          <p>4 screens</p>
          <p>Mobile and tablet</p>
          <p>Cancel anytime</p>
          <PayPalScriptProvider options={{ 'client-id': clientId,vault:true }}>
          <PayPalButtons 
            style={{
              shape: 'rect',
              color: 'white',
              layout: 'vertical',
              label: 'subscribe'
            }}
            createSubscription={function(data, actions) {
              return actions.subscription.create({
                /* Creates the subscription */
                plan_id: planIdPremium
              });
            }}
            onApprove={approvedSubscription}
          />
          </PayPalScriptProvider>
        </div>
        
      </div>
    </PlansContainer>
  )

  
};



