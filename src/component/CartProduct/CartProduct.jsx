import React, { useContext, useEffect, useState } from 'react'
import './CartProduct.scss';

import { RiDeleteBack2Line } from "react-icons/ri";
import CartContext from '../../Context/CartContext';



export default function CartProduct() {

  const [product, setProduct] = useState([]);

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(cart)
  }, [cart])


  //increase quantity of cart
  function addQuantity(cartItem) {

    const updateCart = cart.map((item) => {
      if (item["product"]["id"] == cartItem["product"]["id"]) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item;
      }
    })
    localStorage.setItem("cart", JSON.stringify(updateCart));
    setCart(updateCart);
  }



  //decrease quantity of cart
  function decQuantity(cartItem) {

    const updateCart = cart.map((item) => {
      if (item["product"]["id"] == cartItem["product"]["id"]) {

        if (item["quantity"] == 1) {
          return { ...item, quantity: item.quantity }
        }

        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item;
      }
    })
    //update new quantity to cart
    localStorage.setItem("cart", JSON.stringify(updateCart));
    setCart(updateCart);
  }


  return (
    <div className='cart-product-info'>


      <div className="cart-product-item">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th></tr>
          </thead>
          <tbody>

            {
              product && product.map((cartItem, index) => {
                return (<tr key={index}>
                  <td className='cart-product-details'>
                    <div className='remove-cart-product'><RiDeleteBack2Line /></div>
                    <div>

                      <img src={cartItem["product"]["image"]} alt="" />
                    </div>
                    <div>
                      <p>{cartItem["product"]["title"]}</p>
                    </div>
                  </td>
                  <td className='cart-table-price'>${cartItem["product"]["price"]}</td>
                  <td className='cart-table-quantity'>
                    <button onClick={() => decQuantity(cartItem)}>-</button>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => addQuantity(cartItem)}>+</button>
                  </td>
                  <td>${cartItem["product"]["price"] * cartItem.quantity}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>

      <div className="cart-coupon-item">
        <div>
          <input type="text" name="coupon" id="coupon" placeholder='coupon code' />
          <button>apply coupon</button>
        </div>
        <div>
          <button>refresh cart</button>
        </div>
      </div>
    </div>
  )
}
