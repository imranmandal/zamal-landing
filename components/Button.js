import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="bg-primary py-3 px-6 rounded-full font-bold text-primary hover:shadow-lg my-5"
        {...props}
      >
        View Gallery
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </>
  );
};

export default Button;
