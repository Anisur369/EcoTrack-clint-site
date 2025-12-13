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
import { ToastContainer, toast } from "react-toastify";

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
      toast("Account created successfully!");
      return result;
    } catch (error) {
      console.log(error);
      toast("Account creation failed...!");
    }
  };
  const signInUser = (email, password) => {
    setLoading(true);
    toast("Logging in Successfully...");
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(false);
    setUser(null);
    toast("Logging out ...");
    return signOut(auth);
  };
  const resetPassword = (email) => {
    setLoading(true);
    toast("Sending password reset email...");
    return firebaseResetPassword(auth, email);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    toast("Logging in with Google...");
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(true);
        setUser(currentUser);
        setLoading(false);
      } else {
        // console.log("no user");
        setLoading(false);
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
    ToastContainer,
    toast,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
