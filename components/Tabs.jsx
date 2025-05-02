import React from "react";
import { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Historia from "./Historia";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Modelo 3D", "Controles", "Historia" , "About"];
  const contents = [
    <Tab1 /> ,
    <Tab2 />,
    <Historia /> , 
    "About"
  ];

  return (
    <div className="mt-5">

      <nav className=" gap-3 intems-center text-center flex">
        {tabs.map((tab, index) => (
          <button
            key={`tab_${index}`}
            className={` px-4 border  w-75 ${
              activeTab === index ? "bg-blue-400 text-white" : ""
            } py-3 hover:bg-blue-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="flex flex-col my-min-w-[1000px]">
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
