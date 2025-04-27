import React from "react";
import ModeloBanco from "./ModeloBanco";

const Tab1 = () => {
  return (
    <>
      <div>
        <div className=" flex-1 flex-col items-center justify-center w-full">
          <ModeloBanco />
        </div>

        <div className="mt-5 py-3 px-2 flex flex-col items-center">
          <h1>Tab 1</h1>
          <p>This is the content for Tab 1.</p>
        </div>
      </div>
    </>
  );
};

export default Tab1;
