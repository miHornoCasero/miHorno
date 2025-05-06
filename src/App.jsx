import { useState } from "react";
import "./App.css";
import Tabs from "/components/Tabs";
import Historia from "../components/Historia";
import logo from "/src/assets/logo-bn-2.bmp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tabs />

      <div className="bg-gray-700">
        <h1>Contacto:</h1>

        <div className="flex flex-row">

          <img
            src={logo}
            alt="Logo"
            className="w-[100px] h-[100px] rounded-full mt-10"
          />

          <div className=" px-50">
            <div> Celular1: 15 3333 5555</div>
            <div> Celular2: 15 3333 5555</div>
          </div>

        </div>


      </div>
    </>
  );
}

export default App;
