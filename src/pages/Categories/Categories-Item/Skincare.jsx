import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard1 from "../../../components/ProductCard/ProductCard1";

export default function Skincare() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:3004/products?category=skin-care").then((data) => {
      setProducts(data.data);
    });
  }, []);

  return (
    <div
      className="py-5 wow animate__animated animate__fadeInLeft animate__slow"
      data-wow-delay="0.1s"
    >
      <div className="col-12 cardshopp">
        {products.map((product) => {
          return (
            <div
              className="col-11 col-md-5 col-lg-3"
              key={`products-shop-${product.id}`}
            >
              <ProductCard1 product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
