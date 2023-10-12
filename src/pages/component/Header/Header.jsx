import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillBasket2Fill, BsFillHouseDoorFill } from "react-icons/bs";
import "./header.css";

const Header = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const totalCart = cartData.reduce((a, c) => a + c.count, 0);
  return (
    <>
      <nav className="nav">
        <Link to="/">
          {" "}
          <span className="home">
            <BsFillHouseDoorFill size={25} />
          </span>
        </Link>
        <Link to="/cart">
          <span className="cart ">
            <BsFillBasket2Fill size={25} />
          </span>
          <span className="totalcart">{totalCart}</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
