import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../Button";

const HeroImageSection = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/gallery");
  };
  return (
    <>
      <div className="h-full min-h-screen">
        <div className="h-96 overflow-hidden relative bg-hero-image bg-cover bg-center px-28 pt-6 md:px-6 sm:px-3 sm:text-center">
          <Image
            src="/assets/logo.png"
            alt="heroimage"
            height="100"
            width="100"
          />
          <h1 className="text-9xl font-bold mt-24 text-primary md:text-8xl md:mt-36 sm:mt-40 sm:text-6xl">
            ZAMAL
          </h1>
        </div>
        <div className="px-28 md:px-6 sm:text-center sm:px-3">
          <h2 className="text-6xl md:text-5xl sm:text-4xl font-bold w-2/3 mt-5 md:w-3/4 sm:w-full">
            CIVIL CONTRACTOR AND DEVELOPER
          </h2>
          <Button onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default HeroImageSection;
