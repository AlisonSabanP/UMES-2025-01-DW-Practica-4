import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [pantalla, setPantalla] = useState('0');
  const [entradaActual, setEntradaActual] = useState('');
  const [cadenaOperacion, setCadenaOperacion] = useState('');

  const manejarClickNumero = (numero) => {
    setEntradaActual(entradaActual === '0' ? String(numero) : entradaActual + numero);
    setCadenaOperacion(cadenaOperacion === '0' ? String(numero) : cadenaOperacion + numero);
  };

  const manejarClickOperador = (nuevoOperador) => {
    if (entradaActual) {
      setCadenaOperacion(cadenaOperacion + ' ' + nuevoOperador + ' ');
      setEntradaActual('');
    }
  };

  const manejarClickIgual = () => {
    if (cadenaOperacion) {
      try {
        const expresionEvaluable = cadenaOperacion.replace(/x/g, '*').replace(/÷/g, '/');
        const resultado = eval(expresionEvaluable);
        setPantalla(String(resultado));
        setCadenaOperacion(String(resultado));
        setEntradaActual(String(resultado));
      } catch (error) {
        setPantalla('Error', error);
        setCadenaOperacion('');
        setEntradaActual('');
      }
    }
  };

  const manejarClickLimpiar = () => {
    setPantalla('0');
    setEntradaActual('');
    setCadenaOperacion('0');
  };

  const manejarClickDecimal = () => {
    if (!entradaActual.includes('.')) {
      setEntradaActual(entradaActual + '.');
      setCadenaOperacion(cadenaOperacion + '.');
    }
  };

  return (
    <div className="Calculadora">
      <div className="pantalla">{cadenaOperacion || pantalla}</div>
      <div className="contenedor-botones">
        <button className="boton limpiar" onClick={manejarClickLimpiar}>AC</button>
        <button className="boton" onClick={() => manejarClickNumero(7)}>7</button>
        <button className="boton" onClick={() => manejarClickNumero(8)}>8</button>
        <button className="boton" onClick={() => manejarClickNumero(9)}>9</button>
        <button className="boton operador" onClick={() => manejarClickOperador('÷')}>÷</button>
        <button className="boton" onClick={() => manejarClickNumero(4)}>4</button>
        <button className="boton" onClick={() => manejarClickNumero(5)}>5</button>
        <button className="boton" onClick={() => manejarClickNumero(6)}>6</button>
        <button className="boton operador" onClick={() => manejarClickOperador('x')}>x</button>
        <button className="boton" onClick={() => manejarClickNumero(1)}>1</button>
        <button className="boton" onClick={() => manejarClickNumero(2)}>2</button>
        <button className="boton" onClick={() => manejarClickNumero(3)}>3</button>
        <button className="boton operador" onClick={() => manejarClickOperador('-')}>-</button>
        <button className="boton cero" onClick={() => manejarClickNumero(0)}>0</button>
        <button className="boton" onClick={manejarClickDecimal}>.</button>
        <button className="boton operador" onClick={() => manejarClickOperador('+')}>+</button>
        <button className="boton igual" onClick={manejarClickIgual}>=</button>
      </div>
    </div>
  );
}

export default Calculadora;