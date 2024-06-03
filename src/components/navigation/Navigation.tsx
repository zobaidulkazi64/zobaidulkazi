// components/Navigation.tsx
import React from "react";

const Navigation = ({
  navigation,
  state,
}: {
  navigation: { title: string; path: string }[];
  state: boolean;
}) => (
  <nav
    className={`pb-5 md:text-sm ${
      state
        ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
        : ""
    }`}
  >
    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
      <div
        className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
          state ? "block" : "hidden"
        } `}
      >
        <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item, idx) => (
            <li key={idx} className="text-gray-300 hover:text-gray-400">
              <a href={item.path} className="block">
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
