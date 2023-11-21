const FourBoxes = () => {
  return (
    <div className="mt-16 w-[1280px] h-[413px] gap-6 grid grid-cols-2 justify-center items-center m-0">
      <div className="w-[630px] h-[186px]">
        <div className="absolute overflow-hidden rounded-2xl">
          <img
            className=" duration-700 hover:scale-110"
            src="./images/Box1.jpg"
            alt="Box1"
          />
        </div>
        <div className="ml-10 relative items-center text-white">
          <div className="mt-10 font-HelveticaNeueBd text-4xl font-extrabold">
            Fashion, Home + Interiors
          </div>
          <div className="mt-3 text-lg">
            Where inspiration and color accuracy meet.
          </div>
        </div>
      </div>
      <div className="w-[630px] h-[186px]">
        <div className="absolute overflow-hidden rounded-2xl">
          <img
            className="duration-700 hover:scale-110"
            src="./images/Box2.jpg"
            alt="Box2"
          />
        </div>
        <div className="ml-10 relative items-center text-white">
          <div className="mt-10 font-HelveticaNeueBd text-4xl font-extrabold">
            Graphic + Digital Design
          </div>
          <div className="mt-3 text-lg">
            Get color right with Pantone Colors for Print. Packaging & Digital
            Design.
          </div>
        </div>
      </div>
      <div className="w-[630px] h-[186px]">
        <div className="absolute overflow-hidden rounded-2xl">
          <img
            className="duration-700 hover:scale-110"
            src="./images/Box3.jpg"
            alt="Box3"
          />
        </div>
        <div className="ml-10 relative items-center text-white">
          <div className="mt-10 font-HelveticaNeueBd text-4xl font-extrabold">
            Munsell
          </div>
          <div className="mt-3 text-lg">
            Explore products applying the authoritative Munsell Color Standard.
          </div>
        </div>
      </div>
      <div className="w-[630px] h-[186px]">
        <div className="absolute overflow-hidden rounded-2xl">
          <img
            className="duration-700 hover:scale-110"
            src="./images/Box4.jpg"
            alt="Box4"
          />
        </div>
        <div className="ml-10 relative items-center text-white">
          <div className="mt-10 font-HelveticaNeueBd text-4xl font-extrabold">
            Plastics
          </div>
          <div className="mt-3 text-lg">
            Find the perfect color with Pantone Plastics Chips and Towers
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourBoxes;
