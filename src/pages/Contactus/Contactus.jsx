import MessageForm from "../CHECKOUT/Delivery/MessageForm";
import "./Contactus.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaMapMarked } from "react-icons/fa";

export default function Contactus() {
  return (
    <div className="col-12">
      <div
        className="col-12 bigdiv11big wow animate__animated animate__fadeInDown animate__slow"
        data-wow-delay="0.1s"
      >
        <h1 id="titlebig">We’re here to help you!</h1>
        <div id="bigdiv1" className="col-12">
          <div className="col-10 col-md-5 col-lg-3" id="informationdiv">
            <FaPhoneAlt id="iconcolor" />
            <div>
              <h1 id="titlestyle">PHONE NUMBER</h1>
              <h3 id="decriptionstyle">
                Mobile: (+20) – 15525 – 37398 <br />
                Hotline: 015
              </h3>
            </div>
          </div>

          <div className="col-10 col-md-5 col-lg-3" id="informationdiv">
            <FaMessage id="iconcolor" />

            <div>
              <h1 id="titlestyle">EMAIL ADDRESS</h1>
              <h3 id="decriptionstyle">
                EMAIL: loremipsum@gmail.com <br />
                loremipsum@gmail.com
              </h3>
            </div>
          </div>

          <div className="col-10 col-md-5 col-lg-3" id="informationdiv">
            <FaMapMarked id="iconcolor" />
            <div>
              <h1 id="titlestyle">ADDRESS</h1>
              <h3 id="decriptionstyle">
                ADDRESS: 007th St, Demo, NY 69 <br />
                New Toreal, Mansoura
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        id="divmap"
        className="col-12 wow animate__animated animate__fadeInLeft animate__slow"
        data-wow-delay="0.1s"
      >
        <iframe
          className="mapp col-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.0934160503452!2d31.39756222489936!3d31.051498870158195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d9ec6016eb7%3A0x59eb949d0e20234b!2z2YXYrdin2YHYuNipINin2YTYr9mC2YfZhNmK2Kk!5e0!3m2!1sar!2seg!4v1711564649684!5m2!1sar!2seg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        className="col-12 wow animate__animated animate__fadeInUp animate__slow"
        data-wow-delay="0.1s"
      >
        <MessageForm />
      </div>
    </div>
  );
}
