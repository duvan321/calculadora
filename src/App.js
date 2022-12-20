import "./App.css";
import freecodecamplogo from "./imagenes/freecodecamp.logo.jpg";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import Botonclear from "./componentes/Botonclear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularesultados = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("por favor ingrese valores para realizar los calculos");
    }
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freecodecamplogo}
          className="freecodecamp-logo"
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput} n>
            5
          </Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularesultados}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Botonclear manejarClear={() => setInput("")}>clear</Botonclear>
        </div>
      </div>
    </div>
  );
}

export default App;
// 4:51:04 //
