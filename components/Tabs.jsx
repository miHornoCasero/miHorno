import React from "react";
import { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Historia from "./Historia";
import TabCursos from "./TabCursos";
import TabAbout from "./TabAbout";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Modelo 3D", "Controles", "Historia", "About" , "Cursos"];
  const contents = [<Tab1 />, <Tab2 />, <Historia />, <TabAbout /> , <TabCursos />];

  return (
    <div className="mt-0">
      <div className="bg-orange-200 rounded-lg p-2">
        <nav className=" gap-3 intems-center text-center flex rounded-lg mt-5">
          {tabs.map((tab, index) => (
            <button
              key={`tab_${index}`}
              className={` px-4 border  w-60 ${
                activeTab === index ? "bg-blue-400" : "bg-white"
              } py-3 hover:bg-blue-300 rounded-lg text-lg font-bold text-black text-[25px]`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col">
        {contents &&
          contents.map((content, index) => {
            if (activeTab === index) {
              return (
                <div className=" py-3 px-2" key={`content_${index}`}>
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
