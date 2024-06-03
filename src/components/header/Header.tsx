"use client";
import { useState } from "react";
import Link from "next/link";
import GetStarted from "../ui/GetStarted";

const Header = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "About Me", path: "about" },
    { title: "Projects", path: "#" },
    { title: "Blog", path: "#" },
  ];

  return (
    <div>
      <header>
        <div className="max-w-screen-xl  mx-auto px-4 md:px-8"></div>
        <nav className=" shadow-sm shadow-gray-400/10 border-b border-gray-700">
          <div className="flex items-center justify-center max-w-screen-xl mx-auto px-4 md:px-8">
            <ul className="flex items-center gap-x-8">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-300 hover:text-gray-400 p-2">
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
