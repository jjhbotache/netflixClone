import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState({});


  useEffect(() => {
    if(!localStorage.getItem('token')) {
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
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {JSON.stringify(data)}
    </div>
  );
};
