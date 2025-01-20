import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../atoms/cartAtom";
import { useNavigate } from "react-router-dom";

export default function FavoriteFooter() {
  const [cartData] = useRecoilState($cartAtom);
  const cartTotal = cartData.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const cartCount = cartData.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  let navigate = useNavigate();

  return (
    <div className="price-contt col-12">
      <div className="">
        <div className="price-contt1">
          <div>
            <div>Total</div>
            <div>
              <span className="items-num">{cartCount}</span> Items
            </div>
          </div>
          <div className="total-price fs-3">${cartTotal}</div>
        </div>
        <button
          onClick={() => {
            navigate("/checkout");
          }}
          className="addtocartbtn w-100"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
