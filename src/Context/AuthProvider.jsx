import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const UserContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user 
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with provider
    const providerSignIn = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // update user profile
    const userProfileUpdate = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }    

    // log out user 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // load current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        
        return () => unsubscribe()
    },[])
    const authInfo = {
        createUser,
        setLoading,
        loading,
        user,
        logOutUser,
        logInUser,
        userProfileUpdate,
        providerSignIn,
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;