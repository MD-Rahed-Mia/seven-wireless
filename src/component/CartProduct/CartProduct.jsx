import React from 'react'
import './CartProduct.scss';

import { RiDeleteBack2Line } from "react-icons/ri";

export default function CartProduct() {
  return (
    <div className='cart-product-info'>


      <div className="cart-product-item">
        <table>
          <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </thead>
          <tbody>
            <tr>
              <td className='cart-product-details'>
                <div className='remove-cart-product'><RiDeleteBack2Line /></div>
                <div>

                  <img src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/Mask-group-1-1-400x400.jpg" alt="" />
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </td>
              <td className='cart-table-price'>$305</td>
              <td className='cart-table-quantity'>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </td>
              <td>$305</td>
            </tr>
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
