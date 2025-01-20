import React from "react";
import Countdown from "../Countdown/Countdown";
import { useNavigate } from "react-router-dom";

export default function Herosectiontimer() {
  let navigate = useNavigate();
  return (
    <div className="col-12 divtimerbiger">
      <div className="divtimer col-12">
        <h1 className="divtimerh11 animate__animated animate__flash animate__slow">
          60% Discount
        </h1>
        <Countdown />
        <button
          onClick={() => {
            navigate("/shop");
          }}
          className="divtimerbuttoon"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
