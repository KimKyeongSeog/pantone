const FeaturedImages = ({ selectedButton, Index, Image }) => {
  const onClickButton = () => {};
  return (
    <div>
      <div className="flex flex-row border-8 border-gray-200">
        <img
          className={`w-[334px] h-[334px] ${
            selectedButton === Index ? `${Index}-image` : ""
          }`}
          src={Image}
          alt="Product_image"
          onClick={onClickButton}
        />
      </div>
    </div>
  );
};

export default FeaturedImages;
