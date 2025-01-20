import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";
import { toast } from "react-toastify";
import { IoBagRemoveOutline } from "react-icons/io5";

export default function RemoveBtn({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function removeProduct() {
    setCartData(cartData.filter((product) => product.id !== id));
    toast.success("This product has been removed from your Cart");
  }

  return (
    <span className="remove-product" onClick={removeProduct}>
      <IoBagRemoveOutline style={{ fontSize: "1.2rem" }} />
    </span>
  );
}
