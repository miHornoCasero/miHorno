import React from "react";
import ModeloBanco from "./ModeloBanco";

const Tab1 = () => {
  return (
    <>
      <div className="">


        <div id="2" className="bg-custom mt-5 mb-5 py-3 px-3 flex items-center justify-center">
          <ModeloBanco />
        </div>

        <div className="mt-5 mb-5 py-5 px-2 flex flex-col items-center">
          <h1>Modelo de horno</h1>
          <h2 className="text-center text-2xl font-bold mt-3">         
            El modelo de 55 lts, con contactor externo y controlador mio. 
          </h2>
        </div>



      </div>
    </>
  );
};

export default Tab1;
