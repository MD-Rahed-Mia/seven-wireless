import React from "react";
import "./Footer.scss";

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="email-subscription">
          <p>Newsletter</p>
          <form action="">
            <input type="email" placeholder="Email" />
            <button type="submit">sign up</button>
          </form>
          <p>
            By subscribing, you agree to our <a href="#">Terms & Conditions</a>,
            you agree to receive updates & promotions from us.
          </p>
        </div>
        <div className="footer-menu">
          <ul>
            <li>about us</li>
            <li>shop</li>
            <li>News</li>
            <li>Contact</li>
            <li>404 error page</li>
          </ul>
        </div>
        <div className="footer-social-media">
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
          <p>Join us now</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          &copy; 2023 <span>@SevenWireless</span>
        </div>
        <div>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  );
}
