import React from 'react';

const CircleCard = ({title}) => {
    return (
      <div
      className="
        relative
        flex
        h-32
        w-32
        items-center
        justify-center
        rounded-full
        bg-[#F6C52E]
        shadow-[6px_6px_0_#343A8F]
        sm:h-40
        sm:w-40
        transition-all
duration-300
hover:scale-110
hover:-translate-y-2
cursor-pointer
      "
    >
      <div className="absolute bottom-0 right-2 h-10 w-10 rounded-full bg-[#2D338D] sm:h-12 sm:w-12" />

      <span className="px-2 text-center text-sm font-bold text-white sm:text-base">
        {title}
      </span>
    </div>
    );
};

export default CircleCard;