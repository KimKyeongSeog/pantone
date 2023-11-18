
import HeaderWindow from "./components/HeaderWin";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedProduct from "./components/FeaturedProduct";


const App = () => {
  return (
    <div>
      <HeaderWindow />
      <div className="bg-orange-200">
        
        <Slider autoplay={true} autoplaySpeed={2000} arrows={true}>
        <img src="/images/pantone-fashion-home-interiors-homepage-slider-mobile.webp" alt="React" />
        <img src="/images/pantone-color-of-the-year-2024-teaser-nav-en.webp" alt="React" />
        <img src="/images/pnt_holiday_campaign_homepage_desktop_dotcom_2560x700_1x.webp" alt="React" />
        <img src="/images/home_page_papertraveler_desktop_en_2560x700_1x.webp" alt="React" />
        <img src="/images/pnt_talens_home_page_desktop_2560x700_dotcom_1x.webp" alt="React" />
        <img src="/images/pantone-color-your-story-homepage.jpg" alt="React" />
        </Slider>
        
        <FeaturedProduct/>
        <div className="bg-green-200">4Boxes</div>
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