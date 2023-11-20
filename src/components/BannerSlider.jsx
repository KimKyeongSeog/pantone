import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SlideCard from "./SlideCard";

const BannerSlider = ({ images }) => {
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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