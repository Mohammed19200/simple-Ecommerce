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
import Smartphones from "./pages/Categories/smartphones";
import Tops from "./pages/Categories/tops";
import Womensdresses from "./pages/Categories/womens-jewellery";
import Mensshirts from "./pages/Categories/mens-shirts";
import Womenswatches from "./pages/Categories/womens-watches";
import Womensbags from "./pages/Categories/womens-bags";
import Womensjewellery from "./pages/Categories/womens-jewellery";
import Sunglasses from "./pages/Categories/sunglasses";
import Automotive from "./pages/Categories/automotive";
import Motorcycle from "./pages/Categories/motorcycle";
import Lighting from "./pages/Categories/lighting";
import Homedecoration from "./pages/Categories/home-decoration";
import Groceries from "./pages/Categories/groceries";
import Skincare from "./pages/Categories/skincare";
import Fragrances from "./pages/Categories/fragrances";
import Laptops from "./pages/Categories/laptops";
import Womensshoes from "./pages/Categories/womens-shoes";
import AllCategories from "./pages/Categories/AllCategories";
import Categories from "./pages/Categories/Categories";
import Favorite from "./pages/Favourite/Favorite";
import CHECKOUT from "./pages/CHECKOUT/CHECKOUT";
import Profile from "./pages/Profile/Profile";
import './App.css'

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
              <Route
                path="*"
                element={
                  <Error404 />
                }
              />
              <Route
                path="Contactus"
                element={
                  <Contactus />
                }
              />
              <Route
                path="faq"
                element={
                  <Faq />
                }
              />
              <Route
                path="Aboutus"
                element={
                  <Aboutus />
                }
              />

              <Route
                path="Smartphones"
                element={
                  <Smartphones />
                }
              />
              <Route
                path="tops"
                element={
                  <Tops />
                }
              />
              <Route
                path="womensdresses"
                element={
                  <Womensdresses />
                }
              />
              <Route
                path="mensshirts"
                element={
                  <Mensshirts />
                }
              />
              <Route
                path="womenswatches"
                element={
                  <Womenswatches />
                }
              />
              <Route
                path="womensbags"
                element={
                  <Womensbags />
                }
              />
              <Route
                path="womensjewellery"
                element={
                  <Womensjewellery />
                }
              />
              <Route
                path="sunglasses"
                element={
                  <Sunglasses />
                }
              />
              <Route
                path="automotive"
                element={
                  <Automotive />
                }
              />
              <Route
                path="motorcycle"
                element={
                  <Motorcycle />
                }
              />
              <Route
                path="lighting"
                element={
                  <Lighting />
                }
              />
              <Route
                path="homedecoration"
                element={
                  <Homedecoration />
                }
              />
              <Route
                path="groceries"
                element={
                  <Groceries />
                }
              />
              <Route
                path="skincare"
                element={
                  <Skincare />
                }
              />
              <Route
                path="fragrances"
                element={
                  <Fragrances />
                }
              />
              <Route
                path="laptops"
                element={
                  <Laptops />
                }
              />
              <Route
                path="womensshoes"
                element={
                  <Womensshoes />
                }
              />
              <Route
                path="allCategories"
                element={
                  <AllCategories />
                }
              />
              <Route
                path="Categories"
                element={
                  <Categories />
                }
              />
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
  )
}

export default App
