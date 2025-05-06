import React from "react";
import { useState } from "react";
import TabTemas from "./TabTemas";
import TabFechas from "./TabFechas";



const TabCursosMiHorno = () => {

    const [activeTab3, setActiveTab3] = useState(0);
    const tabs3 = ["Temas", "Materiales del curso", "Fechas de curso"];
    const contents3 = [<TabTemas /> , "Materiales del curso", <TabFechas />];



    return (
        <div className="mt-0">
          <div className="bg-yellow-200 rounded-lg p-1.5 mr-100">
            <nav className=" gap-3 intems-center text-center flex rounded-lg">
              {tabs3.map((tab, index) => (
                <button
                  key={`tab_${index}`}
                  className={` px-3 border  w-45 ${
                    activeTab3 === index ? "bg-blue-400 text-black" : "bg-white"
                  } py-1 hover:bg-blue-300 rounded-lg text-[14px] font-bold text-black `}
                  onClick={() => setActiveTab3(index)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
    
          <div className="flex flex-col">
            {contents3 &&
              contents3.map((content, index) => {
                if (activeTab3 === index) {
                  return (
                    <div className=" mt-5 py-3 px-2" key={`content_${index}`}>
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

    export default TabCursosMiHorno;