import React from 'react'
import './CartCheckout.scss';


export default function CartCheckout() {
  return (
    <div className='cart-checkout'>
      <p className='cart-checkout-subtitle'>Cart Total</p>
      <p className='cart-checkout-subtotal'>$390</p>
      <hr />
      <p className='cart-checkout-subtitle'>Shipping</p>
      <p>Free Shipping</p>
      <p className='cart-checkout-address'>Change Address</p>
      <hr />
      <p className='cart-checkout-subtitle'>Total</p>
      <h1>$390</h1>
      <button className='cart-checkout-btn'>proceed to checkout</button>
    </div>
  )
}
