import "./Categories.css";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  let navigate = useNavigate();
  return (
    <div className="col-12 thebiggestdivvategoriy">
      <div className="biiigestddivs col-12">
        <h1 className="col-12 h1catigory">Categories</h1>
        <div className="Smartphones col-10 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/Smartphones");
            }}
            className="categoriybutton"
          >
            Smartphones
          </button>{" "}
        </div>
        <div className="sunglasses col-10 col-md-5 col-lg-3">
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
        <div className="Motorcycle col-10 col-md-5 col-lg-3">
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
        <div className="lighting col-10 col-md-5 col-lg-3">
          {" "}
          <button
            onClick={() => {
              navigate("/lighting");
            }}
            className="categoriybutton"
          >
            Lighting
          </button>{" "}
        </div>
        <div className="fragrances col-10 col-md-5 col-lg-3">
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
        <div className="laptops col-10 col-md-5 col-lg-3">
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
      </div>
      <div className="col-12 secanddivcategories">
        <button
          onClick={() => {
            navigate("/allCategories");
          }}
          className="buttonallcategoriy "
        >
          All Categories
        </button>
      </div>
    </div>
  );
}
