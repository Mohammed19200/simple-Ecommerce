import React from "react";
import { useRecoilState } from "recoil";
import { $FavoriteAtom } from "../../../../atoms/FavoriteAtom";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

export default function RemoveBtnFavorite2({ id }) {
  const [cartData, setCartData] = useRecoilState($FavoriteAtom);

  function removeProduct() {
    setCartData(cartData.filter((product) => product.id !== id));
    toast.success("This product has been removed from your favorite");
  }

  return (
    <span onClick={removeProduct} className="removeinn">
      <FaHeart />
    </span>
  );
}
