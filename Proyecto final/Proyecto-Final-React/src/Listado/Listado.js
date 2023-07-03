import "./Listado.css";
import React, { useState } from 'react';

function Listado() {
 
 
    const [viviendas, setViviendas] = useState([])

    const listaViviendas= ()=>{
      setViviendas([
        { id: 1, titulo: 'Casa en la playa', descripcion: 'Hermosa casa con vista al mar', precio: 200000 },
      {id: 2, titulo: 'Apartamento en la ciudad', descripcion: 'Acogedor apartamento en el centro de la ciudad', precio: 150000},])
    }

   
  return (
    <div>
      <h1>Lista de Viviendas</h1>
      <button onClick={listaViviendas}>Hacer Click</button>
      {viviendas.map(vivienda => (
        <div key={vivienda.id}>
          <h2>{vivienda.titulo}</h2>
          <p>{vivienda.descripcion}</p>
          <p>Precio: {vivienda.precio}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Listado;

