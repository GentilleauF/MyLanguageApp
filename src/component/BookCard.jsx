import React from 'react';

const BookCard = ({title}) => {
    return (
           <div
      className="
        relative
        flex
        h-36
        w-28
        rotate-[-3deg]
        items-center
        justify-center
        rounded-3xl
        bg-[#7078F2]
        shadow-[6px_6px_0_#343A8F]
        sm:h-40
        sm:w-32
        lg:h-44
        lg:w-36
        transition-all
duration-300
hover:scale-110
hover:-translate-y-2
cursor-pointer
      "
    >
      <div className="absolute -top-2 h-4 w-14 bg-[#FF8B5D]" />

      <span className="px-2 text-center text-sm font-bold text-white sm:text-base">
        {title}
      </span>
    </div>
    );
};

export default BookCard;