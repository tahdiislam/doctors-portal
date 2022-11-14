import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthProvider';

const RequireAuth = ({children}) => {
    const {user, loading} = useContext(UserContext)
    const location = useLocation()
    
    if(loading){
        return (
            <div className='h-[200px] flex justify-center items-center'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default RequireAuth;