import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const AdminRouter = ({ children }) => {
  const { user, logOutUser } = useContext(UserContext);
  // check user is admin or normal user
  const [isAdmin, loading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }
  toast.error("Only Admin can access this route")
  logOutUser()
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRouter;
