import React from "react";

export default function OurProductCard() {
  return (
    <div className="our-product-card">
      <div className="product-card-img">
        <img
          src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/Mask-group-20.jpg"
          alt=""
        />
      </div>
      <div className="product-card-details">
        <h3>Seven Wireless Headphones</h3>
        <p className="product-card-price">$250</p>
        <p className="product-card-desc">
          Curabitur a est nec diam cursus rutrum rhoncus ac ligula. Vivamus
          mollis justo eget scelerisque placerat.
        </p>
        <div className="product-card-tool">
          <div className="product-card-quantity">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div className="product-card-cart-btn">
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
