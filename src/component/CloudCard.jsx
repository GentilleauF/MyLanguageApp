import React from 'react';

const CloudCard = ({title}) => {
    return (
            <div
      className="
        relative
        flex
        h-24
        w-36
        items-center
        justify-center
        rounded-full
        bg-[#7D85F5]
        shadow-[6px_6px_0_#343A8F]
        sm:h-28
        sm:w-44
        transition-all
duration-300
hover:scale-110
hover:-translate-y-2
cursor-pointer
      "
    >
      <div className="absolute left-0 top-[-18px] h-14 w-14 rounded-full bg-[#7D85F5]" />
      <div className="absolute left-12 top-[-32px] h-20 w-20 rounded-full bg-[#7D85F5]" />
      <div className="absolute right-2 top-[-16px] h-14 w-14 rounded-full bg-[#7D85F5]" />

      <div className="absolute -top-2 h-6 w-4 rotate-12 bg-[#F7C52D]" />

      <span className="relative z-10 px-2 text-center text-sm font-bold text-white sm:text-base">
        {title}
      </span>
    </div>
    );
};

export default CloudCard;