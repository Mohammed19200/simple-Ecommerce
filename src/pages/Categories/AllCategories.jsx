import { useNavigate } from "react-router-dom";
import "./Categories.css";
export default function AllCategories() {
  let navigate = useNavigate();

  return (
    <div className="biiigestddiv col-12">
      <div
        className="wow animate__animated animate__fadeInDown animate__slow col-12 biiigestddiv"
        data-wow-delay="0.1s"
      >
        <h1 className="col-12 h1catigory">All Categories</h1>
        <div className="Smartphones col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/Smartphones");
            }}
            className="categoriybutton"
          >
            Smart Phones
          </button>{" "}
        </div>
        <div className="sunglasses col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/sunglasses");
            }}
            className="categoriybutton"
          >
            Sunglasses
          </button>{" "}
        </div>
        <div className="Motorcycle col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/motorcycle");
            }}
            className="categoriybutton"
          >
            Motorcycle
          </button>{" "}
        </div>
        <div className="mens-watches col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/mens-watches");
            }}
            className="categoriybutton"
          >
            Mens Watches
          </button>{" "}
        </div>
        <div className="fragrances col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/fragrances");
            }}
            className="categoriybutton"
          >
            Fragrances
          </button>{" "}
        </div>
        <div className="laptops col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/laptops");
            }}
            className="categoriybutton"
          >
            Laptops
          </button>{" "}
        </div>
        <div className="Tops col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/tops");
            }}
            className="categoriybutton"
          >
            Tops
          </button>
        </div>
        <div className="mens-shoes col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/mens-shoes");
            }}
            className="categoriybutton"
          >
            Mens Shoes
          </button>{" "}
        </div>
        <div className="Homedecoration col-10 col-sm-5 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/homedecoration");
            }}
            className="categoriybutton"
          >
            Home-decoration
          </button>{" "}
        </div>
        <div className="Groceries col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/groceries");
            }}
            className="categoriybutton"
          >
            Groceries
          </button>{" "}
        </div>
        <div className="Skincare col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/skincare");
            }}
            className="categoriybutton"
          >
            Skincare
          </button>
        </div>
        <div className="Womensshoes col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/womensshoes");
            }}
            className="categoriybutton"
          >
            Womens-shoes
          </button>{" "}
        </div>
        <div className="womensdresses col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/womensdresses");
            }}
            className="categoriybutton"
          >
            Womens Dresses
          </button>{" "}
        </div>
        <div className="womensjewellery col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/womensjewellery");
            }}
            className="categoriybutton"
          >
            Womens Jewellery
          </button>{" "}
        </div>
        <div className="beauty col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/beauty");
            }}
            className="categoriybutton"
          >
            Beauty
          </button>
        </div>
        <div className="vehicle col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/vehicle");
            }}
            className="categoriybutton"
          >
            Vehicle
          </button>{" "}
        </div>
        <div className="Tablets col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/tablets");
            }}
            className="categoriybutton"
          >
            Tablets
          </button>{" "}
        </div>
        <div className="sports-accessories col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/sports-accessories");
            }}
            className="categoriybutton"
          >
            Sports Accessories
          </button>
        </div>
        <div className="mobile-accessories col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/mobile-accessories");
            }}
            className="categoriybutton"
          >
            Mobile Accessories
          </button>{" "}
        </div>
        <div className="kitchen-accessories col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/kitchen-accessories");
            }}
            className="categoriybutton"
          >
            Kitchen Accessories
          </button>{" "}
        </div>
        <div className="Furniture col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/furniture");
            }}
            className="categoriybutton"
          >
            Furniture
          </button>
        </div>
        <div className="Womensbags col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/womensbags");
            }}
            className="categoriybutton"
          >
            Womens-bags
          </button>{" "}
        </div>
        <div className="Womenswatches col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/womenswatches");
            }}
            className="categoriybutton"
          >
            Womens-watches
          </button>{" "}
        </div>
        <div className="Menshirts col-10 col-sm-5 col-md-5 col-lg-3 ">
          {" "}
          <button
            onClick={() => {
              navigate("/mensshirts");
            }}
            className="categoriybutton"
          >
            Mens-shirts
          </button>
        </div>
      </div>
    </div>
  );
}
