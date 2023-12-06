import React from "react";
import "./cart.component.css";
import { useDispatch } from "react-redux";

import {
  incrementQuantity,
  closeDivHandler,
  removeFromCart,
  showDivHandler,
} from "./cart-slice";
import { useSelector } from "react-redux";

export default function Cart() {
  const showDiv = useSelector((state) => state.cart.showDiv);
  const data = useSelector((state) => state.cart.cart);
  const totalPrice = data.reduce(
    (total, each) => total + each.price * each.quantity,
    0
  );

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const incrementFunc = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const cartHandler = () => {
    dispatch(showDivHandler());
  };

  const closeDiv = () => {
    dispatch(closeDivHandler());
  };

  return (
    <div>
      <div onClick={cartHandler} className="cart">
        cart
      </div>
      <div
        className={`overlay ${showDiv ? "active" : ""}`}
        onClick={closeDiv}
      ></div>
      {showDiv && (
        <div className="cart-inside">
          CART
          <hr />
          {data.map((each, i) => (
            <div key={i} className="div">
              <img className="cart-image" src={each.image} alt={each.name} />
              <div className="product-details">
                <div className="products">{each.name}</div>
                <div className="products">${each.price}</div>
                <div className="button" onClick={() => removeHandler(each.id)}>
                  -
                </div>
                <div className="quantity">{each.quantity}</div>
                <div className="button" onClick={() => incrementFunc(each.id)}>
                  +
                </div>
              </div>
            </div>
          ))}
          <button onClick={closeDiv}>close</button>
          <div className="total-price"> Total Price ${totalPrice}</div>
        </div>
      )}
    </div>
  );
}
