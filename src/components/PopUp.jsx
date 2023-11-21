const PopUp = () => {
  return (
    <section className="h-[51px] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center text-white text-center">
        <div className="text-sm">
          10% OFF + FREE US GROUND SHIPPING ON ORDERS $99 OR MORE. USE CODE
          WINTER10 AT CHECKOUT. <u>*Details & EXCLUSIONS</u>
        </div>
        <div className="pb-1 text-xs">
          IMPORTANT NOTICE! OUR CUSTOMER REGULAR SUPPORT PHONE NUMBERS ARE
          TEMPORARLY DOWN. PLEASE, REACH OUT CUSTOMER SERVICE BY CALLING
          888-800-9580
        </div>
      </div>
      <div className="py-2 px-3 h-12 mx-2 border-l-2 border-white text-white flex items-center justify-center pl-4 text-center">
        SPECIAL OFFERS
      </div>
    </section>
  );
};

export default PopUp;
