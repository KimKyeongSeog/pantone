import { useState } from "react";

const FeaturedProduct = () => {
  const [selectedButton, setSelectedButton] = useState("GRAPHIC");

  const onClickButton = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="mt-20 font-HelveticaNeue_Light">
      <div className="text-center text-4xl">Featured Product</div>
      <div className="flex flex-row mt-4 pl-4">
        <button
          onClick={() => onClickButton("GRAPHIC")}
          className={`ml-6 ${
            selectedButton === "GRAPHIC" ? "text-lg font-bold" : "text-lg"
          }`}
        >
          GRAPHIC + DIGITAL
        </button>
        <button
          onClick={() => onClickButton("FASHION")}
          className={`ml-6 ${
            selectedButton === "FASHION" ? "text-lg font-bold" : "text-lg"
          }`}
        >
          FASHION, HOME + INTERIORS
        </button>
        <button
          onClick={() => onClickButton("MUNSELL")}
          className={`ml-6 ${
            selectedButton === "MUNSELL" ? "text-lg font-bold" : "text-lg"
          }`}
        >
          MUNSELL
        </button>
        <button
          onClick={() => onClickButton("LIFESTYLE")}
          className={`ml-6 ${
            selectedButton === "LIFESTYLE" ? "text-lg font-bold" : "text-lg"
          }`}
        >
          LIFESTYLE
        </button>
        <button
          onClick={() => onClickButton("PLASTICS")}
          className={`ml-6 ${
            selectedButton === "PLASTICS" ? "text-lg font-bold" : "text-lg"
          }`}
        >
          PLASTICS
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
