import React, { useEffect, useState } from "react";
import "./signIn.css";
import { useDispatch, useSelector } from "react-redux";
import { signInFunc } from "../../features/auth/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { loginCloseFunc } from "../../features/cart/cart-slice";
import { showPersonalInfo } from "../../features/auth/auth";
console.log("render");

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignIn() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
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
      await signInWithEmailAndPassword(auth, email, password);

      // localStorage.setItem("auth", JSON.stringify(showPersonalInfo === true));

      dispatch(signInFunc());
      console.log("i am faster ! ");
      dispatch(loginCloseFunc());
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   const storedAuthStatus = localStorage.getItem("auth");
  //   if (storedAuthStatus === "true") {
  //     dispatch(signInFunc());
  //     console.log("i am faster");
  //   }
  // }, [dispatch]);

  return (
    <div>
      <div className="signIn-container">
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
              required
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
              required
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
