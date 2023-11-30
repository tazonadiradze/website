import React from "react";
import "./header.component.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { incrementQuantity } from "../cart/cart-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showDivHandler } from "../cart/cart-slice";
import { removeFromCart } from "../cart/cart-slice";
export default function Header() {
  const showDiv = useSelector((state) => state.cart.showDiv);

  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(data);
  const cartHandler = () => {
    dispatch(showDivHandler());
  };

  const incrementFunc = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const totalPrice = data.reduce(
    (total, each) => total + each.price * each.quantity,
    0
  );
  return (
    <header className="header">
      <Link to="/">
        <div className="homePage">Amazon</div>
      </Link>
      <div onClick={cartHandler} className="cart">
        cart
      </div>
      {showDiv && (
        <div className="cart-inside">
          CART
          <hr />
          {data.map((each, i) => {
            return (
              <div key={i} className="div">
                <img className="cart-image" src={each.image} />
                <div className="product-details">
                  <div className="products">{each.name}</div>
                  <div className="products">${each.price}</div>

                  <div
                    className="button"
                    onClick={() => removeHandler(each.id)}
                  >
                    -
                  </div>
                  <div className="quantity">{each.quantity}</div>
                  <div
                    className="button"
                    onClick={() => incrementFunc(each.id)}
                  >
                    +
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total-price"> Total Price ${totalPrice}</div>
        </div>
      )}
    </header>
  );
}
