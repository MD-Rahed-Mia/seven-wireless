import React, { useContext, useEffect, useState } from "react";
import "./OurProduct.scss";
import OurProductCard from "./OurProductCard";
import productData from "../../product/product";


export default function OurProduct() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(productData);
  }, [])


  return (
    <div className="our-product">
      <div className="our-product-title">
        <h1>Our Top Product</h1>
        <p>All the premium headphones here...</p>
      </div>

      <div className="our-product-cards">
        {
          product && product.map((product, index) => {

            if (index >= 1) {
              return "";
            }

            return <OurProductCard product={product} key={index} />
          })
        }
        {/* <OurProductCard />
        <OurProductCard /> */}
      </div>

      <div className="load-more">
        <button>Load more..</button>
      </div>
    </div>
  );
}
