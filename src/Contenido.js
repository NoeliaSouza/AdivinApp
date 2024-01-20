import './Contenido.css';
import React, { useState } from 'react';


function Contenido(props){
    
    const [input, setInput] = useState('');

    const soloNumeros = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length<=2){
            setInput(value);
        }
        
    };

    return(
        <div class="contenedor">
            <p>{props.mensajeContenido}</p>
            <input type="text" id="inputIngresado" placeholder='Escribe un número' value={input} onChange={soloNumeros} ></input>
        </div>
    );
   
}


export default Contenido;