import './Titulo.css';
import logo from './adivino.png';

function Titulo(props){
    return(
        <div class="contenedor">
            <img src={logo} alt="logo" />
            <h1>{props.mensaje}</h1>
            
        </div>
    );

}

export default Titulo;