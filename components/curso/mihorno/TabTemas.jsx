import React from "react";

const TabTemas = () => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <h1 className="text-2xl font-bold">Temas del curso</h1>
      <p className="text-lg break-words max-w-screen-lg">
        No hay requisitos previos para realizar el curso. Todos los temas se explicaran de manera que cualquiera pueda entenderlos. Ademas se entregaran 
        fotocopias de planos y partes importantes para que el alumno tenga. Y por ultimo, tambien habra disponible material digital para descargar.
      </p>
      <ul className="list-decimal list-inside py-5">
        <div>0. Definicion de calor</div>
        <li>¿Qué es un horno? Analogía con balde</li>
        <li>Unidades matematicas</li>
        <li>Dimensiones, áreas y volúmenes</li>
        <li>Materiales aislantes</li>
        <li>Parámetros del K26 (y precio)</li>
        <li>Placas standard y soportes</li>
        <li>Selección de las dimensiones que necesito</li>
        <li>Transferencia de calor (conducción, convección y radiación)</li>
        <li>La ecuación de transferencia de calor</li>
        <li>Potencia eléctrica que necesito para mi horno</li>
        <li>Resistencias eléctricas</li>
        <li>El multímetro y la pinza amperométrica</li>
        <li>Armado de las resistencias espirales</li>
        <li>Medición de temperatura: termocupla y termistor</li>
        <li>Diferencia entre horno trifásico y monofásico</li>
        <li>Estimación de consumo: ¿cuánto voy a pagar de luz?</li>
        <li>El controlador: ¿cómo funciona?</li>
        <li>Curvas que voy a usar</li>
        <li>Componentes eléctricos auxiliares</li>
        <li>Esquema eléctrico</li>
        <li>Armando el horno</li>
        <li>Chapas, soportes, accesorios</li>
        <li>Lista de materiales completa</li>
        <li>Horno funcionando</li>
      </ul>
    </div>
  );
};
export default TabTemas;
