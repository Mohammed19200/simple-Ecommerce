import { useRecoilState } from "recoil";
import { $FavoriteAtom } from "../../../../atoms/FavoriteAtom";
import "./AddtoFavoriteBtn.css";
import { authData } from "../../../../atoms/authAtom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa";

export default function AddToFavoriteBtn({ product }) {
  const [favoriteData, setfavoriteData] = useRecoilState($FavoriteAtom);
  const [auth] = useRecoilState(authData);
  let navigate = useNavigate();

  function addTofavorite() {
    if (!auth.isAuth) {
      navigate("/login");
    } else {
      setfavoriteData([...favoriteData, { ...product, quantity: 1 }]);
      toast.success("This product Added To Favorite Successfuly");
    }
  }
  return (
    <div>
      <button onClick={addTofavorite} className="addtoFavoritebtn">
        <FaRegHeart />
      </button>
    </div>
  );
}
