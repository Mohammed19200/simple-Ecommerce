import React from 'react'
import { useRecoilState } from 'recoil';
import { $cartAtom } from '../../../atoms/cartAtom';
export default function CartFootercheckout() {
  const [cartData] = useRecoilState($cartAtom);

  const cartTotal = cartData.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0)

  const cartCount = cartData.reduce((acc, product) => {
    return acc + (product.quantity);
  }, 0)

  return (
    <div className="price-conttt col-12" >
      <div className="">
        <div className="price-contt111 col-12">
          <div>
         
            <div><span className="items-num">Count : {cartCount}</span> Items</div>
          </div>
          <div className="total-price fs-3">Total : ${cartTotal}</div>
        </div>
      </div>
    </div>
  )
}
