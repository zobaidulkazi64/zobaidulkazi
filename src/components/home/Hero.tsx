"use client";
import { useState, useEffect } from "react";
import { HomePageData } from "@/config/HomePageData";
import Button from "../ui/Button";

import Header from "../header/Header";

const Hero = () => {
  return (
    <div>
      <div className="h-svh">
        <Header />

        <section className="relative">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                {HomePageData.title}
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                {HomePageData.description}
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="justify-center items-center gap-x-3 sm:flex"
              >
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                />
                <Button />
              </form>
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
