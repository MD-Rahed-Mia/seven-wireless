import React from "react";
import "./heroNav.scss";
import { Link } from "react-router-dom";

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
          <li><Link to={"/cart"}>Cart</Link></li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>About</li>
          <li>contact</li>
          <li>news</li>
        </ul>
      </div>
    </div>
  );
}
