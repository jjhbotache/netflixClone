import { Link, useNavigate } from "react-router-dom";
import { DashboardProfileContainer, DashboardProfileProfilesContainer } from "./ProfileManageStyledComponents";
import { useEffect } from "react";


export default function ProfileManage() {
  const navigate = useNavigate();
  // if there is not a token, redirect to login
  

  const profiles = [
    {
      image: "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145",
      name: "Profile 1"
    },
    {
      image: "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZEX3QGo9CY-QYp5coxwoY4sG7IipZ4-b_xDtkllL2fSjefwKNz1-pDbVdSLEZKpn3X-pcPquDKaei_SfQhBQG-aAKPSxnkRXNJ3.png?r=438",
      name: "Profile 2"
    },
    {
      image: "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWgK2iOBuSWOJ-ovJHR1fDdV-c-rgWy2Olii4sJjjceLFuXrLHAV_mPbt1Q2LGQ5v1HilXIfUxycCqSOKvHJv8y87GkXIpWUCy8J.png?r=a8d",
      name: "Profile 3"
    },
    {
      image: "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaeOl2mVjc2BG7twbwecrYFqzH-xeUHR0MXXlfZUhwBiL3bdqn_k49kPd6Y38yDWTWzbI6Mjkx3tsbox50V2Fymf8FvdZLHNSrT5.png?r=d4a",
      name: "Profile 4"
    },
  ];

  function profileChosen(index) {
    localStorage.setItem("profileId",parseInt(index+1));
    navigate("/dashboard/home");
  }

  useEffect(() => {
    if(!localStorage.getItem("loginData")) navigate("/login");
  }, []);

  function createProfile() {
    alert("create profile")
    navigate("/profile/create");
  }
  function editProfile(id) {
    alert("edit profile")
  }
  function done() {
    alert("done")
  }
  

  return (
    <DashboardProfileContainer>
      <div>
        <h1>Manage profiles:</h1>
        <DashboardProfileProfilesContainer>
          <ul>
            {profiles.map((profile, index) => (
              <li key={index} onClick={() => editProfile(index)}>

                <div>
                  <img src={profile.image} alt="" />
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
