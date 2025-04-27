import React from "react";
import ModeloBanco from "./ModeloBanco";

const Tab1 = () => {
  return (
    <>
      <div>
        <div className="items-center justify-center bg-custom">
          <ModeloBanco />
        </div>

        <div className="mt-5 py-3 px-2 flex flex-col items-center">
          <h1>Banco Centrifugo</h1>
          <h2 className="text-center text-2xl font-bold mt-3">         
            Este modelo es el banco de pruebas de la UNGS 
          </h2>
        </div>
      </div>
    </>
  );
};

export default Tab1;
