import React from "react";
import { useRecoilState } from "recoil";
import { $FavoriteAtom } from "../../../../atoms/FavoriteAtom";
import { useNavigate } from "react-router-dom";
import { authData } from "../../../../atoms/authAtom";
import { toast } from "react-toastify";

export default function RemoveBtnFavorite({ id }) {
  const [cartData, setCartData] = useRecoilState($FavoriteAtom);
  const [auth] = useRecoilState(authData);
  let navigate = useNavigate();
  function removeProduct() {
    if (!auth.isAuth) {
      navigate("/login");
    } else {
      setCartData(cartData.filter((product) => product.id !== id));
      toast.success("This product has been removed from your favorite");
    }
  }

  return (
    <span className="remove-button-cart" onClick={removeProduct}>
      Remove
    </span>
  );
}
