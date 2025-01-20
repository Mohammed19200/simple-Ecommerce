import Cartcheckout from "../Cart/Cartcheckout";
import "./CHECKOUT.css";
import Buttonschoose from "./Delivery/Buttonschoose";

export default function CHECKOUT() {
  return (
    <div>
      <div className="col-12 CHECKOUTbigestdiv">
        <div
          className="col-11 col-lg-6 wow animate__animated animate__fadeInLeft animate__slow"
          data-wow-delay="0.1s"
        >
          <Buttonschoose />
        </div>
        <div
          className="col-11 col-lg-6 wow animate__animated animate__fadeInRight animate__slow"
          data-wow-delay="0.1s"
        >
          <Cartcheckout />
        </div>
      </div>
    </div>
  );
}
