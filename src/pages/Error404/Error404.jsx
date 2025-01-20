import './Error404.css';
import sh from "../../assets/404.jpg.webp"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function Error404() {
  let navigate = useNavigate();

  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
  }, [])

  return (
    <div className='bigdivv wow animate__animated animate__shakeY animate__slow' data-wow-delay="0.1s">
      <img className='photosize' src={sh} alt="" />
      <h4 className='h44'>Oops...That link is broken.</h4>
      <button onClick={() => { navigate("/"); }} className='btnn'>Go To Home Page</button>
    </div>
  )
}
