import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../atoms/cartAtom";
import CartFootercheckout from "../../components/Cart/CartFooter/CartFootercheckout";
import CartListcheckout from "../../components/Cart/CartList/CartListcheckout";
export default function Cartcheckout() {
    const [cartData] = useRecoilState($cartAtom);

    let content;
    if (!cartData)
        content = <h2 className="fw-bold text-center my-3">An Error Occured</h2>;
    else if (!cartData.length)
        content = <h2 className="fw-bold text-center my-3">Cart is empty</h2>;
    else {
        content = (
            <Fragment>
                <CartListcheckout />
                <CartFootercheckout />
            </Fragment>
        );
    }
    return (
        <div>
            <div className="favorite-contbigest col-12">
                <div className="favorite-cont col-12 col-md-11">{content}</div>
            </div>
        </div>
    )
}
