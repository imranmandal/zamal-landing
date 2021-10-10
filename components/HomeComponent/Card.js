import React from "react";
import Image from "next/image";
import Button from "../Button";

const Card = () => {
  return (
    <>
      <div className="grid grid-rows-1 w-full rounded-3xl shadow-2xl overflow-hidden m-auto bg-white">
        <div className="h-full">
          <Image
            src="/assets/cardimg1.jpg"
            height="200"
            width="288"
            objectFit="cover"
            alt="cardimg"
          ></Image>
        </div>
        <div className="p-4 pb-0">
          <p className="leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            exercitationem placeat debitis corporis soluta vel autem iure quod.
          </p>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Card;
