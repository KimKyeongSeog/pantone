import React from "react";

const SlideCard = ({imageUrl}) => {

      return (
    <div className="image-slide">
      <img src={imageUrl} alt="slide" />
    </div>

    );
};

export default SlideCard; 