import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideCard from "./SlideCard";

const BannerSlider = ({ images }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <SlideCard key={index} imageUrl={imageUrl} />
      ))}
    </Slider>
  );
};

export default BannerSlider;
