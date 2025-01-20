import { Link } from "react-router-dom";
import './Footer.css'
import { useEffect } from 'react';
import WOW from 'wowjs';
import { authData } from "../../atoms/authAtom";
import { useRecoilState } from "recoil";
export default function Footer() {

  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
  }, [])
  const [auth] = useRecoilState(authData);
  return (
    <div className="col-12 wow animate__animated animate__fadeInUp animate__slow" data-wow-delay="0.5s" >
      <div className="bigdivv11 col-12">

        <div className="footerbigdivstyle col-5 col-md-5 col-lg-3">
          <h5 className="titlesmallstyle">INFORMATION</h5>
          <Link id="linkkstylee" className="text-decoration-none" to='/'>Home</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='/shop'>Shop</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='/cart'>Cart</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='/Favorite'>Favorite</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='/order'>Order</Link>
        </div>

        <div className="footerbigdivstyle col-5 col-md-5 col-lg-3">
          <h5 className="titlesmallstyle">QUICK LINKS</h5>
          <Link id="linkkstylee" className="text-decoration-none" to='allCategories'>Categorie</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='/faq'>About Us</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='Contactus'>Contact Us</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='/faq'>Privacy Policy</Link>
          <Link id="linkkstylee" className="text-decoration-none" to='*'>Error404</Link>
        </div>

        <div className="footerbigdivstyle col-10 col-md-10 col-lg-3">
          <h5 className="titlesmallstyle">CONTACT INFO</h5>
          <p id="linkkstyleee">Address: 007th St, Demo, NY 69</p>
          <p id="linkkstyleee">Phone: +1-203-456-7890</p>
          <p id="linkkstyleee">Email: loremipsum@gmail.com</p>
        </div>
        <div className="bigdivv2222 col-12">Copyright © Trade Shop All Right Reserved.</div>
      </div>
    </div>
  )
}

