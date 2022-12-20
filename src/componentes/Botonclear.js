import React from "react";
import "../hoja-de-estilo/botonclear.css";
const Botonclear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default Botonclear;
