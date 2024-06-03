"use client";
import { useState, useEffect } from "react";
import { HomePageData } from "@/config/HomePageData";
import Button from "../ui/Button";

import Header from "../header/Header";
import TextTabs from "../Tabs/TextTabs";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {HomePageData.title}
            </h2>
            <p className="text-gray-300">{HomePageData.description}</p>
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
      <TextTabs />

      <div>
        <Header />
      </div>
    </>
  );
};

export default Hero;
