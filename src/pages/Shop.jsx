import React from "react";
import Layout from "../Layout/Layout";
import OurProductCard from "../component/OurProduct/OurProductCard";
import "./../style/Shop.scss";
import PageTitle from "../component/PageTitle/PageTitle";

export default function Shop() {
  return (
    <Layout>
      <div className="shop-page">
        <PageTitle title={"Shop"} />
        <div className="shop-product-cards">
          <OurProductCard />
          <OurProductCard />
        </div>
      </div>
    </Layout>
  );
}
