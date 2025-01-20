import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";
import { toast } from "react-toastify";

export default function RemoveAllBtn() {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function removeAllProducts(){
    setCartData([]);
    localStorage.removeItem('CartDataOrder')
    toast.success("All products has been removed from your Cart")
  }

  return <span className="remove-alll-products" onClick={removeAllProducts}>Remove All</span>;
}    

