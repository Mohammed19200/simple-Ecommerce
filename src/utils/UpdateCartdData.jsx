import axios from "axios";

export default function UpdateCartdData(cart, userId) {
  axios.patch(`http://localhost:3004/users/${userId}`, { cart });
  return <div></div>;
}
