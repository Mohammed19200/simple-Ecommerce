import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductsSection.css'
import WOW from 'wowjs';

export default function ProductsSection({ title, products }) {

  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
  }, [])

  return (
    <div className="ProductsSection">
      <h3 className="h3ProductsSection animate__animated animate__flash animate__slow">{title}</h3>
      <div>
        <Swiper breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 25 },
          540: { slidesPerView: 2, spaceBetween: 10 },
          580: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1440: { slidesPerView: 4, spaceBetween: 15 },
        }}>
          {products.map((product) => {
            return (
              <SwiperSlide className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
