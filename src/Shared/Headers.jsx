import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/AuthProvider";

const Headers = () => {
  const { user, logOutUser, setLoading } = useContext(UserContext);

  // log out handler
  const handleLogOut = () => {
    logOutUser()
    .then(result => {
        // user log out 
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        setLoading(false)
    })
  };
  // nav items
  const navItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      {user?.uid ? (
        <>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={handleLogOut}>Log Out</button>
        </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <nav>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctor's Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
