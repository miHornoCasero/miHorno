import React from "react";
import imagen1 from "/src/assets/foto-tonta.jpg";
import imagen2 from "/src/assets/foto-cintia.jpg";

const Historia = () => {
  return (
    <>
      <div className="flex flex-col w-[1000px]">



        <h1>Historia</h1>
        <h2>
          Fundada en 2024 por el Ing. Hernan Costantini y la Contadora Cintia
          Costantini, somos una pequeña PYME familiar que se dedica a la
          fabricacion de hornos electricos para ceramica. Nuestro objetivo es
          poner al alcance de todos los ceramistas, un horno electrico de
          calidad, a un precio accesible.
        </h2>

        <div className=" mt-5 mb-5 py-5 px-2 flex items-center justify-center gap-5">
          <div>
            <img
              className="w-[300px] h-[300px]"
              src={imagen1}
              alt="Ing. Hernan Costantini"
            />
            <p>Hernan Costantini</p>
          </div>

          <div>
            <img
              className="w-[300px] h-[300px]"
              src={imagen2}
              alt="Contadora Cintia Costantini"
            />
            <p>Cintia Costantini</p>
          </div>
        </div>




      </div>
    </>
  );
};
export default Historia;
