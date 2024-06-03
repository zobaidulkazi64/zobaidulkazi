"use client";
import { useState, useEffect } from "react";
import { HomePageData } from "@/config/HomePageData";
import Button from "../ui/Button";
import GetStarted from "../ui/GetStarted";
import Link from "next/link";
import Brand from "../brand/Brand";

const Hero = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Features", path: "#" },
    { title: "Integrations", path: "#" },
    { title: "Customers", path: "#" },
    { title: "Pricing", path: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn")) setState(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="h-svh">
        <header>
          <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
            <Brand />
          </div>
          <nav
            className={`pb-5 md:text-sm ${
              state
                ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => (
                    <li key={idx} className="text-gray-300 hover:text-gray-400">
                      <Link href={item.path} className="block">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <GetStarted />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
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
            <p>is a full-stack developer</p>
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
