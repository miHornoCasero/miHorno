import React from "react";
import Lottie from "lottie-react";
import myAnimation from "/src/assets/Stonemason.json";

function EnConstruccion() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Lottie
          animationData={myAnimation}
          loop={true}
          className="w-[30%]"
        />
        <h1>EN CONSTRUCCION</h1>
      </div>
    </>
  );
}

export default EnConstruccion;