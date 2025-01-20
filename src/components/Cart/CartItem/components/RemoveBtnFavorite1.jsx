import React from "react";
import { useRecoilState } from "recoil";
import { $FavoriteAtom } from "../../../../atoms/FavoriteAtom";
import { toast } from "react-toastify";

export default function RemoveBtnFavorite1({id}) {
  const [cartData, setCartData] = useRecoilState($FavoriteAtom);

  function removeProduct() {
    setCartData(cartData.filter(product => product.id !== id));
    toast.success("This product has been removed from your favorite")
  }

  return <span className="remove-product" onClick={removeProduct}>Remove</span>;
}