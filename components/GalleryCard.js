import React, { useState } from "react";
import { EmptyHeart, FilledHeart } from "./Icons/Heart";

const GalleryCard = ({ imgUrl, isFavourite, workTitle, description }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(isFavourite);

  return (
    <>
      <div>
        <div className="bg-gray-200 rounded-2xl h-64 w-full overflow-hidden border-2 border-gray-400">
          <button
            onClick={() => setIsHeartFilled((prevValue) => !prevValue)}
            className="absolute"
          >
            {isHeartFilled ? <FilledHeart /> : <EmptyHeart />}
          </button>
          <img className="object-cover h-full w-full" src={imgUrl} alt="card" />
        </div>
        <div className="py-2">
          <h3 className="font-semibold">{workTitle}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
