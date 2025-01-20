import React from 'react'
import RemoveAllBtnFavorite from './components/RemoveAllBtnFavorite'

export default function FavoriteHeader() {

  return (
    <div className="cart-header d-flex justify-content-between align-items-center mb-4" >
      <h5 className="fw-bolder">Shopping Favorite Cart</h5>
      <RemoveAllBtnFavorite/>
    </div>
  )
}