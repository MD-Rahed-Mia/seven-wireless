import React, { useContext, useEffect, useState } from 'react'
import './CartCheckout.scss';
import CartContext from '../../Context/CartContext';


export default function CartCheckout() {


  const { cart } = useContext(CartContext);

  const [cost, setCost] = useState(0);
  const [shipping, setShipping] = useState(80);

  useEffect(() => {

    let totalCost = 0;
    cart.map((item) => {
      totalCost += (item["product"]["price"] * item.quantity)
      setCost(totalCost);
    })

  }, [cart])


  return (
    <div className='cart-checkout'>
      <p className='cart-checkout-subtitle'>Cart Total</p>
      <p className='cart-checkout-subtotal'>${cost}</p>
      <hr />
      <p className='cart-checkout-subtitle'>Shipping</p>
      <p>Shipping : ${shipping}</p>
      <p className='cart-checkout-address'>Change Address</p>
      <hr />
      <p className='cart-checkout-subtitle'>Total</p>
      <h1>${cost + shipping}</h1>
      <button className='cart-checkout-btn'>proceed to checkout</button>
    </div>
  )
}
