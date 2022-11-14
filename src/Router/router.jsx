import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home /> },
            { path: '/appointment', element: <Appointment /> },
            {
                path: "/login", element: <Login/>
            },
            {
                path: "/register", element: <SignUp/>
            }
        ]
    },
    {
        path: "/dashboard", element: <RequireAuth>
            <Dashboard/>
        </RequireAuth>
    }
])