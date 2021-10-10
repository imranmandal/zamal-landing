import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import { LeftIcon, RightIcon } from "../Icons/ArrowIcons";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActive((prevValue) =>
        prevValue + 1 < testimonial.length ? prevValue + 1 : 0
      );
    }, 5000);

    return clearTimeout();
  }, [active]);

  return (
    <>
      <div className="flex h-full min-h-screen max-h-screen text-center mx-20 py-20 lg:mx-10 md:mx-10 sm:mx-0">
        <div
          onClick={() =>
            setActive(
              prevValue + 1 < testimonial.length - 1 ? prevValue + 1 : 0
            )
          }
          className="my-auto mx-10 p-4 rounded-full shadow-2xl bg-secondary text-primary cursor-pointer md:hidden sm:hidden"
        >
          <LeftIcon />
        </div>
        <Testimonial
          img={testimonial[active].img}
          name={testimonial[active].name}
          address={testimonial[active].address}
          quote={testimonial[active].quote}
          star={testimonial[active].star}
        />
        <div
          onClick={() =>
            setActive((prevValue) =>
              prevValue - 1 > 0 ? prevValue - 1 : testimonial.length - 1
            )
          }
          className="my-auto mx-10 p-4 rounded-full shadow-2xl bg-secondary text-primary cursor-pointer md:hidden sm:hidden"
        >
          <RightIcon />
        </div>
      </div>
    </>
  );
};

export default Testimonials;

const testimonial = [
  {
    img: "/assets/user1.jpg",
    name: "Faraz Shaikh",
    address: "Mumbai, Maharashtra",
    quote:
      "Lorem ipsum dolor sit amet casperiores omnis quo exercitationem esse delectus recusandae. Ut dicta sed autem cumque numquam delectus similique inventore, non id.",
    star: 5,
  },
  {
    img: "/assets/user2.jpg",
    name: "Amina Khan",
    address: "Kolkata, Maharashtra",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et aliquid sint, asperiores omnis quo exercitationem esse delectus recusandae. Ut dicta sed autem cumque numquam delectus similique inventore, non id.",
    star: 4,
  },
  {
    img: "/assets/user3.jpg",
    name: "Salomon Bhoi",
    address: "Dubai, Maharashtra",
    quote:
      "Lorelit. Dolore et aliquid sint, asperiores omnis quo exercitationem esse delectus recusandae. Ut dicta sed autem cumque numquam delectus similique inventore, non id.",
    star: 5,
  },
];
