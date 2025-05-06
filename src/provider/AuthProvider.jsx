import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext=createContext()
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
  
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const provider = new GoogleAuthProvider

    const googleLogIn=()=>{
       return signInWithPopup(auth,provider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authData={
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    googleLogIn,
    loading,
    setLoading,
    updateUser,
    }
    return <AuthContext value={authData}>
     {children}
    </AuthContext>
    
};

export default AuthProvider;