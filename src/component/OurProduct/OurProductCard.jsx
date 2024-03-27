import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";

export default function OurProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //increase quantity of product
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  //decrease quantity of product
  function decreaseQuantity() {
    if (quantity == 1) {
      return false;
    }
    setQuantity(quantity - 1);
  }


  //varify existing cart item
  function varifyCart(id) {

    const foundItem = cart.find(item => item.product.id === id);
    return !!foundItem;

  }

  //add product to cart
  function addCart(id) {

    if (varifyCart(id)) {
      console.log("already is in cart");
    }
    else {
      setCart((prevCart) => {
        return [...prevCart, { product, quantity }]
      });

    }
  }

  return (
    <div className="our-product-card">
      <div className="product-card-img">
        <img
          src={product?.image}
          alt=""
        />
      </div>
      <div className="product-card-details">
        <h3>{product?.title}</h3>
        <p className="product-card-price">${product?.price}</p>
        <p className="product-card-desc">
          {product?.description}
        </p>
        <div className="product-card-tool">
          <div className="product-card-quantity">
            <button onClick={decreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div className="product-card-cart-btn">
            <button onClick={() => addCart(product?.id)}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
