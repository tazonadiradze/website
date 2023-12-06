import React from "react";
import "./header.component.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import Cart from "../cart/cart.component";
import { AuthComponent } from "../auth/auth.component";
import { loginOpenFunc } from "../cart/cart-slice";
import { useSelector } from "react-redux";
import { showPersonalInfo } from "../auth/auth";
import { signOutFunc } from "../auth/auth";

export default function Header() {
  const isShowPersonalTrue = useSelector((state) => state.auth.showPersonal);
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const showLogIn = () => {
    dispatch(loginOpenFunc());
  };

  const showPersonalPage = () => {
    dispatch(showPersonalInfo());
  };

  const signOut = () => {
    dispatch(signOutFunc());
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="homePage">Amazon</div>
      </Link>

      {isAuthenticated ? (
        <div onClick={showPersonalPage} className="auth-login">
          my wall
        </div>
      ) : (
        <button className="auth-login" onClick={showLogIn}>
          log in
        </button>
      )}

      <div className="cart-header">
        <Cart />
      </div>

      <AuthComponent />

      {isShowPersonalTrue && (
        <div className="mainInfoDiv">
          {
            <div className="info ">
              hello {<button onClick={signOut}>sign Out</button>}
            </div>
          }
        </div>
      )}
    </div>
  );
}
