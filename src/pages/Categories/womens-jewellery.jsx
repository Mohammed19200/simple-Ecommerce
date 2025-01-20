import React, { useEffect, useState } from 'react'
import axios from "axios";
import WOW from 'wowjs';
import ProductCard1 from '../../components/ProductCard/ProductCard1';
export default function Womensjewellery() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios("http://localhost:3004/products?category=womens-dresses").then((data) => {
            setProducts(data.data);
        });
    }, [])
    useEffect(() => {
        new WOW.WOW({
              live: true
            }).init();
          }, [])
    return (
        
        <div className='py-5 wow animate__animated animate__fadeInLeft animate__slow' data-wow-delay="0.1s">
            <div className="col-12 cardshopp">
                {products.map((product) => {
                    return (
                        <div className=" col-11 col-md-5 col-lg-3" key={`products-shop-${product.id}`}>
                            <ProductCard1 product={product} />
                        </div>
                    );
                })}
            </div>

        </div>
    )
}
