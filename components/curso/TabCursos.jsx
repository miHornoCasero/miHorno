import React from "react";
import { useState } from "react";
import TabMiHorno from "./mihorno/TabMiHorno";
import TabCursosMiHorno from "./mihorno/TabCursosMiHorno";


const TabCursos = () => {

    const [activeTab2, setActiveTab2] = useState(0);
    const tabs2 = ["Mi horno", "Tecnicas de horneado", "Pintura"];
    const contents2 = [<TabCursosMiHorno /> , "Tecnicas de horneado", "Pintura"];



    return (
        <div className="mt-0">
          <div className="bg-red-200 rounded-lg p-2 mr-50">
            <nav className=" gap-3 intems-center text-center flex rounded-lg">
              {tabs2.map((tab, index) => (
                <button
                  key={`tab_${index}`}
                  className={` px-3 border  w-55 ${
                    activeTab2 === index ? "bg-blue-400 text-black" : "bg-white"
                  } py-2 hover:bg-blue-300 rounded-lg text-[15px] font-bold text-black `}
                  onClick={() => setActiveTab2(index)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
    
          <div className="flex flex-col">
            {contents2 &&
              contents2.map((content, index) => {
                if (activeTab2 === index) {
                  return (
                    <div className=" mt-1 py-3 px-0" key={`content_${index}`}>
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

    export default TabCursos;