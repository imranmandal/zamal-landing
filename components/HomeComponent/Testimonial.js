import React from "react";
import { EmptyStar, FilledStar } from "../Icons/Star";

const Testimonial = ({ img, name, address, quote, star }) => {
  return (
    <>
      <div className="flex flex-col gap-3 my-auto">
        <div className="h-24 w-24 rounded-full overflow-hidden mx-auto">
          <img className="h-full w-full object-cover" src={img} alt="user" />
        </div>
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-sm text-gray-400 font-semibold">{address}</p>
        </div>
        <div>
          <p className="text-4xl font-bold leading-snug lg:text-2xl md:text-2xl sm:text-xl">
            {quote}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-2 w-72 text-center mx-auto my-5">
          {[...Array(star)].map((x, i) => (
            <FilledStar key={i} />
          ))}
          {5 - star > 0 &&
            [...Array(5 - star)].map((x, i) => <EmptyStar key={i} />)}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
