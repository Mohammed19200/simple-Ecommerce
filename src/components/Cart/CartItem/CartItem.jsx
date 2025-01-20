import React from "react";
import IncrementBtn from "./components/IncrementBtn";
import DecrementBtn from "./components/DecrementBtn";
import RemoveBtn from "./components/RemoveBtn";
import './CartItem.css'
import { Link } from "react-router-dom";
export default function CartItem({ product }) {
  return (
    <tr className="cart-productt col-12">
      <td>
        <div className="CartItemimgh5">
          <img className="cart-product-img col-6" src={product.thumbnail} alt="" />
          <h5 className="h1Cartitemdiv col-4"><Link className="text-decoration-none colorlinklink" to={`/product/${product.id}`}>{product.title}</Link></h5>
        </div>
      </td>

      <td>
        <div className="cart-product-amount">
          <IncrementBtn id={product.id} />
          <span className="quantity">{product.quantity}</span>
          <DecrementBtn id={product.id} />
        </div>
      </td>

      <td>
        <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-start">
          <span className="spanCartitemdiv">${product.price}</span>
          <RemoveBtn id={product.id} />
        </div>
      </td>
    </tr>
  );
}
