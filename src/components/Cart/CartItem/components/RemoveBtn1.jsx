import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";
import { useNavigate } from "react-router-dom";
import { authData } from "../../../../atoms/authAtom";
import { toast } from "react-toastify";

export default function RemoveBtn1({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [auth] = useRecoilState(authData);
  let navigate = useNavigate();

  function removeProduct() {
    if (!auth.isAuth) {
      navigate("/login");
    } else {
      setCartData(cartData.filter((product) => product.id !== id));
      toast.success("This product has been removed from your Cart");
    }
  }

  return (
    <span className="remove-button-cart" onClick={removeProduct}>
      Remove
    </span>
  );
}
