import { useEffect, useRef, useState } from "react";
import { StyledDashboardNav } from "./DashboardNavStyledComponents";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { deleteField, doc, updateDoc } from "firebase/firestore";
import db from "../../../configs/firebase";

export default function DashboardNav({profileData}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginData"))
    ? jwtDecode(JSON.parse(localStorage.getItem("loginData")).id_token)
    : {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loginData")) navigate("/login");


    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: 'Home', path: '/dashboard/home', isLink: true },
    { name: 'Series', path: '#', isLink: false },
    { name: 'Movies', path: '#', isLink: false },
    { name: 'My list', path: '/mylist', isLink: true },
  ];
  
  function logout() {
    localStorage.removeItem("loginData");
    localStorage.removeItem("userData");
    localStorage.removeItem("profileData");
    navigate("/");    
  }

  function unsuscribe() {
    
    const baseUrl = "https://api.sandbox.paypal.com";
    // from the userData in localStorage, get the subscriptionInfo 
    const userData = JSON.parse(localStorage.getItem("userData"));
    const id = userData.subscriptionInfo?.subscriptionID;
    
    // if doesn't have a subscription, return
    if (!id) {
      alert("You don't have a subscription!");
      return;
    };

    // cancel the subscription in paypal
    fetch(baseUrl + `/v1/billing/subscriptions/${id}/cancel`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
        "Content-Type": "application/json",
        "body": {
          "reason": prompt("Why do you want to cancel your subscription?")
        }
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Subscription canceled");
        // remove the subscriptionInfo from the userData in localStorage
        delete userData.subscriptionInfo;
        localStorage.setItem("userData", JSON.stringify(userData));

        // remove the subscriptionInfo from the firebase database
        updateDoc(
          doc(db, "usersCollection", userData.id),
          {
          subscriptionInfo: deleteField(),
          }
        );
        

        if (confirm("do you want to see other plans?")) {
          navigate("/plans");
        }
      });

    
  }

  return(
    <StyledDashboardNav $pixelsScrolled={scrollPosition} >

      <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo"/>
      <details className="small-menu">
          <summary> <span>Explore ▼</span></summary>  
          <span className="small-triangle">▲</span>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={item.name === 'Home' ? 'active' : ''}>
                {item.isLink ? (
                  <Link to={item.path}>{item.name}</Link>
                ) : (
                  <a href={item.path}>{item.name}</a>
                )}
              </li>
            ))}  
          </ul>
      </details>
      <ul>
      {navItems.map((item, index) => (
        <li key={index} className={item.name === 'Home' ? 'active' : ''}>
          {item.isLink ? (
            <Link to={item.path}>{item.name}</Link>
          ) : (
            <a href={item.path}>{item.name}</a>
          )}
        </li>
      ))}
      </ul>
      <div className="profile">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon ltr-4z3qvp e1svuwfo1" data-name="MagnifyingGlass" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Bell" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg>
        <details>
          <summary>
            <img src={profileData?.avatar} alt="Profile"/>
          </summary>
          <ul>
            <h1>Options</h1>
            <Link to="/profile">Profiles</Link>
            <Link to="/plans">Plans</Link>
            <button onClick={unsuscribe} className="unsuscribe-btn">Unsuscribe</button>
            <button onClick={logout} className="log-out-btn">Log out</button>

          </ul>
        </details>
      </div>
    </StyledDashboardNav>
  )
};
