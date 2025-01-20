import React from "react";
import { FaTruckFront } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

export default function Proccessservice() {
  return (
    <div className="col-12 proccessscuritydiv1">
      <div className="col-12 proccessscuritydiv">
        <div className="col-10 col-md-5 col-lg-3 proccessscuritychilddiv">
          <h1 className="h1iconprocess">
            <FaTruckFront id="iconproccess" />
          </h1>
          <h1 className="h11proccess">Free Delivery</h1>
          <p className="preproccess">
            And free returns. See checkout for delivery dates.
          </p>
        </div>

        <div className="col-10 col-md-5 col-lg-3 proccessscuritychilddiv">
          <h1 className="h1iconprocess">
            <FaWallet id="iconproccess" />
          </h1>
          <h1 className="h11proccess">0% EMi Available</h1>
          <p className="preproccess">
            Choose to check out with Visa Card Monthly Installments.
          </p>
        </div>

        <div className="col-10 col-md-5 col-lg-3 proccessscuritychilddiv">
          <h1 className="h1iconprocess">
            <FaDollarSign id="iconproccess" />
          </h1>
          <h1 className="h11proccess">Secure Payments</h1>
          <p className="preproccess">
            We are officially registered 100% Payment Secure
          </p>
        </div>
      </div>
    </div>
  );
}
