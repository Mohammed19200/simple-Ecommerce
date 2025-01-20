import React from 'react'
import herophoto from '../../assets/slider-1gir.png'
import { useNavigate } from "react-router-dom";
export default function Herosection() {
    let navigate = useNavigate();
    return (
        <div className="bigherosectionhomeh col-12">
            <div className="bigherosectionhome col-12">
                <div className="bigherosectionhomediv1 col-11 col-md-5">
                    <h1 className="bigherosectionhomeh11">Find best</h1>
                    <h1 className="bigherosectionhomeh12">products</h1>
                    <button onClick={()=>{navigate("/shop");}} className="bigherosectionhomebutton">Shop Now</button>
                </div>
                <img className="bigherosectionhomeimg col-11 col-md-5" src={herophoto} alt="" />
            </div>
        </div>
    )
}
