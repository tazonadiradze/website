import React from "react";
import "./signIn.css"; // Make sure to import the correct CSS file name
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="signin-container">
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
}
