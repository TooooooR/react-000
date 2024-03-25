import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/Slider.css";
import { dataRest } from '../data/dataforslider';
import money from "../photos/money.png"
import phone1 from "../photos/phone1.png"
import point from "../photos/point.png"
import "../styles/Cardestablishments.css";
// import fffff from "../photos/fffff.png"

// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className="custom-next-arrow" onClick={ onClick }>
//       <img src={fffff} alt="Next Arrow" />
//     </div>
//   );
// }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // const handleErrorImage = (data) => {
  //   setDefaultImage((prev) => ({
  //     ...prev,
  //     [data.target.alt]: data.target.alt,
  //     linkDefault: logo,
  //   }));
  // };

  return (
    <div className="sliderr">
      <div>
        <p className='recom'>Recomendation <span className='city'>In Lviv</span></p> 
      </div>
      <Slider {...settings}>
        {dataRest.map((item) => (
          <div className="wrapper">
            <div className="group138">
                <img src={item.img} alt="Group138" className="Group138"/>
            </div>
            <p className="location">Локація для івентів</p>
            <img src={point} alt="point" className="point"/>
            <p className="adress">{item.address}</p>
            <img src={money} alt="money" className="money"/>
            <p className="moneyy">{item.money}</p>
            <img src={phone1} alt="phone1" className="phone1"/>
            <p className="rington">{item.phone}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;