import React from "react";
import "./heroNav.scss";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="nav-top">
      <div className="logo">
        <Link to={"/"}>
          <span>seven wireless</span>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li className="cart-icon">
            <Link to={"/cart"}>
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>About</li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/news"}>News</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
