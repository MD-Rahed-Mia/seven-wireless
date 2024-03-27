import React from 'react'

export default function CartItem({ cartItem }) {
  return (
    <tr>
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
        <button>-</button>
        <p>{cartItem.quantity}</p>
        <button>+</button>
      </td>
      <td>${cartItem["product"]["price"] * cartItem.quantity}</td>
    </tr>
  )
}
