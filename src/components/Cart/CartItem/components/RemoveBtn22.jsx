import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";
import { toast } from "react-toastify";
import { IoBagRemoveSharp } from "react-icons/io5";

export default function RemoveBtn22({id}) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function removeProduct() {
    setCartData(cartData.filter(product => product.id !== id));
    toast.success("The product has been removed from your cart")
  }

  return <span className="removein" onClick={removeProduct}>
    <IoBagRemoveSharp className="remove-Item-Style" style={{fontSize:'1.3rem'}} />
    </span>;
}
