import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import NB from '../components/NavBar/NB';
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { $cartAtom } from '../atoms/cartAtom';
import UpdateCartdData from '../utils/UpdateCartdData';
import { authData } from '../atoms/authAtom';
import axios from "axios";
import { $FavoriteAtom } from '../atoms/FavoriteAtom';
import UpdateFavoriteData from '../utils/UpdateFavoriteData';
import Nav from '../components/NavBar/nav';

export default function MainLayout() {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [favoriteinfo, setfavoriteinfo] = useRecoilState($FavoriteAtom);
  const [user] = useRecoilState(authData);
  const [isloading, setisloading] = useState(true)
  useEffect(() => {
    if (!user.isAuth) return;
    setisloading(true)
    axios(`http://localhost:3004/users/${user.user.id}`).then(data => {
      setCartData(data.data.cart)
      setfavoriteinfo(data.data.favorite)
      setisloading(false)
    })
  }, [user.user?.id])
  useEffect(() => {
    if (!user.isAuth || isloading) return;
    localStorage.setItem('favorite', JSON.stringify(favoriteinfo));
    localStorage.setItem('cart', JSON.stringify(cartData));
    UpdateFavoriteData(favoriteinfo, user.user.id)
    UpdateCartdData(cartData, user.user.id)
  }, [favoriteinfo, cartData])
  return (
    <div>
      <Nav />
      <NB />
      <Outlet />
      <Footer />
    </div>
  )
}