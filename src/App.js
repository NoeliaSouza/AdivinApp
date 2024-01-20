
import './App.css';

import Titulo from './Titulo';
import Contenido from './Contenido';



function App() {

  function adivinar(){
    let ingresado=document.getElementById("inputIngresado").value;
    let numeroRandom=crearAleatorio(0,10);

    if (ingresado!==''){
      ingresado=parseInt(document.getElementById("inputIngresado").value);
      if(ingresado<1 || ingresado >10){
        alert("Ingrese un número valido, del 1 al 10");
        
        
      }else{

        if(ingresado===numeroRandom){
          alert("¡Adivinaste! El numero era "+numeroRandom);
        }
        else{
          alert("Fallaste! El numero era "+numeroRandom);
        }   
      }
    }else{
      alert("Debe ingresar un número, del 1 al 10");
    }
       


  }

  function crearAleatorio(minimo, maximo){
    maximo=maximo+1;
    let resultado=Math.floor(Math.random()*(maximo-minimo)+minimo);
    return resultado;
  }

  return (
    <div class="contenedorPrincipal">

      <div class="contenedorTitulo">
        <Titulo mensaje="Adivina el número"></Titulo>
      </div>

      <div class="contenedorContenido">
        
        <Contenido mensajeContenido="→Escribe un número del 1 al 10→"  ></Contenido>
        <button onClick={adivinar}>Adivinar</button>
        
      </div>

    </div>
  );
}

export default App;
