import Listado from "../Listado/Listado";
import FormVivienda from "../publicarViviendaForm/FormVivienda";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [Vivienda, setViviendas] = useState([]);

  
  /*useEffect(() => {
    //const obtenerHoteles= async() =>{
      
    const url = 'http://localhost:5000/Vivienda';
      axios.get(url) 
      .then((result) => {
        console.log(result.data);
        setViviendas(result.data);
      });      
    //}
  },[]);*/

  useEffect(() => {
    const obtenerViviendas = async () => {
    const url = 'http://localhost:5000/Vivienda';
    console.log("fui a la api");
    const result = await axios.get(url);
    setViviendas(result.data);
    }
    
  
    }, []);

  return (
    <>
   <div>
    <Listado Vivienda={Vivienda}></Listado>
    <FormVivienda></FormVivienda>
   </div>
      
      
    </>
  );
}

export default App;
