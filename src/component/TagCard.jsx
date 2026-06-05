import React from 'react';

const TagCard = ({title}) => {
    return (
            <div
      className="
        relative
        flex
        h-28
        w-36
        items-center
        justify-center
        bg-[#F7C52D]
        shadow-[6px_6px_0_#343A8F]
        sm:h-32
        sm:w-40
        transition-all
duration-300
hover:scale-110
hover:-translate-y-2
cursor-pointer
      "
      style={{
        clipPath: "polygon(0 0,100% 0,100% 72%,50% 100%,0 72%)",
      }}
    >
      <div className="absolute bottom-0 h-1/2 w-full bg-[#FF9A76]/50" />

      <span className="relative z-10 px-2 text-center text-sm font-bold text-white sm:text-base">
        {title}
      </span>
    </div>
    );
};

export default TagCard;