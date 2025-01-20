import Carousel from "../../components/Carousel/Carousel";
import React, { useEffect, useState } from "react";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import Categories from "../Categories/Categories";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import "./Home.css";
import Herosection from "../../components/Herosection/Herosection";
import Herosectiontimer from "../../components/Herosectiontimer/Herosectiontimer";
import SUBSCRIBECOM from "../../components/SUBSCRIBECOM/SUBSCRIBECOM";
import Proccessservice from "../../components/Proccessservice/Proccessservice";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios("http://localhost:3004/products").then((data) => {
      setProducts(data.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;
  return (
    <div className="col-12">
      <div
        className="col-12 wow animate__animated animate__fadeInDown animate__slow"
        data-wow-delay="0.1s"
      >
        <Herosection />
      </div>

      <div
        className=" wow animate__animated animate__fadeInLeft animate__slow col-12 "
        data-wow-delay="0.1s"
      >
        <Categories />
      </div>

      <div
        className=" wow animate__animated animate__fadeInRight animate__slow col-11 m-auto "
        data-wow-delay="0.2s"
      >
        <ProductsSection
          title="Today's hot deals"
          products={products.slice(0, 10)}
        />
      </div>

      <div
        className=" wow animate__animated animate__fadeInLeft animate__slow col-11 m-auto "
        data-wow-delay="0.2s"
      >
        <ProductsSection
          title="Special Offer Items"
          products={products.slice(10, 20)}
        />
      </div>

      <div
        className=" wow animate__animated animate__fadeInRight animate__slow col-11 m-auto "
        data-wow-delay="0.2s"
      >
        <ProductsSection
          title="New Products"
          products={products.slice(75, 85)}
        />
      </div>

      <div
        className=" wow animate__animated animate__fadeInLeft animate__slow col-12 m-auto "
        data-wow-delay="0.2s"
      >
        <TestimonialSlider />
      </div>

      <div
        className="col-12 wow animate__animated animate__fadeInRight animate__slow"
        data-wow-delay="0.2s"
      >
        <Proccessservice />
      </div>

      <div
        className="col-12 wow animate__animated animate__fadeInLeft animate__slow "
        data-wow-delay="0.2s"
      >
        <Herosectiontimer />
      </div>

      <div
        className="wow animate__animated animate__fadeInRight animate__slow"
        data-wow-delay="0.2s"
      >
        <SUBSCRIBECOM />
      </div>
    </div>
  );
}
