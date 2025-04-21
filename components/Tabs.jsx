import React from "react";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const contents = [
    "Content for Tab 1",
    "Content for Tab 2",
    "Content for Tab 3",
  ];

  return (
    <div className="mt-5">
      <div className="flex gap-3 justify-evenly ">
        {tabs.map((tab, index) => (
          <button
            key={`tab_${index}`}
            className={`px-4 border flex-1 ${
              activeTab === index ? "bg-blue-400 text-white" : ""
            } py-3 hover:bg-blue-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col mx-auto">
        {contents &&
          contents.map((content, index) => {
            if (activeTab === index) {
              return (
                <div
                  className="border mt-5 h-196 py-3 px-2"
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
