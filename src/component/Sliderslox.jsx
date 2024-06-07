import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/Sliderlox.css";
import "../styles/testlox.css";
import money from "../photos/money.png"
import phone1 from "../photos/phone1.png"
import point from "../photos/point.png"



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}

function Sliderslox(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="sliderr">
      <Slider {...settings}>
        {props.data.map((item) => (
            <img src={item.img} alt="Group1383" className="Group1383"/>
        ))}
      </Slider>
    </div>
  );
}

export default Sliderslox;