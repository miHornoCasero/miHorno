import React from "react";
import file1 from "/src/assets/file.pdf";

const TabCursos = () => {
  return (
    <div className="">
      <h1>TabCursos</h1>
      <h2>
        En esta seccion podras encontrar los cursos que ofrecemos, tanto
        presenciales como online.
      </h2>

      <div className="flex flex-col gap-2 mt-5">
        <a
          className="underline text-blue-600"
          href={file1}
          download
        >
          {" "}
          Descargar PDF 1
        </a>
        <a
          className="underline text-blue-600"
          href="./public/file.pdf"
          download
        >
          {" "}
          Descargar PDF 2
        </a>
        <a
          className="underline text-blue-600"
          href="./public/file.pdf"
          download
        >
          {" "}
          Descargar PDF 3
        </a>
        <a
          className="underline text-blue-600"
          href="./miHorno/public/file.pdf"
          download
        >
          {" "}
          Descargar PDF 4
        </a>
        <a
          className="underline text-blue-600"
          href="./miHorno/public/file.pdf"
          download
        >
          {" "}
          Descargar PDF 5
        </a>
      </div>
    </div>
  );
};
export default TabCursos;
