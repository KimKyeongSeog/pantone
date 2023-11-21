import { BiSolidColor, BiInjection } from "react-icons/bi";
import { MdOutlineInsertPhoto, MdCenterFocusStrong } from "react-icons/md";
import { HiSwitchHorizontal } from "react-icons/hi";

const MeetPan = () => {
  return (
    <div className="items-center justify-center">
      <div className="mt-24 h-[517px] w-[1280px] ">
        <div className="h-[50px] text-3xl text-center font-bold mb-4">
          Meet Pantone Connect
        </div>
        <div className="flex justify-between">
          <div className=" w-[747px] h-[517px]">
            <img
              className=" bg-cover"
              src="./images/widget2-features-pick.webp"
              alt=""
            />
          </div>
          <div className="w-[491px] [h-517px] flex flex-col gap-6 justify-center ">
            <button className="h-[50px] flex items-center">
              <div>
                <BiInjection size={50} />
              </div>
              <div className="mx-4 text-2xl font-bold hover:text-gray-400 active:text-black duration-300">
                Pick
              </div>
            </button>
            <button className=" h-[50px] flex items-center">
              <div>
                <MdOutlineInsertPhoto size={50} />
              </div>
              <div className="mx-4 text-2xl font-bold hover:text-gray-400 active:text-black duration-300">
                Extract
              </div>
            </button>
            <button className=" h-[50px] flex items-center">
              <div>
                <HiSwitchHorizontal size={50} />
              </div>
              <div className="mx-4 text-2xl font-bold hover:text-gray-400 active:text-black duration-300">
                convert
              </div>
            </button>
            <button className=" h-[50px] flex items-center">
              <div>
                <MdCenterFocusStrong size={50} />
              </div>
              <div className="mx-4 text-2xl font-bold hover:text-gray-400 active:text-black duration-300">
                Measure
              </div>
            </button>
            <button className=" h-[50px] flex items-center">
              <div>
                <BiSolidColor size={50} />
              </div>
              <div className="mx-4 text-2xl font-bold hover:text-gray-400 active:text-black duration-300">
                Color Story
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetPan;
