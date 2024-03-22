import React from "react";
import Layout from "../Layout/Layout";
import "./../style/Cart.scss";
import PageTitle from "../component/PageTitle/PageTitle";

export default function Cart() {
  return (
    <Layout>
      <PageTitle title={"Cart"} />
      <div className="cart">
        <h1>Cart item</h1>
      </div>
    </Layout>
  );
}
