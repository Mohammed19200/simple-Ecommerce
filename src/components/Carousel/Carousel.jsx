import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import p1 from "../../assets/slider1.webp";
import p2 from "../../assets/slider2.webp";
import p4 from "../../assets/sliddder4.webp";
import p3 from "../../assets/ssslider3.webp";
import "./Carousel.css";
export default function Carousel() {
  return (
    <div className="col-12">
      <Swiper
        loop
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper col-12"
      >
        <SwiperSlide className="SwiperSlidecarsouls">
          <img className="carsoulimage col-12" src={p1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlidecarsouls">
          <img className="carsoulimage col-12" src={p2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlidecarsouls">
          <img className="carsoulimage col-12" src={p3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlidecarsouls">
          <img className="carsoulimage col-12" src={p4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
