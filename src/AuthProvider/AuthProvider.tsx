"use client"

/* eslint-disable react/prop-types */

import React, { createContext, useEffect, useState } from "react";
import { 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile,
  User,
  Auth
} from "firebase/auth";

import axios from "axios";
import auth from "@/firebase/firebase.config";

// Define the shape of the context data
interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  googleSignIn: () => Promise<any>;
  logOut: () => Promise<void>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
}

// Create context with default values
export const AuthContext = createContext<AuthContextType | null>(null);

// Auth provider props type
interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // User is of type User from firebase/auth or null
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const googleProvider = new GoogleAuthProvider();

  // Handle the case where auth might be null
  const safeAuth = (): Auth => {
    if (!auth) {
      throw new Error("Firebase Auth is not initialized");
    }
    return auth;
  };

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(safeAuth(), email, password);
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(safeAuth(), email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(safeAuth(), googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(safeAuth());
  };

  const updateUserProfile = (name: string, photo: string) => {
    const currentAuth = safeAuth();
    if (currentAuth.currentUser) {
      return updateProfile(currentAuth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    }
    // Return a rejected promise if there's no current user
    return Promise.reject(new Error("No authenticated user"));
  };

  useEffect(() => {
    // Only run this effect in the browser
    if (typeof window === 'undefined' || !auth) {
      return () => {};
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Get token and store it
        const userInfo = { email: currentUser.email };
        axios.post("/jwt", userInfo)
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          })
          .catch(err => {
            console.error("Error getting JWT token:", err);
            setLoading(false);
          });
      } else {
        // Removing the token
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []); // Remove axios from dependency array to avoid re-running on axios changes

  const authInfo: AuthContextType = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;