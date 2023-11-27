const ExpertsBanner = () => {
  return (
    <div className="mt-16 h-[300px] w-[1314px] flex justify-between items-center">
      <div className="w-[426px] p-0 ">
        <div className="text-3xl">Meet Our Color Experts</div>
        <div className="mt-3 text-base">
          Our color experts serve clients all around the world, touching every
          creative discipline and every level of the marketplace.
        </div>
      </div>
      <div className="w-[214px] h-[300px] grid gird-cols-1 justify-center">
        <div className="mb-6 h-[144px] w-[144px]">
          <img
            className="rounded-full mt-12"
            src="./images/Pantone5.jpg"
            alt="Pantone5"
          />
        </div>
        <div className="text-center">
          <div className="font-bold">Lan Vu</div>
          <div className="mb-3">Trend Forecaster</div>
        </div>
      </div>
      <div className="w-[214px] h-[300px] grid gird-cols-1 justify-center">
        <div className="mb-6 h-[144px] w-[144px]">
          <img
            className="rounded-full mt-12"
            src="./images/Pantone6.jpg"
            alt="Pantone6"
          />
        </div>
        <div className="text-center">
          <div className="font-bold">Leatrice Elseman</div>
          <div className="mb-3">Execlutive Director</div>
        </div>
      </div>
      <div className="w-[214px] h-[300px] grid gird-cols-1 justify-center">
        <div className="mb-6 h-[144px] w-[144px]">
          <img
            className="rounded-full mt-12"
            src="./images/Pantone7.jpg"
            alt="Pantone7"
          />
        </div>
        <div className="text-center">
          <div className="font-bold">Micheal Nolte</div>
          <div className="mb-3">Color Forecaster</div>
        </div>
      </div>
      <div className="w-[214px] h-[300px] grid gird-cols-1 justify-center">
        <div className="mb-6 h-[144px] w-[144px]">
          <img
            className="rounded-full mt-12"
            src="./images/Pantone8.jpg"
            alt="Pantone8"
          />
        </div>
        <div className="text-center">
          <div className="font-bold">Tod Schulman</div>
          <div className="mb-3">Creative Director</div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsBanner;
