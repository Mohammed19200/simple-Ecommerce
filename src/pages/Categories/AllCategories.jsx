import { useNavigate } from 'react-router-dom';
import './AllCategories.css'
import WOW from 'wowjs';
import { useEffect } from 'react';
export default function AllCategories() {

    let navigate = useNavigate();

    useEffect(() => {
        new WOW.WOW({
            live: true
        }).init();
    }, [])

    return (
        <div className='biiigestddiv col-12'>

            <div className='wow animate__animated animate__fadeInDown animate__slow col-12 biiigestddiv' data-wow-delay="0.1s">
                <h1 className='col-12 h1catigory'>All Categories</h1>
                <div className='Smartphones col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/Smartphones"); }} className='categoriybutton'>Smartphones</button> </div>
                <div className='sunglasses col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/sunglasses"); }} className='categoriybutton'>Sunglasses</button> </div>
                <div className='Motorcycle col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/motorcycle"); }} className='categoriybutton'>Motorcycle</button> </div>
                <div className='lighting col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/lighting"); }} className='categoriybutton'>Lighting</button> </div>
                <div className='fragrances col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/fragrances"); }} className='categoriybutton'>Fragrances</button> </div>
                <div className='laptops col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/laptops"); }} className='categoriybutton'>Laptops</button> </div>
            </div>

            <div className='wow animate__animated animate__fadeInLeft animate__slow col-12 biiigestddiv' data-wow-delay="0.1s">
                <div className='Tops col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/tops"); }} className='categoriybutton'>Tops</button></div>
                <div className='Automotive col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/automotive"); }} className='categoriybutton'>Automotive</button> </div>
                <div className='Homedecoration col-10 col-md-5 col-lg-3'> <button onClick={() => { navigate("/homedecoration"); }} className='categoriybutton'>Home-decoration</button> </div>
            </div>

            <div className='wow animate__animated animate__fadeInRight animate__slow col-12 biiigestddiv' data-wow-delay="0.1s">
                <div className='Groceries col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/groceries"); }} className='categoriybutton'>Groceries</button> </div>
                <div className='Skincare col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/skincare"); }} className='categoriybutton'></button>Skincare</div>
                <div className='Womensshoes col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/womensshoes"); }} className='categoriybutton'>Womens-shoes</button> </div>
            </div>

            <div className='wow animate__animated animate__fadeInUp animate__slow col-12 biiigestddiv' data-wow-delay="0.1s">
                <div className='Womensbags col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/womensbags"); }} className='categoriybutton'>Womens-bags</button> </div>
                <div className='Womenswatches col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/womenswatches"); }} className='categoriybutton'>Womens-watches</button> </div>
                <div className='Menshirts col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/mensshirts"); }} className='categoriybutton'>Mens-shirts</button></div>
                <div className='Womensdresses col-10 col-md-5 col-lg-3 '> <button onClick={() => { navigate("/womensdresses"); }} className='categoriybutton'>Womens- dresses</button> </div>
            </div>

        </div>
    )
}