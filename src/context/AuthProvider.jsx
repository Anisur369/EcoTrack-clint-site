import { AuthContext } from "./AuthContext";
import auth from "../services/firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail as firebaseResetPassword,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL,
      });
      setUser(result.user);
      setLoading(false);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(false);
    setUser(null);
    return signOut(auth);
  };
  const resetPassword = (email) => {
    setLoading(true);
    return firebaseResetPassword(auth, email);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(true);
        setUser(currentUser);
        setLoading(false);
      } else {
        console.log("no user");
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signOutUser,
    user,
    loading,
    signInWithGoogle,
    sendPasswordResetEmail: resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
