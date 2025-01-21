import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authData } from "../../atoms/authAtom";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./NB.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Nav() {
  const [auth] = useRecoilState(authData);

  return (
    <div
      className="col-12 navbootstrapstyle "
      data-wow-delay="0.8s"
    >
      <div className="col-12 navbootstyle11">
        <div className="col-12 navbootstyle1">
          <h1>Trade Shop</h1>
          <div className="logoutandfavoriteandcartstyle">
            <div className="cartandfavoritestylediv">
              <div>
                <a className="nav-link">
                  <Link className="text-decoration-none colorlinks" to="/cart">
                    <div className="iconproductcarrdddddiv cartandcount">
                      <FaShoppingCart id="iconproductcarrdddd" />
                    </div>
                  </Link>
                </a>
              </div>
              <div>
                <a className="nav-link">
                  <Link
                    className="text-decoration-none colorlinks"
                    to="/Favorite"
                  >
                    <div className="iconproductcarrdddddiv cartandcount">
                      <FaRegHeart id="iconproductcarrdddd" />
                    </div>
                  </Link>
                </a>
              </div>
            </div>

            {auth.isAuth ? (
              <div className="nav2111">
                <div className="iconproductcarrdddddiv cartandcount">
                  <LogoutButton id="iconproductcarrdddd" />
                </div>
              </div>
            ) : (
              <div className="navs">
                <button className="btnnn1111">
                  <Link id="links" to="/login" className="text-decoration-none">
                    <div className="iconproductcarrdddddiv cartandcount">
                      <IoPersonSharp id="iconproductcarrdddd" />
                    </div>
                  </Link>{" "}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
