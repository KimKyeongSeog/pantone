import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaPinterest
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black w-screen-max h-[465px] flex flex-col items-center justify-center mt-24">
      <div id="upper_tab" className="w-[1260px] h-[257px] flex justify-between">
        <div className="w-[565px] h-[257px]">
          <ul className="font-extrabold text-white mt-12 ml-4">
            <li className="text-[32px]">Are you a Pantone member?</li>
            <li className="text-base">
              To take adventage of your Pantone member perks, <u>sign in.</u>
            </li>
            <li className="text-base">
              Not a member? <u>Join today.</u>
            </li>
          </ul>
        </div>
        <div className="mt-4 w-[456px] h-[257px] flex text-white font-extrabold text-sm ">
          <ul className=" w-[193px]">
            <li>ABOUT US</li>
            <li>ABOUT PANTONE</li>
            <li>CONTACT US</li>
            <li>CAREERS</li>
          </ul>
          <ul className=" w-[193px]">
            <li>CUSTOMER SERVICE</li>
            <li>HELP CENTER</li>
            <li>PRODUCT REGISTRATION</li>
            <li>SOFTWARE DOWNLOADS</li>
            <li>TRADE-IN PROGRAM</li>
            <li>SHIPPING POLICY</li>
            <li>RETURN POLICY</li>
            <li>COOKE SETTINGS</li>
          </ul>
        </div>
      </div>
      <div
        id="image_tab"
        className=" w-[1260px] h-[76px] flex justify-center gap-[120px]"
      >
        <div className="h-[36px] flex items-center gap-1 mt-6">
          <img className="h-[18px]" src="./images/logo.png" alt="" />
          <img className="h-[35px]" src="./images/xrite.png" alt="" />
        </div>
        <div className="h-[36px]">
          <div className="text-sm text-white mb-2 top-0">FOLLOW US</div>

          <div className="flex gap-4 bg-white bg-cover rounded-sm">
            <FaInstagramSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaPinterest size={30} />
            <CiTwitter size={30} />
            <AiOutlineLinkedin size={30} />
          </div>
        </div>
      </div>

      <div className="text-white">
        Pantone LLC is a wholly owned subsidiary of x-Rite, Incorporated. ⓒ
        Pantone LLC, 1995 - 2023 All right reserved.
      </div>
      <ul className="text-white flex justify-center gap-2 text-sm">
        <li className="border-r-2 px-2">Terms of Use</li>
        <li className="border-r-2 px-2">Privacy Policy</li>
        <li className="border-r-2 px-2">Cookie Notice</li>
        <li>Do Not Sell or Share My Data(California Consumer Privacy Act)</li>
      </ul>
    </div>
  );
};

export default Footer;
