import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../atoms/cartAtom";
export default function CartCount() {
  const [cartData] = useRecoilState($cartAtom);
  const cartCount = cartData.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
  return (
    <div>
      <div>
        <span className="items-num countcartstylecolor">{cartCount}</span>
      </div>
    </div>
  );
}
