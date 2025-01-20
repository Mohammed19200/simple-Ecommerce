import React from "react";
import './CartItemcheckout.css'
export default function CartItemcheckout({ product }) {
  return (
    <tr className="cart-productttt1 col-12">
      <td>
        <div className=" col-8 ">
          <div className="cart-productttt1div1">
          <h5 className="h1Cartitemdivv col-12">Product Name : {product.title}</h5>
          <span className="quantityy col-12">Count : {product.quantity} Items</span>
          </div>
        </div>
      </td>

      <td>
        <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-start col-2">
          <span className="spanCartitemdiv">${product.price}</span>
        </div>
      </td>
    </tr>
  );
}
