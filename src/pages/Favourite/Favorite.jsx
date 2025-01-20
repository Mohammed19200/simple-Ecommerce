import { Fragment } from "react";
import { useRecoilState } from "recoil";
import './Favorite.css'
import { $FavoriteAtom } from "../../atoms/FavoriteAtom";
import FavoriteList from "../../components/Cart/CartList/Favoritelist";
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function Favorite() {

    useEffect(() => {
        new WOW.WOW({
            live: true
        }).init();
    }, [])

    const [cartData] = useRecoilState($FavoriteAtom);

    let content;
    if (!cartData)
        content = <h2 className="fw-bold text-center my-3">An Error Occured</h2>;
    else if (!cartData.length)
        content = <h2 className="fw-bold text-center my-3">Favorite is empty</h2>;
    else {
        content = (
            <Fragment>
                <div className="">
                    <FavoriteList />
                </div>
            </Fragment>
        );
    }

    return (
        <div className="favorite-contbigest col-12 wow animate__animated animate__fadeInLeft animate__slow" data-wow-delay="0.1s">
            <div className="favorite-cont col-12 col-md-11">{content}</div>
        </div>
    )
}
