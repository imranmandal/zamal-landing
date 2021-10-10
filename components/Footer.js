import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex w-full px-20 justify-between py-8 bg-main text-white select-none md:flex-col md:mx-auto sm:flex-col sm:px-10">
        <div className="flex gap-4">
          <Image
            className="shadow-2xl"
            height="100"
            width="100"
            src="/assets/logo.png"
            alt="logo"
          />
          <div className="mt-auto">
            <h1 className="text-4xl font-semibold">ZAMAL</h1>
            <p>CIVIL CONTRACTOR AND DEVELOPER</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="flex flex-wrap gap-2 mt-auto md:mt-10 md:gap-5 sm:mt-8 sm:gap-5">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC6r7Pb1CT7WVzL8Mm22WWeg"
              className="flex gap-2"
            >
              <span className="mb-auto">YouTube</span>
              <FaYoutube className="my-auto text-red-500 bg-white p-1 h-6 w-6 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
