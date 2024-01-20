import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from '../App.jsx'
import Login from '../pages/Login/Login.jsx'
import Dashboard from '../pages/Dashboard/Dashboard.jsx'
import Profile from "../pages/Profile/Profile.jsx";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome.jsx";
import MyListPage from "../pages/MyListPage/MyListPage.jsx";
import ProfileManage from "../pages/Profile/ProfileManage/ProfileManage.jsx";
import ProfileCreate from "../pages/Profile/ProfileCreateAndEdit/ProfileCreate.jsx";
import ProfileEdit from "../pages/Profile/ProfileCreateAndEdit/ProfileEdit.jsx";



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
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/profile/manage",
    element: <ProfileManage/>,
  },
  {
    path: "/profile/create",
    element: <ProfileCreate/>,
  },
  {
    path: "/profile/edit/:id",
    element: <ProfileEdit/>,
  },
  {
    path: "/dashboard/home",
    element: <DashboardHome/>,
  },
  {
    path: "/mylist",
    element: <MyListPage/>,
  },
]);


export default router;