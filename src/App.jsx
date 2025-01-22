import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import IsNotLoggedIn from "./components/ProtectedRoutes/IsNotLoggedIn";
import IsLoggedIn from "./components/ProtectedRoutes/IsLoggedIn";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Error404 from "./pages/Error404/Error404";
import Contactus from "./pages/Contactus/Contactus";
import Faq from "./pages/Faq/Faq";
import Aboutus from "./pages/Aboutus/Aboutus";
import AllCategories from "./pages/Categories/AllCategories";
import Categories from "./pages/Categories/Categories";
import Favorite from "./pages/Favourite/Favorite";
import CHECKOUT from "./pages/CHECKOUT/CHECKOUT";
import Profile from "./pages/Profile/Profile";
import "./App.css";
import Tops from "./pages/Categories/Categories-Item/Tops";
import WomensDresses from "./pages/Categories/Categories-Item/womens-dresses";
import MensShirts from "./pages/Categories/Categories-Item/mens-shirts";
import WomensWatches from "./pages/Categories/Categories-Item/womens-watches";
import WomensBags from "./pages/Categories/Categories-Item/womens-bags";
import WomensJewellery from "./pages/Categories/Categories-Item/womens-jewellery";
import Sunglasses from "./pages/Categories/Categories-Item/Sunglasses";
import Motorcycle from "./pages/Categories/Categories-Item/motorcycle";
import Beauty from "./pages/Categories/Categories-Item/beauty";
import HomeDecoration from "./pages/Categories/Categories-Item/home-decoration";
import Groceries from "./pages/Categories/Categories-Item/Groceries";
import Skincare from "./pages/Categories/Categories-Item/Skincare";
import Fragrances from "./pages/Categories/Categories-Item/Fragrances";
import Laptops from "./pages/Categories/Categories-Item/Laptops";
import WomensShoes from "./pages/Categories/Categories-Item/womens-shoes";
import Vehicle from "./pages/Categories/Categories-Item/vehicle";
import Tablets from "./pages/Categories/Categories-Item/tablets";
import SportsAccessories from "./pages/Categories/Categories-Item/sports-accessories";
import MobileAccessories from "./pages/Categories/Categories-Item/mobile-accessories";
import KitchenAccessories from "./pages/Categories/Categories-Item/kitchen-accessories";
import Furniture from "./pages/Categories/Categories-Item/furniture";
import MensShoes from "./pages/Categories/Categories-Item/mens-shoes";
import MensWatches from "./pages/Categories/Categories-Item/mens-watches";
import SmartPhones from "./pages/Categories/Categories-Item/Smartphones";

function App() {
  return (
    <>
      <div className="App">
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route
                  path="cart"
                  element={
                    <IsLoggedIn>
                      <Cart />
                    </IsLoggedIn>
                  }
                />
                <Route
                  path="Favorite"
                  element={
                    <IsLoggedIn>
                      <Favorite />
                    </IsLoggedIn>
                  }
                />
                <Route path="product/:id" element={<SingleProduct />} />
                <Route
                  path="login"
                  element={
                    <IsNotLoggedIn>
                      <Login />
                    </IsNotLoggedIn>
                  }
                />
                <Route
                  path="register"
                  element={
                    <IsNotLoggedIn>
                      <Register />
                    </IsNotLoggedIn>
                  }
                />
                <Route path="*" element={<Error404 />} />
                <Route path="Contactus" element={<Contactus />} />
                <Route path="faq" element={<Faq />} />
                <Route path="Aboutus" element={<Aboutus />} />
                <Route path="Smartphones" element={<SmartPhones />} />
                <Route path="tops" element={<Tops />} />
                <Route path="womensdresses" element={<WomensDresses />} />
                <Route path="mensshirts" element={<MensShirts />} />
                <Route path="womenswatches" element={<WomensWatches />} />
                <Route path="womensbags" element={<WomensBags />} />
                <Route path="womensjewellery" element={<WomensJewellery />} />
                <Route path="sunglasses" element={<Sunglasses />} />
                <Route path="motorcycle" element={<Motorcycle />} />
                <Route path="beauty" element={<Beauty />} />
                <Route path="homedecoration" element={<HomeDecoration />} />
                <Route path="groceries" element={<Groceries />} />
                <Route path="skincare" element={<Skincare />} />
                <Route path="fragrances" element={<Fragrances />} />
                <Route path="laptops" element={<Laptops />} />
                <Route path="womensshoes" element={<WomensShoes />} />
                <Route path="allCategories" element={<AllCategories />} />
                <Route path="Categories" element={<Categories />} />
                <Route path="vehicle" element={<Vehicle />} />
                <Route path="tablets" element={<Tablets />} />
                <Route
                  path="sports-accessories"
                  element={<SportsAccessories />}
                />
                <Route
                  path="mobile-accessories"
                  element={<MobileAccessories />}
                />
                <Route
                  path="kitchen-accessories"
                  element={<KitchenAccessories />}
                />
                <Route path="furniture" element={<Furniture />} />
                <Route path="mens-shoes" element={<MensShoes />} />
                <Route path="mens-watches" element={<MensWatches />} />
                <Route
                  path="checkout"
                  element={
                    <IsLoggedIn>
                      <CHECKOUT />
                    </IsLoggedIn>
                  }
                />
                <Route
                  path="order"
                  element={
                    <IsLoggedIn>
                      <Profile />
                    </IsLoggedIn>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
