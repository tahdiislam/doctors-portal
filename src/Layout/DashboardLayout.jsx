import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Headers from "../Shared/Headers";

const DashboardLayout = () => {
  const { user } = useContext(UserContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Headers />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin && (
              <li>
                <Link to="/dashboard/allusers">All users</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
