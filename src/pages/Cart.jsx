import React from "react";
import Layout from "../Layout/Layout";
import "./../style/Cart.scss";
import PageTitle from "../component/PageTitle/PageTitle";
import CartProduct from "../component/CartProduct/CartProduct";
import CartCheckout from "../component/CartProduct/CartCheckout";

export default function Cart() {
  return (
    <Layout>
      <PageTitle title={"Cart"} />
      <div className="cart">
        <CartProduct />
        <CartCheckout />
      </div>
    </Layout>
  );
}
