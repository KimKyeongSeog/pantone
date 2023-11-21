const Institutite = () => {
  return (
    <div>
      <div className=" h-[317px] w-[1314px] flex justify-between">
        <div className=" w-[560px] h-[316px]">
          <img src="./images/pantone-behind-the-scenes.jpg" alt="" />
        </div>
        <div className=" w-[640px] h-[316px]">
          <div className=" w-[300px] h-[96px] my-[11px]">
            <img src="./images/pantone-color-institute-pci-logo.jpg" alt="" />
          </div>
          <div className=" w-[640px] h-[66px] my-[11px] text-sm">
            Recognized globally as a leading source of color expertise, Pantone
            Color Institute provides color insights and solutions; collaborating
            with our clients to strategically address color challenges and
            develop a color and design approach consistent with their brand
            vision
          </div>

          <button className="hover:bg-pink-700 active:bg-black duration-700 bg-black text-white font-bold w-[125px] h-[32px] rounded-md ">
            LEARN MORE
          </button>

          <div className="w-[640px] h-[72px] gap-3 flex my-[11px]">
            <img
              className="h-full"
              src="./images/pantone-color-institute-afterpay-logo.jpg"
              alt=""
            />
            <img
              className="h-full"
              src="./images/pantone-color-institute-nickelodeon-logo.jpg"
              alt=""
            />
            <img
              className="h-full"
              src="./images/pantone-color-institute-lacoste-logo.jpg"
              alt=""
            />
            <img
              className="h-full"
              src="./images/pantone-color-institute-cadillac-logo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutite;
