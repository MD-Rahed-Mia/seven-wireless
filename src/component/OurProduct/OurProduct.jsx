import React from "react";
import "./OurProduct.scss";
import OurProductCard from "./OurProductCard";

export default function OurProduct() {
  return (
    <div className="our-product">
      <div className="our-product-title">
        <h1>Our Top Product</h1>
        <p>All the premium headphones here...</p>
      </div>

      <div className="our-product-cards">
        <OurProductCard />
        <OurProductCard />
        <OurProductCard />
      </div>

      <div className="load-more">
        <button>Load more..</button>
      </div>
    </div>
  );
}
