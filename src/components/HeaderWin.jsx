import { IoIosMenu, IoMdSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";

const HeaderWindow = () => {
  return (
    <header className=" p-4 flex justify-between justity-center items-center">
      <div className="gap-4 text-3xl flex justity-center items-center">
        <IoIosMenu />
        <IoMdSearch />
      </div>

      <img src="/images/Pantone-logo-26px.jpg" alt="" />

      <div className="gap-4 text-3xl flex justity-center items-center">
        <FaRegCircleUser />
        <HiOutlineShoppingCart />
      </div>
    </header>
  );
};

export default HeaderWindow;
