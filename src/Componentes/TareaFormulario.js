import React, {useState} from "react";
import {AiFillFileAdd} from 'react-icons/ai'
import '../css/tareaFormulario.css'
import {v4 as uuidv4} from 'uuid'

function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
       

    props.onSubmit(tareaNueva);
    }

    return(
    <form className="tarea-formulario">
        <input
        className="tarea-input"
        type="text"
        placeholder="Nueva Tarea..."
        name="texto"
        onChange={manejarCambio}
        
        />
        <div className="contenedor-icono">           
            <AiFillFileAdd className="icono-agregar" onClick={manejarEnvio}></AiFillFileAdd>
        </div>
        
    </form>
    )
}

export default TareaFormulario;