import React from "react";
import { useRecoilState } from "recoil";
import { $FavoriteAtom } from "../../../atoms/FavoriteAtom";
import Favoriteitem from "../CartItem/Favoriteitem";

export default function FavoriteList() {
  const [favoriteData] = useRecoilState($FavoriteAtom);

  return (
    <table className="cart col-12">
      <tbody>
        {favoriteData.map((product) => {
          return <Favoriteitem product={product} />;
        })}
      </tbody>
    </table>
  );
}
