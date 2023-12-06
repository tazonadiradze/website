import SignIn from "../../registration/sign-in/sign-in";
import SignUp from "../../registration/sign-up/sing-up";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeDivHandler, loginCloseFunc } from "../cart/cart-slice";
import { useSelector } from "react-redux";

import "./auth.css";

export const AuthComponent = () => {
  const closeFunc = useSelector((state) => state.cart.showRegister);
  const dispatch = useDispatch();
  const [pageChange, setPageChange] = useState("login");

  const closeLogin = () => {
    dispatch(loginCloseFunc());
  };

  const changePageHandler = (string) => {
    setPageChange(string);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`modal-background ${closeFunc ? "blur" : ""}`}>
      {closeFunc && (
        <div className="login-overlay" onClick={closeLogin}>
          <div className="login" onClick={stopPropagation}>
            <h5 onClick={() => changePageHandler("login")} className="h5">
              log in
            </h5>
            <h5 onClick={() => changePageHandler("register")} className="h5">
              register
            </h5>

            {pageChange === "login" && <SignIn />}
            {pageChange === "register" && <SignUp />}
          </div>
        </div>
      )}
    </div>
  );
};
