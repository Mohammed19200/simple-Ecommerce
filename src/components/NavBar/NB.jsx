import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authData } from "../../atoms/authAtom";
import "./NB.css";

export default function NB() {
  const [auth] = useRecoilState(authData);
  return (
    <div
      className="col-12 NBstylebackground wow animate__animated animate__fadeInDown animate__slow"
      data-wow-delay="0.8s"
    >
      <div class="container">
        <header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link">
                <Link className="text-decoration-none colorlinks12" to="/">
                  Home
                </Link>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle colorlinks12"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu dropdownstyle">
                <li className="col-12 lishopstyle">
                  <a className="nav-link">
                    <Link
                      className="text-decoration-none colorlinks"
                      to="/shop"
                    >
                      Shop
                    </Link>
                  </a>
                </li>

                <div className="col-12 navbarstyleshop">
                  <div>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/Smartphones"
                        >
                          Smartphones
                        </Link>{" "}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/sunglasses"
                        >
                          Sunglasses
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/motorcycle"
                        >
                          Motorcycle
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        {" "}
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/lighting"
                        >
                          Lighting
                        </Link>{" "}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/fragrances"
                        >
                          Fragrances
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/laptops"
                        >
                          Laptops
                        </Link>{" "}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/tops"
                        >
                          Tops
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/automotive"
                        >
                          Automotive
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/womensdresses"
                        >
                          Womens- dresses
                        </Link>
                      </a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/homedecoration"
                        >
                          Home-decoration
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/groceries"
                        >
                          Groceries
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/skincare"
                        >
                          Skincare
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/womensshoes"
                        >
                          Womens-shoes
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/womensbags"
                        >
                          Womens-bags
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/womenswatches"
                        >
                          Womens-watches
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/mensshirts"
                        >
                          Mens-shirts
                        </Link>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle colorlinks12"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Page
              </a>
              <ul className="dropdown-menu dropdownstyle">
                <li>
                  <a className="nav-link">
                    <Link
                      className="text-decoration-none colorlinks"
                      to="/allCategories"
                    >
                      Categories
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <Link
                      className="text-decoration-none colorlinks"
                      to="/Aboutus"
                    >
                      About Us
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <Link
                      className="text-decoration-none colorlinks"
                      to="Contactus"
                    >
                      Contact Us
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <Link className="text-decoration-none colorlinks" to="/faq">
                      Faq
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    <Link className="text-decoration-none colorlinks" to="*">
                      Error404
                    </Link>
                  </a>
                </li>

                {!auth.isAuth ? (
                  <div>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/login"
                        >
                          Login
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="/register"
                        >
                          Register
                        </Link>
                      </a>
                    </li>
                  </div>
                ) : (
                  <div>
                    <li>
                      <a className="nav-link">
                        <Link
                          className="text-decoration-none colorlinks"
                          to="order"
                        >
                          Order
                        </Link>
                      </a>
                    </li>
                  </div>
                )}
              </ul>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
