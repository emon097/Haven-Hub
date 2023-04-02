import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,
    
  } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const Authprovider = ({children}) => {
    const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const createUsersEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const googleRegister = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
    const userInfo = {
        createUsersEmail,
        loginUser,
        updateUser,
        googleRegister,
        loading,
        logOut,
        user,
      };
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default Authprovider;