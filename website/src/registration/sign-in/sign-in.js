import React, { useState } from "react";
import SignUp from "../sign-up/sing-up";
import "./signIn.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={submitHandler} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
      <SignUp />
    </div>
  );
}
