import React from "react";
import '../css/tarea.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

const Tarea = ( {id, texto, completada,  completarTarea, eliminarTarea} ) => (
    <div className={completada? "tarea-contenedor completada" : "tarea-contenedor"}>
        <div className="tarea-texto">
            {texto}
        </div>
        <div className="tarea-icono-contenedor">
            <AiOutlineCheckCircle className="tarea-icono" onClick={()=>completarTarea(id)}/>
        </div>
        <div className="tarea-icono-contenedor">
            <AiOutlineCloseCircle className="tarea-icono" onClick={()=>eliminarTarea(id)}/>
        </div>
    </div>
);

export default Tarea