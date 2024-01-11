import { jwtDecode } from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState({});
  const profile = useRef(localStorage.getItem('profileId'))


  useEffect(() => {
    if(!localStorage.getItem('token')) { // check if there isn't token
      if (window.location.href.includes('access_token')) {
        localStorage.setItem('token', window.location.href.split('access_token=')[1])
        navigate('/dashboard')
      }else{
        navigate('/login')
      }
    }else{
      const token = localStorage.getItem('token')
      const decoded = jwtDecode(token)
      setData(decoded)

      if(!profile.current && !window.location.href.includes("profile") ){
        navigate('/dashboard/profile')
      }else{
        navigate('/dashboard/home')
      }

    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {JSON.stringify(data)}
    </div>
  );
};
