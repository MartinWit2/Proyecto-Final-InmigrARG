import Listado from "../Listado/Listado";
import FormVivienda from "../publicarViviendaForm/FormVivienda";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [Vivienda, setViviendas] = useState([]);

  const agregarVivienda = (viv) => {
    setViviendas([...Vivienda, viv]);
    console.log(Vivienda);
    let url = 'http://localhost:5000/Vivienda';
    axios.post(url,viv)
    setViviendas(axios.get(url))
    console.log(Vivienda);
  
  }
  
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
   <BrowserRouter>
    <Routes>
    <Route path="/Viviendas" element= {<Listado Vivienda={Vivienda}></Listado>}></Route>
    <Route path="/Form/" element={<FormVivienda agregarVivienda={agregarVivienda}></FormVivienda>}></Route>
    </Routes>
   </BrowserRouter>
   </>
      
      
  );
}

export default App;
