"use client";

import Link from "next/link";
import React, { useState } from "react";
import AboutMeComponent from "./aboutMe/AboutMe";
import ServicesComponent from "./services/Services";
import FAQComponent from "./FAQ/FAQ";
import ContactComponent from "./contact/Contact";
import ProjectsComponent from "./project/Projects";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("stats");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMenuOpen(false); // Close the menu after clicking on a tab
  };

  return (
    <div className="container mx-auto bg-white border border-gray-200 rounded-lg shadow ">
      {/* Responsive Menu for Small Screens */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 sm:hidden">
        {/* TODO: Add responsive menu here */}
        <div className="flex ">
          <p className="block  text-left justify-center text-7xl text-orange-400">
            =
          </p>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block w-full py-3 justify-center mt-3 font-mono text-3xl text-left"
          >
            {activeTab === "stats" && "Statistics"}
            {activeTab === "about" && "Services"}
            {activeTab === "project" && "Projects"}
            {activeTab === "contact" && "Contact"}
            {activeTab === "new" && "New Section"}
          </button>
          <Link href="/">
            <h1 className="inline-block w-full py-3 text-4xl font-bold text-fuchsia-500 px-4 text-left">
              ZK
            </h1>
          </Link>
        </div>
        {menuOpen && (
          <div className="bg-gray-50 border-t border-gray-200">
            <button
              onClick={() => handleTabClick("stats")}
              className={`block w-full py-3 px-4 text-left ${
                activeTab === "stats" ? "bg-gray-100" : ""
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => handleTabClick("about")}
              className={`block w-full py-3 px-4 text-left ${
                activeTab === "about" ? "bg-gray-100" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleTabClick("project")}
              className={`block w-full py-3 px-4 text-left ${
                activeTab === "project" ? "bg-gray-100" : ""
              }`}
            >
              Services
            </button>
            <button
              onMouseDown={() => handleTabClick("contact")}
              className={`block w-full py-3 px-4 text-left ${
                activeTab === "contact" ? "bg-gray-100" : ""
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => handleTabClick("new")}
              className={`block w-full py-3 px-4 text-left ${
                activeTab === "new" ? "bg-gray-100" : ""
              }`}
            >
              FAQ
            </button>
          </div>
        )}
      </div>
      {/* End Responsive Menu */}

      {/* Tabs for Larger Screens */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 hidden sm:block">
        <ul
          className="text-sm font-medium text-center text-gray-500 divide-x  rounded-lg flex  rtl:divide-x-reverse"
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
              About Me
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
              Projects
            </button>
          </li>
          <li className="w-full">
            <button
              id="project-tab"
              data-tabs-target="#project"
              type="button"
              role="tab"
              aria-controls="project"
              aria-selected={activeTab === "project"}
              className={`inline-block w-full p-4 rounded-se-lg ${
                activeTab === "project"
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-50 "
              } focus:outline-none`}
              onClick={() => handleTabClick("project")}
            >
              Services
            </button>
          </li>
          <li className="w-full">
            <button
              id="contact-tab"
              data-tabs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected={activeTab === "contact"}
              className={`inline-block w-full p-4 rounded-se-lg ${
                activeTab === "contact"
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-50 "
              } focus:outline-none`}
              onClick={() => handleTabClick("contact")}
            >
              Contact
            </button>
          </li>
          <li className="w-full">
            <button
              id="new-tab"
              data-tabs-target="#new"
              type="button"
              role="tab"
              aria-controls="new"
              aria-selected={activeTab === "new"}
              className={`inline-block w-full p-4 rounded-se-lg ${
                activeTab === "new"
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-50 "
              } focus:outline-none`}
              onClick={() => handleTabClick("new")}
            >
              FAQ
            </button>
          </li>
        </ul>
      </div>
      {/* End Tabs for Larger Screens */}

      {/* Tab Content */}
      <div className="border-t border-gray-200 " id="fullWidthTabContent">
        {/* Content for each tab */}
        <div
          className={`p-4 bg-white rounded-lg md:p-8 ${
            activeTab === "stats" ? "" : "hidden"
          }`}
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <AboutMeComponent />
        </div>
        <div
          className={`p-4 bg-white rounded-lg md:p-8  ${
            activeTab === "about" ? "" : "hidden"
          }`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <ProjectsComponent />
        </div>
        <div
          className={`p-4 bg-white rounded-lg  ${
            activeTab === "project" ? "" : "hidden"
          }`}
          id="project"
          role="tabpanel"
          aria-labelledby="project-tab"
        >
          <ServicesComponent />
        </div>
        <div
          className={`p-4 bg-white rounded-lg  ${
            activeTab === "contact" ? "" : "hidden"
          }`}
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <ContactComponent />
        </div>
        <div
          className={`p-4 bg-white rounded-lg  ${
            activeTab === "new" ? "" : "hidden"
          }`}
          id="new"
          role="tabpanel"
          aria-labelledby="new-tab"
        >
          <FAQComponent />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
