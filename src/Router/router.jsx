import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctors from "../Pages/Dashboard/AddDoctors/AddDoctors";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRouter from "./AdminRouter";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/appointment", element: <Appointment /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    errorElement: <ErrorPage/>,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRouter>
            <AllUsers />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/addoctor",
        element: (
          <AdminRouter>
            <AddDoctors/>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRouter>
            <ManageDoctors/>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
            <Payment/>
        ),
        loader: ({params}) => fetch(`https://doctors-portal-server-teal.vercel.app/bookings/${params.id}`)
      },
    ],
  },
]);
