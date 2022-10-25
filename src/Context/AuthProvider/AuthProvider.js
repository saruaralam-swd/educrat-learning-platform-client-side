import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // provider login
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  };

  // email password login
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('on state user ', currentUser)
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  }, []);

  const authInfo = { user, providerLogin, createUser, logOut, };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;