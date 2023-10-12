import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../features/cartSlice";
import { cartdata } from "../../../data.js";
import "./product.css";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="parentproduct ">
        <div className="parentitem">
          {cartdata.map((item) => {
            const { id, alt, img, text, price } = item;

            return (
              <div key={id} className="itemproduct ">
                <div className="itemproductshadow">
                  <figure className="itemfigure">
                    <div className="absolutefigure"></div>
                    <img src={img} alt={alt} className="imgruonded" />
                  </figure>
                  <div className="parenttextproduct">
                    <div className="boldtext">
                      <p>{text}</p>
                      <p className="paddingprice">{price} $</p>
                    </div>
                    <button
                      className="btnproduct "
                      onClick={() => dispatch(addCart(item))}
                    >
                      add to catt
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
