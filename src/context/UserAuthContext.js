import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider);
  }
  const twitterSignIn = () => {
    const twitterAuthProvider = new TwitterAuthProvider();
    return signInWithPopup(auth, twitterAuthProvider);
  };
  const MicrosoftSignIn = async () => {
    const provider = new OAuthProvider("microsoft.com");
    provider.setCustomParameters({
      prompt: "consent",
      tenant: "546567d4-ed37-4f2c-9363-73a006bba787",
    });

    try {
      return signInWithPopup(auth, provider);
      // const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      // const user = result.user;
      // return user;
    } catch (error) {
      // Handle Errors here.
      console.error("Error during Microsoft sign in", error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        facebookSignIn,
        twitterSignIn,
        MicrosoftSignIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
