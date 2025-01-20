import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";

export default function IncrementBtn({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function increaseQuantity() {
    let obj = cartData.find((product) => product.id === id);
    const newObj = { ...obj, quantity: obj.quantity + 1 };
    const newCartData = [...cartData];
    newCartData.splice(newCartData.indexOf(obj), 1, newObj);
    setCartData(newCartData);
  }

  return (
    <span
      className="change-amount change-amount-inc"
      onClick={increaseQuantity}
    >
      +
    </span>
  );
}
