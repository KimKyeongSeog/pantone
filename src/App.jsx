import React from "react";
import HeaderWindow from "./components/HeaderWin";
import FeaturedProduct from "./components/FeaturedProduct";
import BannerSlider from "./components/BannerSlider";
import PopUp from "./components/PopUp";
import BannerBottom from "./components/BannerBottom";
import FeaturedImages from "./components/FeaturedImages";
import Slider from "react-slick";

const App = () => {
  const images = [
    "./images/bannerimg_1.webp",
    "./images/bannerimg_2.webp",
    "./images/bannerimg_3.webp",
    "./images/bannerimg_4.webp",
    "./images/bannerimg_5.jpg",
    "./images/bannerimg_6.webp"
  ];

  return (
    <div>
      <PopUp />
      <HeaderWindow />
      <div>
        <div className="w-screen-max">
          <BannerSlider images={images} />
        </div>
        <div>
          <BannerBottom />
        </div>
      </div>
      <div className="w-screen-max h-full flex flex-col justify-center items-center">
        <div className="bg-orange-200 w-[1314px] h-[522px] overflow-hidden ">
          <div>
            <FeaturedProduct />
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            <Slider>
              <FeaturedImages />
            </Slider>
          </div>
        </div>
        <div className="bg-green-200 w-[1314px] h-[413px]">4Boxes</div>
        <div className="bg-blue-200">4People</div>
        <div className="bg-purple-200">pantone-color-institute</div>
        <div className="bg-gray-200">meet-pantone-connect</div>
        <div className="bg-cyan-400">explore-pantone</div>
      </div>
      <footer className="bg-block"></footer>
    </div>
  );
};

export default App;
