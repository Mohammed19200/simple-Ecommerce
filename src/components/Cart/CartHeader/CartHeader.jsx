import React from 'react'
import RemoveAllBtn from './components/RemoveAllBtn'

export default function CartHeader() {

  return (
    <div className="cart-headerr " >
      <h5 className="ShoppingCartstyle">Shopping Cart</h5>
      <RemoveAllBtn />
    </div>
  )
}
