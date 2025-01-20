import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../atoms/cartAtom";
import CartItemcheckout from "../CartItem/CartItemcheckout";

export default function CartListcheckout() {
    const [cartData] = useRecoilState($cartAtom);

    return (
        <table className="cart w-100">
            <tbody>
                {cartData.map((product,index) => {
                    return <CartItemcheckout key={index} product={product} />

                })}
            </tbody>
        </table>
    );
}
