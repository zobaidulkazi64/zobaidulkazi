"use client";
// Tabs.tsx

import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("stats");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mx-auto bg-white border border-gray-200 rounded-lg shadow ">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select tab
          </label>
          <select
            id="tabs"
            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={activeTab}
            onChange={(e) => handleTabClick(e.target.value)}
          >
            <option value="stats">Statistics</option>
            <option value="about">Services</option>
            <option value="faq">FAQ</option>
            <option value="contact">Contact</option>
          </select>
        </div>
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 divide-x  rounded-lg sm:flex  rtl:divide-x-reverse"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <li className="w-full">
            <button
              id="stats-tab"
              data-tabs-target="#stats"
              type="button"
              role="tab"
              aria-controls="stats"
              aria-selected={activeTab === "stats"}
              className={`inline-block w-full p-4 rounded-ss-lg ${
                activeTab === "stats" ? "bg-gray-50 hover:bg-gray-100" : ""
              } focus:outline-none`}
              onClick={() => handleTabClick("stats")}
            >
              Statistics
            </button>
          </li>
          <li className="w-full">
            <button
              id="about-tab"
              data-tabs-target="#about"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected={activeTab === "about"}
              className={`inline-block w-full p-4 ${
                activeTab === "about"
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-50 "
              } focus:outline-none `}
              onClick={() => handleTabClick("about")}
            >
              Services
            </button>
          </li>
          <li className="w-full">
            <button
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected={activeTab === "faq"}
              className={`inline-block w-full p-4 rounded-se-lg ${
                activeTab === "faq"
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-50 "
              } focus:outline-none`}
              onClick={() => handleTabClick("faq")}
            >
              FAQ
            </button>
          </li>
          <li className="w-full">
            <button
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected={activeTab === "faq"}
              className={`inline-block w-full p-4 rounded-se-lg ${
                activeTab === "faq"
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-50 "
              } focus:outline-none`}
              onClick={() => handleTabClick("faq")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-200 " id="fullWidthTabContent">
        <div
          className={`p-4 h-screen bg-white rounded-lg md:p-8 ${
            activeTab === "stats" ? "" : "hidden"
          }`}
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <h2 className="text-2xl font-semibold mb-4">Statistics Content</h2>
          <p>This is where your statistics content goes.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            numquam corrupti. Dolorum harum ad soluta minima odio beatae
            veritatis, saepe, commodi delectus laboriosam itaque. Quam incidunt
            dignissimos aspernatur repudiandae perferendis?Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ex commodi deserunt earum
            incidunt quasi dolore debitis temporibus nemo molestias labore,
            enim, quod tempore quibusdam provident velit eius totam, quam neque?
          </p>
        </div>
        <div
          className={`p-4 h-screen bg-white rounded-lg md:p-8  ${
            activeTab === "about" ? "" : "hidden"
          }`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <h2 className="text-2xl font-semibold mb-4">Services Content</h2>
          <p>This is where your services content goes.</p>
        </div>
        <div
          className={`p-4 h-screen bg-white rounded-lg  ${
            activeTab === "faq" ? "" : "hidden"
          }`}
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <h2 className="text-2xl font-semibold mb-4">FAQ Content</h2>
          <p>This is where your FAQ content goes.</p>
        </div>

        <div
          className={`p-4 h-screen bg-white rounded-lg  ${
            activeTab === "faq" ? "" : "hidden"
          }`}
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <h2 className="text-2xl font-semibold mb-4">FAQ Content</h2>
          <p>This is where your FAQ content goes.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Tabs;
