import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";

export default function IncrementBtn1({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function increaseQuantity() {
    let obj = cartData.find((product) => product.id === id);
    const newObj = { ...obj, quantity: obj.quantity + 1 };
    const newCartData = [...cartData];
    newCartData.splice(newCartData.indexOf(obj), 1, newObj);
    toast.success(<span>This product <span className="colorsppanstyle">increased 1</span></span>)
  }

  return (
    <div>

    <span
      className="decreaseQuantitystyle"
      onClick={increaseQuantity}
    >
      <FaCartPlus style={{fontSize:'1.3rem'}} />

    </span>
    </div>
  );
}
