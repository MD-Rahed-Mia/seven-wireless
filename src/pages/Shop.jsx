import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import OurProductCard from "../component/OurProduct/OurProductCard";
import "./../style/Shop.scss";
import PageTitle from "../component/PageTitle/PageTitle";
import productData from "../product/product";

export default function Shop() {


  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(productData);
  }, [])


  return (
    <Layout>
      <div className="shop-page">
        <PageTitle title={"Shop"} />
        <div className="shop-product-cards">{
          product && product.map((product, index) => {
            return <OurProductCard product={product} key={index} />
          })
        }
        </div>
      </div>
    </Layout>
  );
}
