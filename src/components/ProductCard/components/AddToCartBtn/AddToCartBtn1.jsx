import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";
import './AddToCartBtn.css'
import { authData } from "../../../../atoms/authAtom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";
export default function AddToCartBtn1({ product }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [auth] = useRecoilState(authData);
  let navigate = useNavigate();

  function addToCart() {
    if (!auth.isAuth) {
      navigate("/login");
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      toast.success('This product Added To Cart Successfuly')
    }
  }

  return (
    <button onClick={addToCart} className="  addtoocartbtnnnSingleProduct" ><FaCartPlus /></button>
  );
}
