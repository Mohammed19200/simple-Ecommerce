import AddToCartBtn from "../../ProductCard/components/AddToCartBtn/AddToCartBtn";
import { $cartAtom } from "../../../atoms/cartAtom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import RemoveBtnFavorite1 from "./components/RemoveBtnFavorite1";
import "./Favoriteitem.css";
export default function Favoriteitem({ product }) {
  const [cartData] = useRecoilState($cartAtom);
  const isInCart = cartData.find((ele) => ele.id === product.id);

  return (
    <div className="bigFavoriteitemdiv col-12">
      <div className=" Favoriteitemdiv11 col-10 col-md-5">
        <img
          className="imgfavorite col-12 col-md-5"
          src={product.thumbnail}
          alt=""
        />

        <div className="Favoriteitemdiv1 col-12 col-md-6">
          <h1 className="h1Favoriteitemdiv1">
            <Link
              className="text-decoration-none colorlinksfavorite"
              to={`/product/${product.id}`}
            >
              {product.title}
            </Link>
          </h1>
          <span className=" spanFavoriteitemdiv1">${product.price}</span>
        </div>
      </div>

      <div className="Favoriteitemdiv2 col-10 col-md-5">
        <RemoveBtnFavorite1 id={product.id} />
        {isInCart ? null : (
          <div className="">
            <AddToCartBtn product={product} />
          </div>
        )}
      </div>
    </div>
  );
}
