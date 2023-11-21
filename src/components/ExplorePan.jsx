const ExplorePan = () => {
  return (
    <div className="pt-36">
      <div className="h-12 w-[1280px] text-center font-bold text-3xl mb-4">
        Explore Pantone
      </div>
      <div className="flex items-center gap-6 justify-center">
        <div>
          <img
            className="t-0 w-[416px] h-[308px]"
            src="./images/EX1.jpg"
            alt=""
          />
          <ul className="font-semibold w-[416px] my-4">
            <li className="text-2xl">
              <u>THE MANY SHADES OF STORYTELLING</u>
            </li>
            <li>
              <u>GO TO PRODUCT SPOTLIGHT</u>
            </li>
          </ul>
        </div>
        <div className=" ">
          <img
            className="t-0 w-[416px] h-[308px]"
            src="./images/EX2.jpg"
            alt=""
          />
          <ul className="font-semibold w-[416px] my-4">
            <li className="text-2xl">
              <u>City Park Golden Brass: Symbolic Of A Place to Call Home</u>
            </li>
            <li>
              <u>GO TO CASE STUDIES</u>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="t-0 w-[416px] h-[308px]"
            src="./images/EX3.png"
            alt=""
          />
          <ul className="font-semibold w-[416px] my-4">
            <li className="text-2xl">
              <u>The Nuanced Beauty Of Natural Color</u>
            </li>
            <li>
              <u>GO TO COLORS</u>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExplorePan;
