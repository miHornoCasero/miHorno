import React from "react";
import { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const contents = [
    <Tab1 /> ,
    <Tab2 />,
    <Tab3 />
  ];

  return (
    <div className="mt-5 py-3 px-5 flex flex-col max-w-xl">
      <div className="flex gap-3 justify-evenly ">
        {tabs.map((tab, index) => (
          <button
            key={`tab_${index}`}
            className={` border flex-1 ${
              activeTab === index ? "bg-blue-400 text-white" : ""
            } py-3 hover:bg-blue-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        {contents &&
          contents.map((content, index) => {
            if (activeTab === index) {
              return (
                <div
                  className=" mt-5 py-3 px-2"
                  key={`content_${index}`}
                >
                  {content}
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Tabs;
