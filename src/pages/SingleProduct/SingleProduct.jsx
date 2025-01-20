import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './SingleProduct.css'
import { useRecoilState } from "recoil";
import { $cartAtom } from '../../atoms/cartAtom'
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import { $FavoriteAtom } from "../../atoms/FavoriteAtom";
import AddToFavoriteBtn from "../../components/ProductCard/components/AddToCartBtn/AddtoFavoriteBtn";
import SUBSCRIBE from "../CHECKOUT/Delivery/SUBSCRIBEdiv";
import WOW from 'wowjs';
import IncrementBtn1 from "../../components/Cart/CartItem/components/IncrementBtnFavorite";
import RemoveBtn22 from "../../components/Cart/CartItem/components/RemoveBtn22";
import RemoveBtnFavorite2 from './../../components/Cart/CartItem/components/RemoveBtnFavorite2';
import { authData } from "../../atoms/authAtom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";

export default function SingleProduct() {
  const [auth] = useRecoilState(authData);
  let navigate = useNavigate();

  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
  }, [])

  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  const isInCart = cartData.find((ele) => ele.id === product.id);
  // 
  const [FavoriteData] = useRecoilState($FavoriteAtom);
  const isInFavorite = FavoriteData.find((elem) => elem.id === product.id);
  // 
  useEffect(() => {
    axios(`http://localhost:3004/products/${id}`).then((data) =>
      setProduct(data.data)
    );
  }, [id]);
  // 
  function addToCart() {
    if (!auth.isAuth) {
      navigate("/login");
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      toast.success('This product Added To Cart Successfuly')
    }
  }
  // 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:3004/products").then((data) => {
      setProducts(data.data);
    });
  }, []);
  // 
  return (
    <div className="bigestsinglepagge col-12">

      <div className="bigestdiv col-12 wow animate__animated animate__fadeInDown animate__slow" data-wow-delay="0.2s">
        <div className="divsinglepageimg">
          <img className="imgbigestdiv" src={product.thumbnail} />
        </div>

        <div className="secandbigestdiv col-10 col-md-5">
          <h1 className="h1bigestdiv">{product.title}</h1>
          <h2 className="h2bigestdiv">{product.price}$</h2>
          <h3 className="h3bigestdiv">{product.description}</h3>
          <h5 className="h5bigestdiv"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i> {product.rating}</h5>

          <div className="twobuttonadd col-12">
            {isInCart ? (
              <div className="">
                <button className="addtocartbtnnb">
                  <div className="incrdecrstyles">
                    <IncrementBtn1 id={product.id} />
                    <RemoveBtn22 id={product.id} />
                  </div>
                </button>
              </div>
            ) : (
              <button onClick={addToCart} className="addtoocartbtnnnSingleProduct" ><FaCartPlus />
</button>
            )}
            {isInFavorite ? (
              <button className="addtoFavoritebtn"><RemoveBtnFavorite2 id={product.id} /></button>
            ) : (
              <AddToFavoriteBtn product={product} />
            )}
          </div>
          <h3 className="h33bigestdiv">Brand : <span className="h333bigestdiv">{product.brand}</span></h3>
          <h3 className="h33bigestdiv">Categories : <span className="h333bigestdiv">{product.category}</span></h3>
        </div>
      </div>

      <div className="col-11 sllliderstyle wow animate__animated animate__fadeInLeft animate__slow" data-wow-delay="0.2s">
        <ProductsSection
          title="You May Also Like"
          products={products.slice(0, 20)}
        />
      </div>

      <div className="SUBSCRIBEdiv1 wow animate__animated animate__fadeInRight animate__slow" data-wow-delay="0.2s">
        <div className="SUBSCRIBEdiv col-12">
          <h1 className="SUBSCRIBEh1 col-11 col-lg-4">Sign Up For Newsletter & Get 20% Off</h1>
          <div className="SUBSCRIBEform col-11 col-lg-5"><SUBSCRIBE /></div>
        </div>
      </div>

    </div>
  );
}
