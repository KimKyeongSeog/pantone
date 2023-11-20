import React from "react";
import HeaderWindow from "./components/HeaderWin";
import FeaturedProduct from "./components/FeaturedProduct";
import BannerSlider from "./components/BannerSlider";
import PopUp from "./components/PopUp";
import BannerBottom from "./components/BannerBottom";
import FeaturedImages from "./components/FeaturedImages";
import Slider from "react-slick";
import FourBoxes from "./components/FourBoxes";
import ExpertsBanner from "./components/ExpertsBanner";
import Institutite from "./components/Institutite";

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
        <div className=" w-[1314px] h-[522px] overflow-hidden ">
          <div>
            <FeaturedProduct />
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            <Slider>
              <FeaturedImages />
            </Slider>
          </div>
        </div>
        <button className="duration-700 bg-black hover:bg-pink-700 active:bg-black text-white w-[90px] h-[50px] text-center font-bold rounded-lg ">
          Shop All
        </button>
        <FourBoxes />
        <ExpertsBanner />
        <Institutite />
        <div className="mt-24 bg-gray-200">meet-pantone-connect</div>
        <div className="bg-cyan-400">explore-pantone</div>
      </div>
      <footer className="bg-block"></footer>
    </div>
  );
};

export default App;
