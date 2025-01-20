import './Aboutus.css'
import elec from '../../assets/electronicphoto.jpg'
import p1 from '../../assets/team-img-1_442x442.png'
import p2 from '../../assets/team-img-2_442x442.png'
import p3 from '../../assets/team-img-3_442x442.png'
import p4 from '../../assets/team-img-4_442x442.png'
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider'
import WOW from 'wowjs';
import { useEffect } from 'react'
export default function Aboutus() {

    useEffect(() => {
        new WOW.WOW({
            live: true
        }).init();
    }, [])

    return (
        <div>

            <div className='bigdiv col-10'>

                <div className='col-12 col-md-11 col-lg-6 halfbigdiv wow animate__animated animate__fadeInLeft animate__slow' data-wow-delay="0.1s">
                    <h1 className='titlebigdiv'>Our Story</h1>
                    <p className='pargbigdiv'>Trade Shop was founded in 2024, out of a passion for innovation and a desire to provide technology enthusiasts and everyday users alike with a one-stop destination for all their needs. Our journey began with a simple goal to bridge the gap between quality products and a user-friendly shopping experience.</p>
                    <ul className='ulbigdiv'>
                        <h5 className='h5ulbigdiv'>Trade Shop, we are committed to delivering:</h5>
                        <li className='liulbigdiv'>Quality Assurance</li>
                        <li className='liulbigdiv'>Customer Satisfaction</li>
                        <li className='liulbigdiv'>Premium Build Quality</li>
                        <li className='liulbigdiv'>AInnovation and Trends</li>
                    </ul>
                </div>

                <div className='col-md-11 col-lg-5 wow animate__animated animate__fadeInRight animate__slow' data-wow-delay="0.1s">
                    <img className='imgbigdiv col-12' src={elec} alt="" />
                </div>

            </div>

            <div className='wow animate__animated animate__fadeInLeft animate__slow' data-wow-delay="0.1s">
                <TestimonialSlider />
            </div>

            <div className='secandbigdiv col-12  wow animate__animated animate__fadeInRight animate__slow' data-wow-delay="0.1s">
                <h1 className='col-12 titleteam'>Our Team</h1>
                <div className='secandbigdiv1 col-12'>
                    <img className='col-10 col-md-5 col-lg-2 imagestyle' src={p1} alt="" />
                    <img className='col-10 col-md-5 col-lg-2 imagestyle' src={p2} alt="" />
                    <img className='col-10 col-md-5 col-lg-2 imagestyle' src={p3} alt="" />
                    <img className='col-10 col-md-5 col-lg-2 imagestyle' src={p4} alt="" />
                </div>
            </div>

            <div className='div3 wow animate__animated animate__fadeInUp animate__slow' data-wow-delay="0.1s" >Made of high quality materials and by highest possible standards</div>

        </div>
    )
}
