const CategoryCards = (props) => {
  return (
    <div className="w-72 h-72 sm:w-[21rem] sm:h-[21rem] 2xl:w-[24.4rem] 2xl:h-[24.4rem] lg:w-[22.5rem] lg:h-[22.5rem] bg-[#f1f5f9] shadow-[0_7.33px_16.67px_rgba(0,0,0,0.25)] rounded-[44px] overflow-hidden m-6 flex justify-center relative">
      <img className="opacity-[0.23] absolute left-[97px] top-[110px]" src={`../../../public/${props.card.image}`} />
      <div className="flex items-center">
        <p className="text-3xl sm:text-[2rem]  lg:text-4xl  monu text-[#37474F] shadow-[5px 4px 4px rgba(0, 0, 0, 0.25)] font-normal  ">
          {props.card.domain}
        </p>
      </div>
    </div>
  );
};

export default CategoryCards;
