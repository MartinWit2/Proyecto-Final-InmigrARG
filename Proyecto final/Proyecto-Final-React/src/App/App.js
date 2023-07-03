import Listado from "../Listado/Listado";
import FormVivienda from "../publicarViviendaForm/FormVivienda";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [Vivienda, setViviendas] = useState([]);
  
  useEffect(() => {
    const obtenerHoteles= async() =>{
      const url = 'http://localhost5000/Vivienda';
      const result = await axios.get(url);
      setViviendas(result.data);
    }
    obtenerHoteles()
  },[]);

  return (
    <>
      <Listado Vivienda={Vivienda}></Listado>
      <FormVivienda></FormVivienda>
    </>
  );
}

export default App;
