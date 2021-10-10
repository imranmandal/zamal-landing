import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="h-full min-h-screen px-20 py-8 bg-secondary flex flex-col justify-evenly">
      <h1 className="text-5xl mb-10 text-center">More</h1>
      <div className="grid grid-cols-4 gap-5 md:flex md:flex-wrap md:w-full md:overflow-x-auto sm:flex sm:flex-wrap sm:w-full sm:overflow-x-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardSection;
