import React from "react";
import { useRecoilState } from "recoil";
import { $FavoriteAtom } from "../../../../atoms/FavoriteAtom";
import { toast } from "react-toastify";

export default function RemoveAllBtnFavorite() {
  const [cartData, setCartData] = useRecoilState($FavoriteAtom);

  function removeAllProducts(){
    setCartData([]);
    toast.success("All products has been removed from your Favorite")
  }

  return <span className="remove-all-products" onClick={removeAllProducts}>Remove All</span>;
}