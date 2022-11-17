import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthProvider';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const {user, loading} = useContext(UserContext)
    const location = useLocation()
    
    if(loading){
        return <Loading/>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default RequireAuth;