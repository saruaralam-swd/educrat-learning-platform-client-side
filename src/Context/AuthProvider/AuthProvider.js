import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  // provider login
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  };

  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // update user profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  // login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };


  // log out
  const logOut = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('on state user ', currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, []);

  const authInfo = { user, loading, theme, setTheme, providerLogin, createUser, updateUserProfile, signIn, logOut, };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;