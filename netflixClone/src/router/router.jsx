import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from '../App.jsx'
import Login from '../pages/Login/Login.jsx'
import Dashboard from '../pages/Dashboard/Dashboard.jsx'
import DashboardProfile from "../pages/Dashboard/DashboardProfile/DashboardProfile.jsx";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/dashboard/profile",
    element: <DashboardProfile/>,
  },
  {
    path: "/dashboard/home",
    element: <DashboardHome/>,
  },
]);


export default router;