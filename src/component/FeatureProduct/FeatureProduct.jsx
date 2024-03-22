import React from "react";
import "./FeatureProduct.scss";

import { FiBatteryCharging } from "react-icons/fi";
import { MdNoiseControlOff } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { SlLike } from "react-icons/sl";

export default function FeatureProduct() {
  return (
    <div className="feature-product">
      <div className="feature-product-top">
        <div className="feature-img">
          <img
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/Mask-group-1-1-1024x1024.jpg"
            alt=""
          />
        </div>
        <div className="feature-product-details">
          <h1>Seven Wireless Headphones</h1>
          <h3>$350</h3>

          <ul>
            <li>Carrying Case</li>
            <li>Seven wireless headphones</li>
            <li>Quick start guide</li>
            <li>USB Charging Cable</li>
          </ul>

          <button>Buy online</button>
        </div>
      </div>
      <div className="feature-product-bottom">
        <div>
          <FiBatteryCharging className="feature-pr-bt-icon" />
          <span>48h battery life</span>
        </div>
        <div>
          <MdNoiseControlOff className="feature-pr-bt-icon" />
          <span>active noise cancelling </span>
        </div>
        <div>
          <CiMobile3 className="feature-pr-bt-icon" />
          <span>Compatible with Apple & Android</span>
        </div>
        <div>
          <SlLike className="feature-pr-bt-icon" />
          <span>3 years worldwide warranty</span>
        </div>
      </div>
    </div>
  );
}
