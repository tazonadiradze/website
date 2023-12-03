import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3EUrsaCKLEl9MCV0RiCmL2sjp_TlbMCw",
  authDomain: "website-d9584.firebaseapp.com",
  projectId: "website-d9584",
  storageBucket: "website-d9584.appspot.com",
  messagingSenderId: "991896371875",
  appId: "1:991896371875:web:71175b31805668dff87516",
  measurementId: "G-CP7SRWFGWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef, "userDocRef");

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot, "userSnapshot ");
  console.log(userSnapshot.exists(), "userSnapshot ");
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userDocRef;
};
