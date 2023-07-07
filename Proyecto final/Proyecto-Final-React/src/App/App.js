import Listado from "../Listado/Listado";
import FormVivienda from "../publicarViviendaForm/FormVivienda";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [Vivienda, setViviendas] = useState([]);

  
  useEffect(() => {
    //const obtenerHoteles= async() =>{
      
    const url = 'http://localhost:5000/Vivienda';
      axios.get(url) 
      .then((result) => {
        console.log(result.data);
        setViviendas(result.data);
      });      
    //}
  },[]);

  return (
    <>
      <Listado Vivienda={Vivienda}></Listado>
      <FormVivienda></FormVivienda>
    </>
  );
}

export default App;
