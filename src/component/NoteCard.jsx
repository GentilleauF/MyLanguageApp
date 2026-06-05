import React from 'react';

const NoteCard = ({title}) => {
    return (
        <div> <div
      className="
        relative
        flex
        h-28
        w-36
        rotate-[-2deg]
        items-center
        justify-center
        bg-[#FF8D67]
        shadow-[6px_6px_0_#343A8F]
        sm:h-32
        sm:w-44
        transition-all
duration-300
hover:scale-110
hover:-translate-y-2
cursor-pointer
      "
    >
      <div className="absolute left-3 top-0 h-full w-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#343A8F]"
            style={{
              top: `${10 + i * 18}px`,
            }}
          />
        ))}
      </div>

      <span className="px-3 text-center text-sm font-bold text-white sm:text-base">
        {title}
      </span>
    </div>
            
        </div>
    );
};

export default NoteCard;