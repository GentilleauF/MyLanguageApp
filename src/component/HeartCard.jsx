import React from 'react';

const HeartCard = ({title}) => {
    return (
            <div className="relative scale-75 sm:scale-90 lg:scale-100">
      <div
        className="
          relative
          h-28
          w-28
          rotate-[-45deg]
          bg-[#F6C52E]
          shadow-[6px_6px_0_#343A8F]
          transition-all
duration-300
hover:scale-110
hover:-translate-y-2
cursor-pointer
        "
      >
        <div className="absolute -top-14 left-0 h-28 w-28 rounded-full bg-[#F6C52E]" />
        <div className="absolute left-14 top-0 h-28 w-28 rounded-full bg-[#F6C52E]" />

        <div className="absolute inset-0 flex rotate-45 items-center justify-center">
          <span className="max-w-[90px] text-center text-sm font-bold leading-tight text-white">
            {title}
          </span>
        </div>
      <div className="absolute left-20 top-0 h-7 w-4 rotate-12 bg-[#2D338D]" />
      </div>

    </div>
    );
};

export default HeartCard;
