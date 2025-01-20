import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ProductsFilters from "../../components/ProductsFilters/ProductsFilters";
import './Shop.css'
import WOW from 'wowjs';
import ProductCard1 from "../../components/ProductCard/ProductCard1.jsx";
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
  }, [])

  useEffect(() => {
    setIsLoading(true);
    axios("http://localhost:3004/products?" + filterQuery).then((data) => {
      setProducts(data.data);
      setIsLoading(false);
    });
  }, [filterQuery]);

  return (
    <div className="col-12 wow animate__animated animate__fadeInLeft animate__slow " data-wow-delay="0.1s">
      <ProductsFilters setFilterQuery={setFilterQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="col-12 cardshopp">
          {products.map((product) => {
            return (
              <div className="col-11 col-sm-9 col-md-5 col-lg-3" key={`products-shop-${product.id}`}>
                <ProductCard1 product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
