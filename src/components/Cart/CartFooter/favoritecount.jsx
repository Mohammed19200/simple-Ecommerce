import React from "react";
import { useRecoilState } from "recoil";
import { $FavoriteAtom } from "../../../atoms/FavoriteAtom";
export default function Favoritecount() {
  const [cartData] = useRecoilState($FavoriteAtom);
  const cartCount = cartData.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
  return (
    <div>
      <div>
        <span className="items-num countcartstylecolor">{cartCount}</span>
      </div>
    </div>
  );
}
