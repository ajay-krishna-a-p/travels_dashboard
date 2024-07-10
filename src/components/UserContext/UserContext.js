/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, db } from '../Config/Config';
import { doc, onSnapshot } from 'firebase/firestore';

const UserContext = createContext();
const auth = getAuth(app);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
     
        checkAccess(user.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const checkAccess = async (uid) => {

   
 try {

      const docRef = doc(db, 'admin_users', "LIPUtt8BT1UAJfQBHp5AaBa7jVI2");
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setPermission(docSnap.data());

        }
      });

      // Return the unsubscribe function to clean up the listener
      return () => unsubscribe();
    } catch (error) {
      console.error('Error checking document:', error);
      throw error;
    }


  };

  return (
    <UserContext.Provider value={{ user, permission }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
