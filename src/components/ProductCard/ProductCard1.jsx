import React from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { $cartAtom } from "../../atoms/cartAtom";
import { useRecoilState } from "recoil";
import AddToFavoriteBtn from "./components/AddToCartBtn/AddtoFavoriteBtn";
import { $FavoriteAtom } from "../../atoms/FavoriteAtom";
import { useNavigate } from "react-router-dom";
import RemoveBtnFavorite2 from "../Cart/CartItem/components/RemoveBtnFavorite2";
import IncrementBtn1 from "../Cart/CartItem/components/IncrementBtnFavorite";
import RemoveBtn22 from '../Cart/CartItem/components/RemoveBtn22';
import AddToCartBtn1 from "./components/AddToCartBtn/AddToCartBtn1";

export default function ProductCard1({ product }) {
  const [cartData] = useRecoilState($cartAtom);
  const [FavoriteData] = useRecoilState($FavoriteAtom);
  const isInCart = cartData.find((ele) => ele.id === product.id);
  const isInFavorite = FavoriteData.find((elem) => elem.id === product.id);
  let navigate = useNavigate();
  function SingleProduct() {navigate(`/product/${product.id}`);}
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.thumbnail}
        className="product__card__img cardelproductcard"
        onClick={SingleProduct}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="cardelproductcard" onClick={SingleProduct} >
          <Link className="text-decoration-none colorlinklink" to={`/product/${product.id}`}>{product.title.split(" ").splice(0, 2).join(" ")}</Link>
        </Card.Title>
        <div>
          <Card.Text onClick={SingleProduct} className="cardelproductcard">${product.price}</Card.Text>

          <div className="twoobuttonaddto col-12">
            {isInCart ? (
              <div className="">
                <button className="addtocartbtnnb">
                  <div className="incrdecrstyles">
                    <IncrementBtn1 id={product.id} />
                    <RemoveBtn22 id={product.id}/>
                  </div>
                </button>
              </div>
            ) : (
              <AddToCartBtn1 product={product} />
            )}
            {isInFavorite ? (
              <button className="addtoFavoritebtn"><RemoveBtnFavorite2 id={product.id} /></button>
            ) : (
              <AddToFavoriteBtn product={product} />
            )}

          </div>
        </div>
      </Card.Body>
    </Card>
  );
}