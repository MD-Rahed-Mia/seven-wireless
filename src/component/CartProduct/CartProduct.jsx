import React from 'react'
import './CartProduct.scss';

import { RiDeleteBack2Line } from "react-icons/ri";

export default function CartProduct() {
  return (
    <div className='cart-product-info'>
      <table>
        <thead>
          <tr>
            <td style={{ width: "50%" }}>Product</td>
            <td style={{ width: "10%" }}>Price</td>
            <td style={{ width: "15%" }}>Quantity</td>
            <td style={{ width: "15%" }}>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='cart-pr-information'>
              <RiDeleteBack2Line className='cart-pr-delete' />
              <img src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/Mask-group-10.jpg" alt="" />
              <p>Et de promene sur femme trésor pleure-t-elle. Encadré.</p>
            </td>
            <td>$390</td>
            <td className='cart-pr-quantity'>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </td>
            <td>$390</td>
          </tr>
          <tr>
            <td className='cart-pr-information'>
              <RiDeleteBack2Line className='cart-pr-delete' />
              <img src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/Mask-group-10.jpg" alt="" />
              <p>Et de promene sur femme trésor pleure-t-elle. Encadré.</p>
            </td>
            <td>$390</td>
            <td className='cart-pr-quantity'>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </td>
            <td>$390</td>
          </tr>
        </tbody>
      </table>

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
