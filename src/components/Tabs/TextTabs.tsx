"use client";
import React, { useState } from "react";
import tabsData, { CodeEditorData } from "@/config/TabsData";

import CodeDisplay from "./CodeDisplay";

const Tabs: React.FC = () => {
  const [openTab, setOpenTab] = useState<number>(1);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabsData.map((tab) => (
              <li
                key={tab.id}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <button
                  className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                    openTab === tab.id
                      ? "text-white bg-blue-600"
                      : "text-blue-600 "
                  }`}
                  onClick={() => setOpenTab(tab.id)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={openTab === tab.id ? "block" : "hidden"}
                  id={`link${tab.id}`}
                >
                  <p className="text-gray-100 text-2xl font-light">
                    {tab.content}
                  </p>

                  {CodeEditorData.map((snippet) => (
                    <div key={snippet.id} className="mb-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {snippet.title}
                      </h2>
                      <CodeDisplay
                        key={snippet.id}
                        code={snippet.code}
                        language={snippet.language}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TabsRender() {
  return <Tabs />;
}
