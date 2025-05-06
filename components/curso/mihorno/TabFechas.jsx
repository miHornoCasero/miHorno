import React from "react";

const TabFechas = () => {
    return(
        <div className="flex flex-col gap-2 mt-5">
            <h1>Fechas de curso</h1>
            <h2>Proximos cursos:</h2>
            <ul className="list-disc list-inside">
                <li>Curso presencial: 15 de diciembre 2024</li>
                <li>Curso online: 20 de diciembre 2024</li>
            </ul>
        </div>
    )   
}
export default TabFechas;   
    