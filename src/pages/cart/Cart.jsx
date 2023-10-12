import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsXLg } from "react-icons/bs";
import {
  removeProduct,
  decreaceCart,
  addCart,
  clearCart,
} from "../../features/cartSlice";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  const totalProduct = cartData.reduce((a, c) => a + c.price * c.count, 0);

  return (
    <>
      <div className="containercart">
        <div>
          {cartData.length === 0 ? (
            <div className="cartempty ">cart is empty</div>
          ) : (
            cartData.map((item) => {
              return (
                <div key={item.id} className="cartitem">
                  <button
                    className="btnremoveproduct "
                    onClick={() => dispatch(removeProduct(item))}
                  >
                    <BsXLg size={11} />
                  </button>
                  <div className="flexproduct">
                    <figure>
                      <img src={item.img} className=" imagecart" />
                    </figure>
                    <div className="boldtextcart">
                      <p className="textcart">{item.text}</p>
                      <p className="flextotal">
                        <span>total : </span>
                        {item.price}$
                      </p>
                      <p className="pricecart">
                        <span>price: </span>
                        {item.price * item.count}$
                      </p>
                      <div className="flexcountercart">
                        <button
                          className="counterdown"
                          onClick={() => dispatch(decreaceCart(item))}
                        >
                          -
                        </button>
                        <div className="flexcounter">
                          <span> count: </span>
                          <span>{item.count}</span>
                        </div>
                        <button
                          className="counterup"
                          onClick={() => dispatch(addCart(item))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {cartData.length > 0 ? (
            <div className="totalproduct ">
              <p>{`total: ${totalProduct}$`}</p>
              <button
                className="clearcart"
                onClick={() => dispatch(clearCart())}
              >
                remove all
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cart;
