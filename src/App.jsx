import { React, useState } from "react";
import HeaderWindow from "./components/HeaderWin";
import FeaturedProduct from "./components/FeaturedProduct";
import BannerSlider from "./components/BannerSlider";
import PopUp from "./components/PopUp";
import BannerBottom from "./components/BannerBottom";
import Slider from "react-slick";
import FourBoxes from "./components/FourBoxes";
import ExpertsBanner from "./components/ExpertsBanner";
import Institutite from "./components/Institutite";
import MeetPan from "./components/MeetPan";
import ExplorePan from "./components/ExplorePan";
import FeaturedImages from "./components/FeaturedImages";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [selectedButton, setSelectedButton] = useState("GRAPHIC");

  const images = [
    "./images/bannerimg_1.webp",
    "./images/bannerimg_2.webp",
    "./images/bannerimg_3.webp",
    "./images/bannerimg_4.webp",
    "./images/bannerimg_5.jpg",
    "./images/bannerimg_6.webp"
  ];

  const FeatureCard = [
    {
      Product: "Graphic 1",
      Image: "./images/GRAPHIC.jpg",
      Price: "$ 465.50",
      index: "GRAPHIC"
    },
    {
      Product: "Graphic 2",
      Image: "./images/GRAPHIC_01.jpg",
      Price: "$ 244.80",
      index: "GRAPHIC"
    },
    {
      Product: "Graphic 3",
      Image: "./images/GRAPHIC_02.jpg",
      Price: "$ 217.00",
      index: "GRAPHIC"
    },
    {
      Product: "Graphic 4",
      Image: "./images/GRAPHIC_03.jpg",
      Price: "$ 272.00",
      index: "GRAPHIC"
    },
    {
      Product: "Graphic 5",
      Image: "./images/GRAPHIC_04.jpg",
      Price: "$ 423.00",
      index: "GRAPHIC"
    },
    {
      Product: "FASHION 1",
      Image: "./images/FASHION.jpg",
      Price: "$ 749.00",
      index: "FASHION"
    },
    {
      Product: "FASHION 2",
      Image: "./images/FASHION_01.jpg",
      Price: "$ 260.00",
      index: "FASHION"
    },
    {
      Product: "FASHION 3",
      Image: "./images/FASHION_02.jpg",
      Price: "$ 325.00",
      index: "FASHION"
    },
    {
      Product: "FASHION 4",
      Image: "./images/FASHION_03.jpg",
      Price: "$ 279.20",
      index: "FASHION"
    },
    {
      Product: "FASHION 5",
      Image: "./images/FASHION_04.jpg",
      Price: "$ 449.90",
      index: "FASHION"
    },
    {
      Product: "MUNSELL 1",
      Image: "./images/MUNSELL.jpg",
      Price: "$ 1,051.00",
      index: "MUNSELL"
    },
    {
      Product: "MUNSELL 2",
      Image: "./images/MUNSELL_01.jpg",
      Price: "$ 275.00",
      index: "MUNSELL"
    },
    {
      Product: "MUNSELL 3",
      Image: "./images/MUNSELL_02.jpg",
      Price: "$ 165.00",
      index: "MUNSELL"
    },
    {
      Product: "MUNSELL 4",
      Image: "./images/MUNSELL_03.jpg",
      Price: "$ 1082.00",
      index: "MUNSELL"
    },
    {
      Product: "LIFESTYLE 1",
      Image: "./images/LIFESTYLE.jpg",
      Price: "$ 30.00",
      index: "LIFESTYLE"
    },
    {
      Product: "LIFESTYLE 2",
      Image: "./images/LIFESTYLE_01.jpg",
      Price: "$ 30.00",
      index: "LIFESTYLE"
    },
    {
      Product: "LIFESTYLE 3",
      Image: "./images/LIFESTYLE_02.jpg",
      Price: "$ 76.95",
      index: "LIFESTYLE"
    },
    {
      Product: "LIFESTYLE 4",
      Image: "./images/LIFESTYLE_03.jpg",
      Price: "$ 19.95 - $ 29.95",
      index: "LIFESTYLE"
    },
    {
      Product: "PLASTICS",
      Image: "./images/PLASTICS.jpg",
      Price: "$ 1,051.00",
      index: "PLASTICS"
    },
    {
      Product: "PLASTICS 1",
      Image: "./images/PLASTICS_01.jpg",
      Price: "$ 1,082.00",
      index: "PLASTICS"
    }
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
        <div className="w-[1314px] h-[522px] overflow-hidden border-b-2">
          <div className="mb-8">
            <FeaturedProduct
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
          </div>
          <div>
            <Slider slidesToShow={4} autoplay={true} autoplaySpeed={3000}>
              {FeatureCard.map((v, i) => {
                return (
                  <FeaturedImages
                    Price={v.Price}
                    Image={v.Image}
                    Index={v.Index}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <button className="mt-12 duration-700 bg-black hover:bg-pink-700 active:bg-black text-white w-[90px] h-[50px] text-center font-bold rounded-lg ">
          Shop All
        </button>
        <FourBoxes />
        <ExpertsBanner />
        <Institutite />
        <MeetPan />
        <ExplorePan />
      </div>
      <Footer />
    </div>
  );
};

export default App;
